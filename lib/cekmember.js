// lib/cekmember.js
const cekMember = async (m, { alya }) => {
    try {
        const metadata = await alya.groupMetadata(m.chat);
        const participants = metadata.participants || [];

        let countIndonesia = 0;
        let countMalaysia = 0;
        let countUSA = 0;
        let countOther = 0;

        participants.forEach(participant => {
            let phoneNumber = participant.id.split('@')[0];
            
            // Hapus semua karakter non-digit
            phoneNumber = phoneNumber.replace(/\D/g, '');

            // Pastikan nomor valid sebelum cek prefix
            if (!phoneNumber) return;

            if (phoneNumber.startsWith("+62")) {
                countIndonesia++;
            } else if (phoneNumber.startsWith("+60")) {
                countMalaysia++;
            } else if (phoneNumber.startsWith("+1")) {
                countUSA++;
            } else {
                countOther++;
            }
        });

        await alya.relayMessage(m.chat, {
            "pollResultSnapshotMessage": {
                "name": "Jumlah Anggota Grup Berdasarkan Negara:",
                "pollVotes": [
                    { "optionName": "Anggota Indonesia 🇮🇩", "optionVoteCount": countIndonesia },
                    { "optionName": "Anggota Malaysia 🇲🇾", "optionVoteCount": countMalaysia },
                    { "optionName": "Anggota USA 🇺🇸", "optionVoteCount": countUSA },
                    { "optionName": "Anggota Negara lain 🏳️", "optionVoteCount": countOther }
                ]
            }
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        alya.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengecek anggota grup.' }, { quoted: m });
    }
}

module.exports = cekMember;
