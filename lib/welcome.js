const fs = require('fs')
const { chat: geminiChat } = require('../scrape/gemmy') // Sesuaikan path jika perlu
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome')
const { isSetLeft, getTextSetLeft } = require('./setleft')
const { jidNormalizedUser } = require('lilys-baileys')

const loadJsonSafe = (path, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(path))
  } catch (e) {
    return fallback
  }
}

let setting = loadJsonSafe('./config.json', {})
fs.watchFile('./config.json', () => {
  setting = loadJsonSafe('./config.json', {})
})

// Helper untuk men-generate teks AI ala Furina Tsundere
const Furina = async (prompt) => {
  try {
    const systemPrompt = `Perankan Furina de Fontaine (Hydro Archon Fontaine, diva yang dramatis, anggun, percaya diri, ekspresif, sedikit manja, dan teatrikal). 
    ATURAN: Balas HANYA dengan array JSON: [{"type": "text", "content": "..."}] 
    Gunakan akal sehat, profesional, elegan, sebutkan nama user/grup jika perlu. 
    Jika ada statistik (member count), sebutkan. Jangan bertele-tele.
    \n\n[PROMPT]: ${prompt}`;
    
    let response = await geminiChat(systemPrompt, null, null);
    let cleanJson = response.reply.replace(/```json/gi, '').replace(/```/g, '').trim();
    let parsed = JSON.parse(cleanJson);
    return parsed[0].content;
  } catch (e) {
    return "Selamat datang."; 
  }
}

module.exports.welcome = async (iswel, isleft, Furina, anu) => {
  try {
    const metadata = await Furina.groupMetadata(anu.id)
    const participants = anu.participants
    const groupName = metadata.subject
    const memberCount = metadata.participants.length
    const groupDesc = metadata.desc || "-"

    // Load database setwelcome & setleft secara aman
    let set_welcome_db = loadJsonSafe('./database/set_welcome.json', [])
    let set_left_db = loadJsonSafe('./database/set_left.json', [])

    for (let num of participants) {
      const user = jidNormalizedUser(num)
      let pushName = `@${num.split('@')[0]}`
      
      let pp_user
      try {
        pp_user = await Furina.profilePictureUrl(user, 'image')
      } catch {
        pp_user = "https://i.ibb.co/30B3jSg/default-pp.jpg"
      }

      /* ================= WELCOME ================= */
      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {
        if (isSetWelcome(anu.id, set_welcome_db)) {
          const replaced = (await getTextSetWelcome(anu.id, set_welcome_db))
            .replace(/@user/gi, pushName)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc)
          await Furina.sendMessage(anu.id, { text: replaced, mentions: [num] })
        } else {
          const aiText = await Furina(`User ${pushName} bergabung ke ${groupName}. Total anggota sekarang: ${memberCount}. Sambut dengan elegan dan tsundere.`);
          
          await Furina.sendMessage(anu.id, {
            image: { url: pp_user },
            caption: aiText,
            mentions: [num]
          })
        }
      }

      /* ================= LEAVE ================= */
      else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {
        if (isSetLeft(anu.id, set_left_db)) {
          const replaced = (await getTextSetLeft(anu.id, set_left_db))
            .replace(/@user/gi, pushName)
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc)
          await Furina.sendMessage(anu.id, { text: replaced, mentions: [num] })
        } else {
          const aiText = await Furina(`User ${pushName} keluar dari ${groupName}. Sisa anggota: ${memberCount}. Ucapkan selamat tinggal dengan gaya tsundere yang tidak peduli tapi profesional.`);
          
          await Furina.sendMessage(anu.id, {
            image: { url: pp_user },
            caption: aiText,
            mentions: [num]
          })
        }
      }

      /* ================= PROMOTE / DEMOTE ================= */
      else if (anu.action === 'promote' || anu.action === 'demote') {
        const action = anu.action === 'promote' ? 'dijadikan ADMIN' : 'diturunkan jadi MEMBER';
        const aiText = await Furina(`User ${pushName} baru saja ${action} di grup ${groupName}. Berikan pengumuman formal yang elegan.`);
        
        await Furina.sendMessage(anu.id, { 
          text: aiText, 
          mentions: [num] 
        })
      }
    }
  } catch (err) {
    console.error("Error welcome:", err)
  }
}