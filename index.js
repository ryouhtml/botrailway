require('./settings')
const { modul } = require('./module');
const moment = require('moment-timezone');
const { chat: geminiChat } = require('./scrape/gemmy');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: makeWASocket,
	BufferJSON,
	processedMessages,
	PHONENUMBER_MCC,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    makeCacheableSignalKeyStore,
    getAggregateVotesInPollMessage,
    proto
} = require("lilys-baileys")
const crypto = require('crypto')
const cfonts = require('cfonts');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const { exec } = require('child_process');
const canvafy = require("canvafy")
const {
     loadModule
     } = require('./lib/functions');
const { 
  addSewaGroup, 
  checkSewaGroup, 
  getSewaPosition, 
  msToDate, 
  expiredCheck, 
  remindSewa, 
  getGcName 
} = require('./lib/sewa')
global.sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let autoCloseDB = JSON.parse(fs.readFileSync('./database/autoco.json'));
function saveAutoClose() {
    fs.writeFileSync('./database/autoco.json', JSON.stringify(autoCloseDB, null, 2))}
const { parsePhoneNumber } = require("libphonenumber-js")
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
const Pino = require("pino")
const { randomBytes } = require('crypto')
const readline = require("readline")
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = '.'
let phoneNumber = "6283166570663"
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
groups: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")

const useMobile = process.argv.includes("--mobile")
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = (makeInMemoryStore || (() => ({})))({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const question = (text) => {
    // Di Railway (non-TTY) tidak ada stdin interaktif, jangan panggil rl.question
    if (!process.stdin.isTTY) return Promise.resolve(phoneNumber)
    return new Promise((resolve) => rl.question(text, resolve))
}

// ===== LOG TEE =====
// Semua output (stdout + stderr) ditulis ke BOTH terminal dan bot.log secara
// real time, tanpa memakai pipe di shell. Pipe dari CMD/PSinker destroys stdin,
// sedangkan stdin dipakai readline untuk kode pairing -> line 84.
// process.stdout.write di-intercept (bukan console.*) supaya semua yang lewat
// termasuk output library, rl.question, dan pesan tanpa newline ikut tersimpan.
const LOG_FILE = './bot.log'
let _logStream = null
try {
    fs.mkdirSync(path.dirname(path.resolve(LOG_FILE)), { recursive: true })
    _logStream = fs.createWriteStream(path.resolve(LOG_FILE), { flags: 'a' })
    _logStream.on('error', () => { _logStream = null })
} catch (e) {
    console.error('Gagal membuka bot.log:', e.message)
}

if (_logStream) {
    const _outWrite = process.stdout.write.bind(process.stdout)
    const _errWrite = process.stderr.write.bind(process.stderr)
    process.stdout.write = (chunk, enc, cb) => {
        try { _logStream.write(chunk) } catch (e) {}
        return _outWrite(chunk, enc, cb)
    }
    process.stderr.write = (chunk, enc, cb) => {
        try { _logStream.write(chunk) } catch (e) {}
        return _errWrite(chunk, enc, cb)
    }
    // ANSI escape dihapus di file supaya log mudah dibaca (grep / dibuka di Notepad),
    // sementara terminal tetap dapat warna.
    // Catatan: chalk v5 memakai RGB (ESC[38;2;R;G;Bm) dan sequence bisa terpotong
    // di tengah antar-chunk write, jadi regex dibuat toleran terhadap sequence
    // yang belum lengkap (tanpa huruf m penutup) -> dibuang whole line.
    const _stripAnsi = s => String(s).replace(/\x1b\[[0-9;?]*[ -\/]*[@-~]/g, '')
    const _toText = chunk => {
        if (typeof chunk === 'string') return chunk
        if (Buffer.isBuffer(chunk)) return chunk.toString('utf8')
        return String(chunk)
    }
    const _rawWrite = _logStream.write.bind(_logStream)
    _logStream.write = chunk => {
        try { return _rawWrite(_stripAnsi(_toText(chunk))) } catch (e) { return true }
    }
    const _cleanup = () => { try { _logStream && _logStream.end() } catch (e) {} }
    process.on('exit', _cleanup)
    process.on('SIGINT', () => { _cleanup(); process.exit(130) })
    process.on('SIGTERM', _cleanup)
}

// libsignal v2 hardcode console.info/warn untuk dump session crypto (bug vendor).
// Kalau tidak difilter, satu pesan dari kontak mana pun bisa menghasilkan ratusan
// baris buffer & SessionEntry dan menutupi log yang berguna.
// Prefix "Closing session:" / "Opening session:" / "Session already closed" ->
// dibuang. Error asli dari libsignal tetap muncul lewat exception/normal log.
for (const _lvl of ['info', 'warn', 'log', 'debug']) {
    const _orig = console[_lvl].bind(console)
    console[_lvl] = (...args) => {
        if (typeof args[0] === 'string') {
            if (/^(Closing session:|Opening session:|Session already )/.test(args[0])) return
        }
        return _orig(...args)
    }
}

require('./Furina.js')
nocache('../Furina.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function DinzID() {
    await delay(5000)
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
	const msgRetryCounterCache = new NodeCache()
    	const Furina = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      browser: [ "Android", "Chrome", "114.0.5735.196" ],
      patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
      auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }).child({ level: "fatal" })),
      },
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
    shouldSyncHistoryMessage: (() => {
        // Hanya log saat progress benar-benar berubah, bukan tiap pesan.
        // msg.progress undefined di beberapa versi Baileys -> selalu 0%,
        // tanpa dedup ini console.log kena sekali per pesan = spam.
        let last = -1
        return msg => {
            const pct = Number(msg.progress) || 0
            if (pct !== last) {
                last = pct
                console.log(color(`Memuat Chat [${pct}%]`, 'green'))
            }
            return !!msg.syncType
        }
    })(),
      getMessage: async (key) => {
            return null;
        },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
    const { randomBytes } = require('crypto')
    const _sendMessage = Furina.sendMessage
    Furina.sendMessage = async (jid, content, options = {}) => {
        if (!options.messageId) {
             options.messageId = randomBytes(16).toString('hex').toUpperCase()
        }
        if (content.text) {
            options.userAgent = "WhatsApp/2.23.13.76 A" 
        }

        return await _sendMessage(jid, content, options)
    }
    // =================================================
if (!Furina.authState.creds.registered) {
    if (!process.stdin.isTTY) {
        console.log('Sesi WhatsApp belum terdaftar. Di Railway tidak ada input interaktif untuk pairing. Pastikan folder sessions sudah valid dan terpairing.')
    } else {
        const phoneNumber = await question('Masukin nomor yang mau dijadikan bot.. contoh: 6283166570663\n');
        const pairingFurina = "LILYBAIL";
        let code = await Furina.requestPairingCode(phoneNumber, pairingFurina);
        code = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log(`Ini kodenya:`, code);
    }
}
    store.bind(Furina.ev)

Furina.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Sesi rusak.. Mohon hapus folder Furinachan`);
				DinzID()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Koneksi terputus, menghubungkan ulang..");
				DinzID();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Koneksi terputus dari server, menghubungkan ulang..");
				DinzID();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Koneksi bertabrakan.. mohon matikan sesi yang sedang bejalan");
				DinzID()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Sesi terputus.. Mohon hapus folder Furinachan`);
				DinzID();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Membutuhkan restart, Merestart..");
				DinzID();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Waktu habis.. Menghubungkan ulang");
				DinzID();
			} else {
			  console.log(`Kesalahan tidak diketahui: ${reason}|${connection}`)
			  DinzID();
			}
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n👀Menghubungkan...`, 'yellow'))
		}
		if (connection === "open") {		
		    loadModule(Furina);		
            await delay(2000);
        }
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  DinzID();
	}
	
})

await delay(5555) 
start(`🌊`)

global.Furina = Furina
Furina.ev.on('creds.update', await saveCreds)

    // Anti Call
   Furina.ev.on('call', async (XeonPapa) => {
    let botNumber = await Furina.decodeJid(Furina.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(`[CALL] ${XeonPapa.length} panggilan masuk: ` + XeonPapa.map(c => `${c.from}${c.isVideo ? ' (video)' : ' (voice)'}`).join(', '))
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await Furina.sendTextWithMentions(XeonFucks.from, `*${Furina.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please contact the owner to be unblocked !`)
    Furina.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await Furina.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    })
    
Furina.ev.on('messages.upsert', async chatUpdate => {
try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await Furina.readMessages([kay.key]) }
if (!Furina.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('903D') && kay.key.id.length === 14) return
const m = smsg(Furina, kay, store)
require('./Furina')(Furina, m, chatUpdate, store)
} catch (err) {
console.log(err)}})
    async function getMessage(key){
        return null;
    }
    Furina.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && !key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                Furina.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
// === Interval Cek Sewa ===
setInterval(async () => {
    try {
        const now = Date.now()
        for (let x of sewa) {
            if (!x.id) continue
            if (x.expired === "PERMANENT") continue
            let timeLeft = x.expired - now
            if (timeLeft <= 0) {
                try {
                    await Furina.groupMetadata(x.id)
                    await Furina.sendMessage(x.id, { 
                        text: "⏳ *Masa Sewa Habis*\n\nWaktu sewa bot di grup ini telah berakhir. Bot akan keluar otomatis.\nTerima kasih telah menggunakan layanan kami! 🙏" 
                    })
                    await Furina.groupLeave(x.id)
                } catch (e) {}
            } else if (timeLeft > 3000000 && timeLeft <= 3600000) {
                 try {
                    await Furina.groupMetadata(x.id) 
                    await Furina.sendMessage(x.id, { 
                        text: "⚠️ *PERINGATAN MASA SEWA*\n\nMasa sewa bot di grup ini akan berakhir dalam waktu kurang dari *1 JAM*.\nSegera hubungi Owner jika ingin memperpanjang durasi." 
                    })
                } catch (e) {}
            }
        }
        await remindSewa(Furina, sewa)
    } catch (e) {}
}, 600000)
Furina.sendTextWithMentions = async (jid, text, quoted, options = {}) => Furina.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

Furina.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Furina.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Furina.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Furina.ev.on('groups.update', async (update) => {
    try {
        for (let x of update) {
            if (x.id) {
                // kalau approval dimatikan (join langsung)
                if (x.joinApprovalMode === false) {
                    let idx = sewa.findIndex(s => s.id === x.id && s.status === 'pending');
                    if (idx !== -1) {
                        sewa[idx].status = 'active';
                        fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2));
                        await Furina.sendMessage(x.id, { text: 
                            `✅ Sewa telah aktif!\n\n` +
                            `🏷️ Nama : *${await getGcName(x.id)}*\n` +
                            `🆔 ID   : *${x.id}*\n` +
                            `⏳ Durasi : *${msToDate(sewa[idx].expired - Date.now())}*`
                        });
                    }
                }
            }
        }
    } catch (e) {
        console.error("groups.update error:", e);
    }
});

Furina.getName = (jid, withoutContact  = false) => {
id = Furina.decodeJid(jid)
withoutContact = Furina.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Furina.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Furina.decodeJid(Furina.user.id) ?
Furina.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Furina.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Furina.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await Furina.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Furina.getName(i)}\nFN:${await Furina.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	Furina.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

Furina.setStatus = (status) => {
Furina.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Furina.public = true // Mengatur seperti self <false> atau publik <true>

Furina.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Furina.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Furina.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Furina.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Furina.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Furina.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Furina.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Furina.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Furina.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Furina.downloadMediaMessage = async (message) => {
    let msg = message.msg ? message.msg : message
    let mime = msg.mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    if (!msg.mediaKey) {
        console.log("Media Key tidak ditemukan, melewati proses download.")
        return Buffer.from([]) 
    }

    try {
        const stream = await downloadContentFromMessage(msg, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    } catch (e) {
        console.error("Error saat download media:", e.message)
        return Buffer.from([])
    }
}

Furina.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

Furina.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Furina.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Furina.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

Furina.sendText = (jid, text, quoted = '', options) => Furina.sendMessage(jid, { text: text, ...options }, { quoted })

Furina.serializeM = (m) => smsg(Furina, m, store)

Furina.before = (teks) => smsg(Furina, m, store)

Furina.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Furina.sendMessage(jid, buttonMessage, { quoted, ...options })
}

Furina.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: Furina.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return Furina.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

Furina.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
Furina.relayMessage(jid, template.message, { messageId: template.key.id })
}
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name]: name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query, ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name]: name]
    }: {})
})): '')

Furina.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
Furina.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
Furina.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await Furina.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await Furina.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await Furina.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}
Furina.ev.on('group-participants.update', async (anu) => {
const { welcome } = require ('./lib/welcome')
const iswel = _welcome.includes(anu.id)
const isLeft = _left.includes(anu.id)
welcome(iswel, isLeft, Furina, anu)
})
const antidelete = require('./lib/antidelete')
antidelete.registerListener(Furina)
Furina.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Furina.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Furina.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime === "image/webp"){
     return Furina.sendMessage(jid, { sticker: await getBuffer(url), ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Furina.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Furina.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Furina.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    Furina.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Furina.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return Furina

}
DinzID()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
