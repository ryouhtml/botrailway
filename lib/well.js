const fs = require('fs');
const canvafy = require("canvafy")
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
const moment = require('moment-timezone');
const { proto, jidDecode, jidNormalizedUser, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage } = require('lilys-baileys');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg;
const leave2 = setting.auto_leaveMsg;
module.exports.welcome = async (iswel, isleft, alyanu) => {
  try {
    const metadata = await hydalyaMetadata(anu.id);
    const participants = anu.participants;
    const groupName = metadata.subject;
    const groupDesc = metadata.desc;
    for (let num of participants) {
      try {
        pp_user = await alya.alyaictureUrl(num, 'image');
      } catch {
        pp_user = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
      }
      try {
        ppgroup = await alya.proalyaureUrl(anu.id, 'image');
      } catch {
        ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
      }
      if (anu.action === 'add' && (iswel || setting.auto_welcomeMsg)) {
        if (isSetWelcome(anu.id, set_welcome_db)) {
          const get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db);
          const replace_pesan = get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`);
          const full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          alya.sendMessage, { text: `${full_pesan}` };
        } else {
          alya.sendMessage, { text: `ʜᴀɪ ᴋᴀᴋ 👋@${num.split('@')[0]} sᴇʟᴀᴍᴀᴛ ʙᴇʀɢᴀʙᴜɴɢ ᴅɪ ${groupName}! 😝\n- ᴊɪᴋᴀ ɪɴɢɪɴ ɪɴᴛʀᴏ ᴋᴇᴛɪᴋ .ɪɴᴛʀᴏ\n- ᴘᴀᴛᴜʜɪ ᴀᴛᴜʀᴀɴ ɢʀᴜᴘ ᴊɪᴋᴀ ᴀᴅᴀ\n- ʙᴇʀsɪᴋᴀᴘ ʙᴀɪᴋ ᴅᴇɴɢᴀɴ sɪᴀᴘᴀᴘᴜɴ\n- ᴋᴀᴍᴜ sᴜᴅᴀʜ ʙᴇsᴀʀ ʙᴜᴋᴀɴ ᴀɴᴀᴋ ᴋᴇᴄɪʟ\nᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴅᴀʀɪ ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ 🙏` };
        }
      }
      else if (anu.action === 'remove' && (isleft || setting.auto_leaveMsg)) {
        if (isSetLeft(anu.id, set_left_db)) {
          const get_teks_left = await getTextSetLeft(anu.id, set_left_db);
          const replace_pesan = get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`);
          const full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          alya.sendMessage(alya{ image: { url: pp_user }, mentions: [num], caption: `${full_pesan}` });
        } else {
          alya.sendMessage(anualyaext: `ʙᴀɪʙᴀɪ ᴋᴀᴋ @${num.split('@')[0]} sᴇᴍᴏɢᴀ ᴛᴇɴᴀɴɢ ᴅɪ ᴀʟᴀᴍ sᴀɴᴀ`, });
        }
      }
      else if (anu.action === 'promote') {
        alya.sendMessage(anu.idalya      text: `ʜᴇʏ ᴋᴀᴍᴜ! @${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ɴᴀɪᴋ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ 🤪`,
        });
      }
      else if (anu.action === 'demote') {
        alya.sendMessage(anu.id, {alya   text: `ʜᴇʏ ᴋᴀᴍᴜ! @${num.split('@')[0]}\nᴘᴀɴɢᴋᴀᴛ ᴋᴀᴍᴜ ᴅɪ ɢʀᴜᴘ ${groupName} ᴛᴜʀᴜɴ ᴍᴇɴᴊᴀᴅɪ ᴀɴɢɢᴏᴛᴀ 👀`,
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
};
