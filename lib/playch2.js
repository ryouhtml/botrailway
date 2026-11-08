const axios = require("axios")
const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")
const yts = require("yt-search")
const os = require("os")
const https = require("https")

const BASE_URL = "https://hub.ytconvert.org/api/download"

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Origin": "https://media.ytmp3.gg",
  "Referer": "https://media.ytmp3.gg/",
  "User-Agent": "Mozilla/5.0"
}

const delay = ms => new Promise(res => setTimeout(res, ms))

function extractVideoId(url) {
  try {
    const u = new URL(url)

    if (u.searchParams.get("v"))
      return u.searchParams.get("v")

    if (u.hostname.includes("youtu.be"))
      return u.pathname.split("/")[1]

    if (u.pathname.includes("/shorts/"))
      return u.pathname.split("/shorts/")[1]

    return null
  } catch {
    return null
  }
}

function buildThumbnail(url, fallback = null) {
  const id = extractVideoId(url)
  if (!id) return fallback
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

async function requestConvert(payload) {
  const res = await axios.post(BASE_URL, payload, { headers })
  return res.data
}

async function waitUntilReady(statusUrl) {
  while (true) {
    const res = await axios.get(statusUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    })

    const data = res.data

    if (data.status === "completed" || data.downloadUrl)
      return data

    if (data.status === "error")
      throw new Error("Conversion failed")

    await delay(3000)
  }
}

async function primaryMP3(url) {
  const payload = {
    url,
    os: "windows",
    output: { type: "audio", format: "mp3" },
    audio: { bitrate: "128k" }
  }

  const convert = await requestConvert(payload)
  const status = await waitUntilReady(convert.statusUrl)

  const downloadUrl =
    status.downloadUrl ||
    `https://${convert.domain}/stream/${status.id}?token=${status.token}&expires=${status.expires}`

  return {
    title: convert.title,
    downloadUrl,
    thumbnail: buildThumbnail(url)
  }
}

async function secondaryDownload(url) {
  const params = {
    copyright: "0",
    format: "mp3",
    audio_quality: "128",
    url,
    api: "dfcb6d76f2f6a9894gjkege8a4ab232222"
  }

  const { data: metadata } = await axios.get(
    "https://p.lbserver.xyz/ajax/download.php",
    { params }
  )

  if (!metadata?.progress_url)
    throw new Error("No progress_url")

  return await new Promise(resolve => {
    const poll = async () => {
      try {
        const res = await axios.get(metadata.progress_url)
        const json = res.data

        if (json?.progress >= 1000) {
          return resolve({
            title: metadata.title,
            downloadUrl: json.download_url,
            thumbnail: metadata.info?.image
          })
        }
      } catch {}

      setTimeout(poll, 500)
    }

    poll()
  })
}

const SaveNow = {
  _api: "https://p.savenow.to",
  _key: "dfcb6d76f2f6a9894gjkege8a4ab232222",
  _agent: new https.Agent({ rejectUnauthorized: false }),

  poll: async (url, limit = 40) => {
    for (let i = 0; i < limit; i++) {
      try {
        const { data } = await axios.get(url, {
          httpsAgent: SaveNow._agent
        })

        if (data.success === 1 && data.download_url)
          return data
      } catch {}

      await delay(2500)
    }

    return null
  }
}

async function tertiaryDownload(url) {
  const { data: init } = await axios.get(
    `${SaveNow._api}/ajax/download.php`,
    {
      params: {
        copyright: 0,
        format: "mp3",
        url,
        api: SaveNow._key
      },
      httpsAgent: SaveNow._agent
    }
  )

  const result = await SaveNow.poll(init.progress_url)

  if (!result?.download_url)
    throw new Error("SaveNow failed")

  return {
    title: init.info?.title || "YouTube Audio",
    downloadUrl: result.download_url,
    thumbnail: init.info?.image
  }
}

async function ytmp3(url) {
  try {
    return await primaryMP3(url)
  } catch {
    try {
      return await secondaryDownload(url)
    } catch {
      return await tertiaryDownload(url)
    }
  }
}

async function playCh2(alya, text, reply) {
  try {

    await reply(`🔎 Mencari lagu *${text}*...`)

    const search = await yts(text)
    const video = search.videos.find(v => v.seconds < 900)

    if (!video)
      return reply("❌ Lagu tidak ditemukan.")

    const data = await ytmp3(video.url)

    const audioResponse = await axios.get(data.downloadUrl, {
      responseType: "arraybuffer",
      timeout: 60000
    })

    const tempInput = path.join(os.tmpdir(), `in_${Date.now()}.mp3`)
    const tempOutput = path.join(os.tmpdir(), `out_${Date.now()}.ogg`)

    fs.writeFileSync(tempInput, audioResponse.data)

    await new Promise((resolve, reject) => {
      exec(
        `ffmpeg -y -i "${tempInput}" \
        -vn \
        -map_metadata -1 \
        -ac 1 \
        -ar 48000 \
        -c:a libopus \
        -b:a 96k \
        -vbr on \
        -application audio \
        -f ogg \
        "${tempOutput}"`,
        (err, stdout, stderr) => {
          if (err) return reject(err)
          resolve()
        }
      )
    })

    const opusBuffer = fs.readFileSync(tempOutput)

    // Mengirim audio tanpa externalAdReply
    await alya.sendMessage(global.channel, {
      audio: opusBuffer,
      mimetype: "audio/ogg; codecs=opus",
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.channel,
          serverMessageId: 100,
          newsletterName: global.channeln || global.botname
        }
      }
    })

    fs.unlinkSync(tempInput)
    fs.unlinkSync(tempOutput)

    await reply(`✅ Lagu *${data.title || video.title}* berhasil dikirim ke channel 🎶`)

  } catch (err) {

    console.error("PlayCh Error:", err.message)
    reply("❌ Terjadi kesalahan saat memproses lagu.")

  }
}

module.exports = playCh2
