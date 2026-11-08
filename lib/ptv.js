const fs = require('fs');
const path = require('path');
const { generateWAMessageFromContent } = require('lilys-baileys');

module.exports = async function ptvHandler(m, alya, prefix, command, Ryuu, mess, replytolak) {
    try {
        if (!Ryuu) return replytolak(mess.only.owner);
        let q = m.quoted || m;
        let msg = q.msg || q;
        let mime = (q.msg || q).mimetype || '';

        if (!/video|viewOnce/i.test(mime)) {
            return m.reply(`*• Contoh:* Reply video dengan caption *${prefix + command}*`);
        }
        m.reply("⏳ Sedang memproses media, mohon tunggu...");
        let buffer = await q.download?.();
        if (!buffer) return m.reply("❌ Gagal mengunduh media.");
        const tmpDir = path.join(__dirname, '../tmp');
        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

        const fileName = `ptv_${Date.now()}.mp4`;
        const tempPath = path.join(tmpDir, fileName);
        fs.writeFileSync(tempPath, buffer);
        let getGroups = await alya.groupFetchAllParticipating();
        let groups = Object.values(getGroups);

        if (groups.length === 0) {
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            return m.reply("❌ Bot belum masuk ke grup manapun.");
        }
        let validGroups = [];
        
        validGroups.push({
            title: "📢 KIRIM KE SEMUA GRUP",
            description: `Kirim PTV ke ${groups.length} grup secara otomatis`,
            id: `${prefix}ptvsendall ${encodeURIComponent(tempPath)}`
        });

        for (let group of groups) {
            validGroups.push({
                title: group.subject,
                description: `ID: ${group.id}`,
                id: `${prefix}ptvsend ${group.id} ${encodeURIComponent(tempPath)}`
            });
        }
        let msgInter = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: { text: "🎥 *PTV - Video Note Mode*\n\nSilakan pilih grup tujuan pengiriman video bulat (PTV) di bawah ini." },
                        footer: { text: "Alya Bot - Media Transmit" },
                        nativeFlowMessage: {
                            buttons: [{
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "PILIH TUJUAN",
                                    sections: [{
                                        title: "Opsi Pengiriman",
                                        rows: validGroups
                                    }]
                                })
                            }]
                        }
                    }
                }
            }
        }, { quoted: m });

        await alya.relayMessage(m.chat, msgInter.message, { messageId: msgInter.key.id });

    } catch (e) {
        console.error("Error in ptvHandler:", e);
        m.reply("❌ Terjadi kesalahan sistem saat memproses PTV.");
    }
};