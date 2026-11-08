const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
◤───「 \`INFO USER\` 」──✦
> ⎆  [ Nama : ${pushname}
> ⎆  [ Role : ${DinzTheCreator ? 'Boss🥇' : isPrem ? 'Investor💵' : 'Gratisan😩'}
> ⎆  [ Mode : ${Furina.public ? 'Public' : 'Private'}
> ⎆  [ Author : ${global.ownername}
◣──────────❈

◤───「 \`INFO BOT\` 」──✦
> ⎆ Runtime : ${runtime(process.uptime())}
> ⎆ Versi : ${global.version}
> ⎆ Respon : ${latensi.toFixed(4)}
◣─────────────✦

*_Jangan Di Spam Ya Agar Botnya Bisa Aktif 24 Jam Dan Tidak Terkena Blokir Spam🍁_*


┏『 *\`乂 ᴏ ᴡ ɴ ᴇ ʀ - ᴏ ɴ ʟ ʏ 乂\`* 』━⊱
│⦿ 〔 *${prefix}autoread*
│⦿ 〔 *${prefix}addsewa*
│⦿ 〔 *${prefix}delsewa*
│⦿ 〔 *${prefix}onlypc*
│⦿ 〔 *${prefix}onlygc*
│⦿ 〔 *${prefix}self*
│⦿ 〔 *${prefix}clearchat*
│⦿ 〔 *${prefix}pinchat*
│⦿ 〔 *${prefix}unpinchat*
│⦿ 〔 *${prefix}gconly* 
│⦿ 〔 *${prefix}public* 
│⦿ 〔 *${prefix}setpppanjang* 
│⦿ 〔 *${prefix}setppgcpanjang* 
│⦿ 〔 *${prefix}addcase*
│⦿ 〔 *${prefix}join* 
│⦿ 〔 *${prefix}bctext* 
│⦿ 〔 *${prefix}poll* 
│⦿ 〔 *${prefix}bcimage*
│⦿ 〔 *${prefix}bcvideo*
│⦿ 〔 *${prefix}creategc*
│⦿ 〔 *${prefix}setexif*
│⦿ 〔 *${prefix}userjid*
│⦿ 〔 *${prefix}setbotname*
│⦿ 〔 *${prefix}setbotbio*
│⦿ 〔 *${prefix}delppbot*
│⦿ 〔 *${prefix}restart*
│⦿ 〔 *${prefix}setppbot*
│⦿ 〔 *${prefix}addprem*
│⦿ 〔 *${prefix}delprem*
│⦿ 〔 *${prefix}addowner*
│⦿ 〔 *${prefix}delowner*
│⦿ 〔 *${prefix}addvn*
│⦿ 〔 *${prefix}delvn*
│⦿ 〔 *${prefix}addsticker*
│⦿ 〔 *${prefix}delsticker*
│⦿ 〔 *${prefix}addimage*
│⦿ 〔 *${prefix}delimage*
│⦿ 〔 *${prefix}addvideo*
│⦿ 〔 *${prefix}delvideo*
│⦿ 〔 *${prefix}block*
│⦿ 〔 *${prefix}unblock del*
│⦿ 〔 *${prefix}leavegc*
◣──────────❈

┏『 *\`乂 ɪ s ʟ ᴀ ᴍ ɪ - ᴍᴇɴᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}kisahnabi*
│⦿ 〔 *${prefix}asmaulhusna*
│⦿ 〔 *${prefix}bacaansholat*
│⦿ 〔 *${prefix}audiosurah*
│⦿ 〔 *${prefix}ayatkursi*
│⦿ 〔 *${prefix}doaharian*
│⦿ 〔 *${prefix}niatsholat*
│⦿ 〔 *${prefix}quotesislami*
│⦿ 〔 *${prefix}doatahlil*
│⦿ 〔 *${prefix}alquran*
│⦿ 〔 *${prefix}jadwalsholat*
◣──────────❈
 *\`乂 New Feature 乂\`* 』─✦
│⦿ 〔 *${prefix}anime*
│⦿ 〔 *${prefix}antidelete*
│⦿ 〔 *${prefix}loker*
│⦿ 〔 *${prefix}playch*
│⦿ 〔 *${prefix}tochibi*
│⦿ 〔 *${prefix}tomaid*
│⦿ 〔 *${prefix}fakethread*
│⦿ 〔 *${prefix}antinsfw*
│⦿ 〔 *${prefix}tofigure*
│⦿ 〔 *${prefix}tofigure2*
│⦿ 〔 *${prefix}tohitam*
│⦿ 〔 *${prefix}tobotak*
│⦿ 〔 *${prefix}tohijab*
│⦿ 〔 *${prefix}ytstalk*
┣➤	*${prefix}CekNik*
┣➤	*${prefix}FakeStory*
┣➤	*${prefix}Animebrat*
┣➤	*${prefix}AIO (all in one)*
│⦿ 〔 *${prefix}Upsw*
│⦿ 〔 *${prefix}QR*
│⦿ 〔 *${prefix}nulis*
│⦿ 〔 *${prefix}Addautogc*
│⦿ 〔 *${prefix}delautogc*
│⦿ 〔 *${prefix}listautogc*
│⦿ 〔 *${prefix}validate*
│⦿ 〔 *${prefix}toplevel*
│⦿ 〔 *${prefix}Rank*
│⦿ 〔 *${prefix}cheat*
│⦿ 〔 *${prefix}daftar*
│⦿ 〔 *${prefix}verify*
│⦿ 〔 *${prefix}cekregist*
│⦿ 〔 *${prefix}cekkode*
│⦿ 〔 *${prefix}buypremium*
│⦿ 〔 *${prefix}tagadmin*
│⦿ 〔 *${prefix}botak*
│⦿ 〔 *${prefix}hd2*
│⦿ 〔 *${prefix}listonline*
│⦿ 〔 *${prefix}fitnah*
│⦿ 〔 *${prefix}hijabkan*
│⦿ 〔 *${prefix}edit (untuk edit foto)*
│⦿ 〔 *${prefix}ubahgender*
│⦿ 〔 *${prefix}nglspam*
│⦿ 〔 *${prefix}paustad*
│⦿ 〔 *${prefix}upgc*
│⦿ 〔 *${prefix}reactch*
◣──────────❈

┏『 *\`乂 ɢ ʀ ᴏ ᴜ ᴘ - ᴍᴇɴᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}sider*
│⦿ 〔 *${prefix}antidelete*
│⦿ 〔 *${prefix}autoaigc*
│⦿ 〔 *${prefix}warcall*
│⦿ 〔 *${prefix}autosimi*
│⦿ 〔 *${prefix}alyachat*
│⦿ 〔 *${prefix}mute*
│⦿ 〔 *${prefix}setwelcome*
│⦿ 〔 *${prefix}setleft*
│⦿ 〔 *${prefix}welcome on/off*
│⦿ 〔 *${prefix}antilink*
│⦿ 〔 *${prefix}antiwame*
│⦿ 〔 *${prefix}linkgc*
│⦿ 〔 *${prefix}tagadmin*
│⦿ 〔 *${prefix}invite*
│⦿ 〔 *${prefix}ephemeral*
│⦿ 〔 *${prefix}delete*
│⦿ 〔 *${prefix}setppgroup*
│⦿ 〔 *${prefix}delppgroup*
│⦿ 〔 *${prefix}setname*
│⦿ 〔 *${prefix}setdesc*
│⦿ 〔 *${prefix}add*
│⦿ 〔 *${prefix}kick*
│⦿ 〔 *${prefix}promote*
│⦿ 〔 *${prefix}demote*
│⦿ 〔 *${prefix}hidetag*
│⦿ 〔 *${prefix}totag*
│⦿ 〔 *${prefix}tagall*
│⦿ 〔 *${prefix}editinfo*
│⦿ 〔 *${prefix}opentime*
│⦿ 〔 *${prefix}closetime*
│⦿ 〔 *${prefix}resetlink*
│⦿ 〔 *${prefix}getbio*
│⦿ 〔 *${prefix}vote*
│⦿ 〔 *${prefix}upvote*
│⦿ 〔 *${prefix}downvote*
│⦿ 〔 *${prefix}checkvote*
│⦿ 〔 *${prefix}delvote*
│⦿ 〔 *${prefix}autostickergc*
│⦿ 〔 *${prefix}antilinkgc*
│⦿ 〔 *${prefix}antilinkch*
│⦿ 〔 *${prefix}antiwame*
│⦿ 〔 *${prefix}antilinkall*
│⦿ 〔 *${prefix}antilinktiktok*
│⦿ 〔 *${prefix}antilinkfb*
│⦿ 〔 *${prefix}antilinktwitter*
│⦿ 〔 *${prefix}antilinkig*
│⦿ 〔 *${prefix}antilinktg*
│⦿ 〔 *${prefix}antilinkytvid*
│⦿ 〔 *${prefix}antilinkytch*
│⦿ 〔 *${prefix}antivirus*
│⦿ 〔 *${prefix}antitoxic*
│⦿ 〔 *${prefix}react*
◣──────────❈


┏『 *\`乂 ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍᴇɴᴜ 乂\`* 』─✦
│⦿ ${prefix}an1
│⦿ ${prefix}tiktok
│⦿ ${prefix}tiktokslide
│⦿ ${prefix}tiktokaudio
│⦿ ${prefix}spdl
│⦿ ${prefix}ytsearch
│⦿ ${prefix}ttsearch
│⦿ ${prefix}teraboxdl
│⦿ ${prefix}snackvideo
│⦿ ${prefix}capcutdl
│⦿ ${prefix}play
│⦿ ${prefix}ytmp3
│⦿ ${prefix}ytmp4
│⦿ ${prefix}google
│⦿ ${prefix}imdb
│⦿ ${prefix}weather
│⦿ ${prefix}wanumber
│⦿ ${prefix}instagram
│⦿ ${prefix}facebook
│⦿ ${prefix}twittervid
│⦿ ${prefix}telestick
│⦿ ${prefix}spotify
│⦿ ${prefix}gitclone
│⦿ ${prefix}happymod
│⦿ ${prefix}gdrive
│⦿ ${prefix}pinterest
│⦿ ${prefix}ringtone
◣──────────❈

┏『 *\`乂 ɢ ᴀ ᴍ ᴇ - ᴍᴇɴᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}tebakanml*
│⦿ 〔 *${prefix}tebakgame*
│⦿ 〔 *${prefix}tebaklogo*
│⦿ 〔 *${prefix}tebaksurah*
│⦿ 〔 *${prefix}blackjack*
│⦿ 〔 *${prefix}tebakkata*
│⦿ 〔 *${prefix}tebaktebakan*
│⦿ 〔 *${prefix}tebaklirik*
│⦿ 〔 *${prefix}tebakgambar*
│⦿ 〔 *${prefix}tebaklagu*
│⦿ 〔 *${prefix}tebakkimia*
│⦿ 〔 *${prefix}asahotak*
│⦿ 〔 *${prefix}siapaaku*
│⦿ 〔 *${prefix}susunkata*
│⦿ 〔 *${prefix}tekateki*
│⦿ 〔 *${prefix}tebakbendera*
│⦿ 〔 *${prefix}tebakbenderav2*
│⦿ 〔 *${prefix}tebakkabupaten*
│⦿ 〔 *${prefix}caklontong*
│⦿ 〔 *${prefix}family100*
│⦿ 〔 *${prefix}werewolf*
◣──────────❈

┏『 *\`乂 ʀ ᴘ ɢ - ᴍ ᴇ ɴ ᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}kerja*
│⦿ 〔 *${prefix}fightnaga*
│⦿ 〔 *${prefix}fightkucing*
│⦿ 〔 *${prefix}fightphonix*
│⦿ 〔 *${prefix}fightgriffin*
│⦿ 〔 *${prefix}fightkyubi*
│⦿ 〔 *${prefix}fightcentaur*
│⦿ 〔 *${prefix}nabung*
│⦿ 〔 *${prefix}mining*
│⦿ 〔 *${prefix}bankcek*
│⦿ 〔 *${prefix}maling*
│⦿ 〔 *${prefix}banknabung*
│⦿ 〔 *${prefix}banktarik*
│⦿ 〔 *${prefix}berkebon*
│⦿ 〔 *${prefix}crafting*
│⦿ 〔 *${prefix}bet*
│⦿ 〔 *${prefix}bonus*
│⦿ 〔 *${prefix}buah*
│⦿ 〔 *${prefix}nebang*
│⦿ 〔 *${prefix}bekerja*
│⦿ 〔 *${prefix}bansos*
│⦿ 〔 *${prefix}taxy*
│⦿ 〔 *${prefix}mulung*
│⦿ 〔 *${prefix}berburu*
│⦿ 〔 *${prefix}polisi*
│⦿ 〔 *${prefix}berdagang*
│⦿ 〔 *${prefix}rampok*
│⦿ 〔 *${prefix}bunuh*
│⦿ 〔 *${prefix}collect*
│⦿ 〔 *${prefix}mancing*
│⦿ 〔 *${prefix}repair*
│⦿ 〔 *${prefix}feed*
│⦿ 〔 *${prefix}fight*
│⦿ 〔 *${prefix}gajian*
│⦿ 〔 *${prefix}upgrade*
│⦿ 〔 *${prefix}transfer*
│⦿ 〔 *${prefix}shop*
│⦿ 〔 *${prefix}selectskill*
│⦿ 〔 *${prefix}sampah*
│⦿ 〔 *${prefix}roket*
│⦿ 〔 *${prefix}ojek*
│⦿ 〔 *${prefix}nguli*
│⦿ 〔 *${prefix}pasar*
│⦿ 〔 *${prefix}rob*
│⦿ 〔 *${prefix}referal*
│⦿ 〔 *${prefix}petshop*
│⦿ 〔 *${prefix}kolam*
│⦿ 〔 *${prefix}koboy*
│⦿ 〔 *${prefix}leaderboard*
│⦿ 〔 *${prefix}casino*
│⦿ 〔 *${prefix}ewe-paksa*
│⦿ 〔 *${prefix}duel*
│⦿ 〔 *${prefix}petualang*
│⦿ 〔 *${prefix}perangsarung*
│⦿ 〔 *${prefix}ulartangga*
│⦿ 〔 *${prefix}slot*
◣──────────❈

┏『 *\`乂 ᴏ̨ᴜᴏᴛᴇs-ᴍᴇɴᴜ 乂\`*  』─✦
│⦿ 〔 *${prefix}quotesanime* 
│⦿ 〔 *${prefix}quotesbacot* 
│⦿ 〔 *${prefix}quotesbucin* 
│⦿ 〔 *${prefix}quotesmotivasi* 
│⦿ 〔 *${prefix}quotesgalau* 
│⦿ 〔 *${prefix}quotesgombal* 
│⦿ 〔 *${prefix}quoteshacker* 
│⦿ 〔 *${prefix}quotesbijak* 
◣──────────❈

┏『 *\`乂 s ᴛ ᴀ ʟ ᴋ ᴇ ʀ 乂\`* 』─✦
│⦿ 〔 *${prefix}igstalk*
│⦿ 〔 *${prefix}ttstalk*
│⦿ 〔 *${prefix}ffstalk*
│⦿ 〔 *${prefix}mlstalk*
│⦿ 〔 *${prefix}npmstalk*
│⦿ 〔 *${prefix}ghstalk*
│⦿ 〔 *${prefix}ytstalk*
◣──────────❈

┏『 *\`乂 ᴏ ᴘ ᴇ ɴ - ᴀɪ 乂\`* 』─✦
│⦿ 〔 *${prefix}leptonai*
│⦿ 〔 *${prefix}text2anime*
│⦿ 〔 *${prefix}faceswap*
│⦿ 〔 *${prefix}openai*
│⦿ 〔 *${prefix}aiimg*
│⦿ 〔 *${prefix}ai4chat*  
│⦿ 〔 *${prefix}aimath*  
│⦿ 〔 *${prefix}aoyoai*  
│⦿ 〔 *${prefix}simi*  
│⦿ 〔 *${prefix}powerbrain*  
│⦿ 〔 *${prefix}alyamind*  
│⦿ 〔 *${prefix}hitori-gotoh*  
│⦿ 〔 *${prefix}hiura-mihate*  
│⦿ 〔 *${prefix}hoshino-takanashi*
│⦿ 〔 *${prefix}ai*
│⦿ 〔 *${prefix}bard*
│⦿ 〔 *${prefix}prodia*
│⦿ 〔 *${prefix}diffusion-anime*
│⦿ 〔 *${prefix}travel-assistant*
│⦿ 〔 *${prefix}ocr*
│⦿ 〔 *${prefix}guru-ai*
│⦿ 〔 *${prefix}emi-ai*
│⦿ 〔 *${prefix}claude-ai*
│⦿ 〔 *${prefix}costume-ai*
│⦿ 〔 *${prefix}herc-ai*
│⦿ 〔 *${prefix}hercai-cartoon*
│⦿ 〔 *${prefix}hercai-animefy*
│⦿ 〔 *${prefix}hercai-lexica*
│⦿ 〔 *${prefix}hercai-prodia*
│⦿ 〔 *${prefix}hercai-simurg*
│⦿ 〔 *${prefix}hercai-raava*
│⦿ 〔 *${prefix}hercai-shonin*
│⦿ 〔 *${prefix}realistic*
│⦿ 〔 *${prefix}3dmodel*
│⦿ 〔 *${prefix}jadizombie*
│⦿ 〔 *${prefix}blackboxai*
│⦿ 〔 *${prefix}photoleapai*
│⦿ 〔 *${prefix}diffusion*
│⦿ 〔 *${prefix}indo-ai*
│⦿ 〔 *${prefix}lamaai*
│⦿ 〔 *${prefix}aivo*
│⦿ 〔 *${prefix}gemini*
│⦿ 〔 *${prefix}text2img*
│⦿ 〔 *${prefix}absolutely*
│⦿ 〔 *${prefix}dalle*
│⦿ 〔 *${prefix}bingimg*
│⦿ 〔 *${prefix}bingai*
│⦿ 〔 *${prefix}gptimg*
│⦿ 〔 *${prefix}gpt4*
│⦿ 〔 *${prefix}gpt4_2*
│⦿ 〔 *${prefix}anything*
│⦿ 〔 *${prefix}hdvid*
│⦿ 〔 *${prefix}cai*
│⦿ 〔 *${prefix}youai*
│⦿ 〔 *${prefix}remini*
│⦿ 〔 *${prefix}jadianime*
│⦿ 〔 *${prefix}removebg*
│⦿ 〔 *${prefix}nulis*
◣──────────❈

┏『 *\`乂 ғ ᴜ ɴ - ᴍ ᴇ ɴ ᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}smeme*
│⦿ 〔 *${prefix}ppcouple*
│⦿ 〔 *${prefix}define*
│⦿ 〔 *${prefix}qc*
│⦿ 〔 *${prefix}lyrics*
│⦿ 〔 *${prefix}suit*
│⦿ 〔 *${prefix}math*
│⦿ 〔 *${prefix}tictactoe*
│⦿ 〔 *${prefix}fact*
│⦿ 〔 *${prefix}truth*
│⦿ 〔 *${prefix}dare*
│⦿ 〔 *${prefix}couple*
│⦿ 〔 *${prefix}soulmate*
│⦿ 〔 *${prefix}stupidcheck*
│⦿ 〔 *${prefix}handsomecheck*
│⦿ 〔 *${prefix}uncleancheck*
│⦿ 〔 *${prefix}hotcheck*
│⦿ 〔 *${prefix}smartcheck*
│⦿ 〔 *${prefix}greatcheck*
│⦿ 〔 *${prefix}evilcheck*
│⦿ 〔 *${prefix}dogcheck*
│⦿ 〔 *${prefix}coolcheck*
│⦿ 〔 *${prefix}waifucheck*
│⦿ 〔 *${prefix}awesomecheck*
│⦿ 〔 *${prefix}gaycheck*
│⦿ 〔 *${prefix}cutecheck*
│⦿ 〔 *${prefix}lesbiancheck*
│⦿ 〔 *${prefix}hornycheck*
│⦿ 〔 *${prefix}prettycheck*
│⦿ 〔 *${prefix}lovelycheck*
│⦿ 〔 *${prefix}uglycheck*
│⦿ 〔 *${prefix}pick*
│⦿ 〔 *${prefix}quotes*
│⦿ 〔 *${prefix}can*
│⦿ 〔 *${prefix}is*
│⦿ 〔 *${prefix}when*
│⦿ 〔 *${prefix}where*
│⦿ 〔 *${prefix}what*
│⦿ 〔 *${prefix}how*
│⦿ 〔 *${prefix}rate*
│⦿ 〔 *${prefix}cry*
│⦿ 〔 *${prefix}kill*
│⦿ 〔 *${prefix}hug*
│⦿ 〔 *${prefix}pat*
│⦿ 〔 *${prefix}lick*
│⦿ 〔 *${prefix}kiss*
│⦿ 〔 *${prefix}bite*
│⦿ 〔 *${prefix}yeet*
│⦿ 〔 *${prefix}bully*
│⦿ 〔 *${prefix}bonk*
│⦿ 〔 *${prefix}wink*
│⦿ 〔 *${prefix}poke*
│⦿ 〔 *${prefix}nom*
│⦿ 〔 *${prefix}slap*
│⦿ 〔 *${prefix}smile*
│⦿ 〔 *${prefix}wave*
│⦿ 〔 *${prefix}awoo*
│⦿ 〔 *${prefix}blush*
│⦿ 〔 *${prefix}smug*
│⦿ 〔 *${prefix}glomp*
│⦿ 〔 *${prefix}happy*
│⦿ 〔 *${prefix}dance*
│⦿ 〔 *${prefix}cringe*
│⦿ 〔 *${prefix}cuddle*
│⦿ 〔 *${prefix}highfive*
│⦿ 〔 *${prefix}shinobu*
│⦿ 〔 *${prefix}handhold*
│⦿ 〔 *${prefix}spank*
│⦿ 〔 *${prefix}tickle*
│⦿ 〔 *${prefix}avatar*
│⦿ 〔 *${prefix}feed*
│⦿ 〔 *${prefix}foxgirl*
│⦿ 〔 *${prefix}gecg*
│⦿ 〔 *${prefix}checkme*
◣──────────❈

┏『 *\`乂 ʀ ᴀ ɴ ᴅ ᴏ ᴍ - ᴘ ʜ ᴏ ᴛ ᴏ 乂\`* 』─✦
│⦿ 〔 *${prefix}aesthetic*
│⦿ 〔 *${prefix}coffee*
│⦿ 〔 *${prefix}wikimedia*
│⦿ 〔 *${prefix}wallpaper*
│⦿ 〔 *${prefix}art*
│⦿ 〔 *${prefix}bts*
│⦿ 〔 *${prefix}dogwoof*
│⦿ 〔 *${prefix}catmeow*
│⦿ 〔 *${prefix}lizardpic*
│⦿ 〔 *${prefix}goosebird*
│⦿ 〔 *${prefix}8ballpool*
│⦿ 〔 *${prefix}cosplay*
│⦿ 〔 *${prefix}hacker*
│⦿ 〔 *${prefix}cyber*
│⦿ 〔 *${prefix}gamewallpaper*
│⦿ 〔 *${prefix}islamic*
│⦿ 〔 *${prefix}jennie*
│⦿ 〔 *${prefix}jiso*
│⦿ 〔 *${prefix}satanic*
│⦿ 〔 *${prefix}justina*
│⦿ 〔 *${prefix}cartoon*
│⦿ 〔 *${prefix}pentol*
│⦿ 〔 *${prefix}cat*
│⦿ 〔 *${prefix}kpop*
│⦿ 〔 *${prefix}exo*
│⦿ 〔 *${prefix}lisa*
│⦿ 〔 *${prefix}space*
│⦿ 〔 *${prefix}car*
│⦿ 〔 *${prefix}technology*
│⦿ 〔 *${prefix}bike*
│⦿ 〔 *${prefix}shortquote*
│⦿ 〔 *${prefix}antiwork*
│⦿ 〔 *${prefix}hacking*
│⦿ 〔 *${prefix}boneka*
│⦿ 〔 *${prefix}rose*
│⦿ 〔 *${prefix}ryujin*
│⦿ 〔 *${prefix}ulzzangboy*
│⦿ 〔 *${prefix}ulzzanggirl*
│⦿ 〔 *${prefix}wallml*
│⦿ 〔 *${prefix}wallphone*
│⦿ 〔 *${prefix}mountain*
│⦿ 〔 *${prefix}goose*
│⦿ 〔 *${prefix}profilepic*
│⦿ 〔 *${prefix}couplepic*
│⦿ 〔 *${prefix}programming*
│⦿ 〔 *${prefix}pubg*
│⦿ 〔 *${prefix}blackpink*
│⦿ 〔 *${prefix}randomboy*
│⦿ 〔 *${prefix}randomgirl*
◣──────────❈

┏『 *\`乂 s ᴛ ɪ ᴄ ᴋ ᴇ ʀ 乂\`* 』─✦
│⦿ 〔 *${prefix}goose*
│⦿ 〔 *${prefix}woof*
│⦿ 〔 *${prefix}8ball*
│⦿ 〔 *${prefix}lizard*
│⦿ 〔 *${prefix}meow*
│⦿ 〔 *${prefix}gura*
│⦿ 〔 *${prefix}doge*
│⦿ 〔 *${prefix}patrick*
│⦿ 〔 *${prefix}lovestick*
◣──────────❈

┏『 *\`乂 ᴀ ɴ ɪ ᴍ ᴇ 乂\`* 』─✦
│⦿ 〔 *${prefix}otakudesu*
│⦿ 〔 *${prefix}kaorinusantara*
│⦿ 〔 *${prefix}akira*
│⦿ 〔 *${prefix}akiyama*
│⦿ 〔 *${prefix}ana*
│⦿ 〔 *${prefix}asuna*
│⦿ 〔 *${prefix}ayuzawa*
│⦿ 〔 *${prefix}boruto*
│⦿ 〔 *${prefix}chiho*
│⦿ 〔 *${prefix}chitoge*
│⦿ 〔 *${prefix}cosplayloli*
│⦿ 〔 *${prefix}cosplaysagiri*
│⦿ 〔 *${prefix}deidara*
│⦿ 〔 *${prefix}doraemon*
│⦿ 〔 *${prefix}elaina*
│⦿ 〔 *${prefix}emilia*
│⦿ 〔 *${prefix}erza*
│⦿ 〔 *${prefix}gremory*
│⦿ 〔 *${prefix}hestia*
│⦿ 〔 *${prefix}hinata*
│⦿ 〔 *${prefix}husbu*
│⦿ 〔 *${prefix}inori*
│⦿ 〔 *${prefix}isuzu*
│⦿ 〔 *${prefix}itachi*
│⦿ 〔 *${prefix}itori*
│⦿ 〔 *${prefix}kaga*
│⦿ 〔 *${prefix}kagura*
│⦿ 〔 *${prefix}kakasih*
│⦿ 〔 *${prefix}kaori*
│⦿ 〔 *${prefix}keneki*
│⦿ 〔 *${prefix}kotori*
│⦿ 〔 *${prefix}kurumi*
│⦿ 〔 *${prefix}loli*
│⦿ 〔 *${prefix}madara*
│⦿ 〔 *${prefix}megumin*
│⦿ 〔 *${prefix}mikasa*
│⦿ 〔 *${prefix}mikey*
│⦿ 〔 *${prefix}miku*
│⦿ 〔 *${prefix}minato*
│⦿ 〔 *${prefix}naruto*
│⦿ 〔 *${prefix}neko*
│⦿ 〔 *${prefix}neko2*
│⦿ 〔 *${prefix}nekonime*
│⦿ 〔 *${prefix}nezuko*
│⦿ 〔 *${prefix}onepiece*
│⦿ 〔 *${prefix}pokemon*
│⦿ 〔 *${prefix}randomnime*
│⦿ 〔 *${prefix}randomnime2*
│⦿ 〔 *${prefix}rize*
│⦿ 〔 *${prefix}sagiri*
│⦿ 〔 *${prefix}sakura*
│⦿ 〔 *${prefix}sasuke*
│⦿ 〔 *${prefix}shina*
│⦿ 〔 *${prefix}shinka*
│⦿ 〔 *${prefix}shinomiya*
│⦿ 〔 *${prefix}shizuka*
│⦿ 〔 *${prefix}shota*
│⦿ 〔 *${prefix}tejina*
│⦿ 〔 *${prefix}toukachan*
│⦿ 〔 *${prefix}tsunade*
│⦿ 〔 *${prefix}waifu*
│⦿ 〔 *${prefix}animewall*
│⦿ 〔 *${prefix}yotsuba*
│⦿ 〔 *${prefix}yuki*
│⦿ 〔 *${prefix}yumeko*
│⦿ 〔 *${prefix}8ball*
│⦿ 〔 *${prefix}tickle*
│⦿ 〔 *${prefix}gecg*
│⦿ 〔 *${prefix}feed*
│⦿ 〔 *${prefix}animeawoo*
│⦿ 〔 *${prefix}animemegumin*
│⦿ 〔 *${prefix}animeshinobu*
│⦿ 〔 *${prefix}animehandhold*
│⦿ 〔 *${prefix}animehighfive*
│⦿ 〔 *${prefix}animecringe*
│⦿ 〔 *${prefix}animedance*
│⦿ 〔 *${prefix}animehappy*
│⦿ 〔 *${prefix}animeglomp*
│⦿ 〔 *${prefix}animeblush*
│⦿ 〔 *${prefix}animesmug*
│⦿ 〔 *${prefix}animewave*
│⦿ 〔 *${prefix}animesmile*
│⦿ 〔 *${prefix}animepoke*
│⦿ 〔 *${prefix}animewink*
│⦿ 〔 *${prefix}animebonk*
│⦿ 〔 *${prefix}animebully*
│⦿ 〔 *${prefix}animeyeet*
│⦿ 〔 *${prefix}animebite*
│⦿ 〔 *${prefix}animelick*
│⦿ 〔 *${prefix}animekill*
│⦿ 〔 *${prefix}animecry*
│⦿ 〔 *${prefix}animewlp*
│⦿ 〔 *${prefix}animekiss*
│⦿ 〔 *${prefix}animehug*
│⦿ 〔 *${prefix}animeneko*
│⦿ 〔 *${prefix}animepat*
│⦿ 〔 *${prefix}animeslap*
│⦿ 〔 *${prefix}animecuddle*
│⦿ 〔 *${prefix}animewaifu*
│⦿ 〔 *${prefix}animenom*
│⦿ 〔 *${prefix}animefoxgirl*
│⦿ 〔 *${prefix}animegecg*
│⦿ 〔 *${prefix}animetickle*
│⦿ 〔 *${prefix}animefeed*
│⦿ 〔 *${prefix}animeavatar*
│⦿ 〔 *${prefix}genshin*
│⦿ 〔 *${prefix}anime*
│⦿ 〔 *${prefix}amv*
╰━━━━━━━━━━━━━━━━━━


┏━『 *\`乂 ᴇ ᴘ ʜ ᴏ ᴛ ᴏ - ᴍ ᴀ ᴋ ᴇ ʀ 乂\`* 』─✦
│⦿ 〔 *${prefix}glitchtext*
│⦿ 〔 *${prefix}writetext*
│⦿ 〔 *${prefix}advancedglow*
│⦿ 〔 *${prefix}typographytext*
│⦿ 〔 *${prefix}pixelglitch*
│⦿ 〔 *${prefix}neonglitch*
│⦿ 〔 *${prefix}flagtext*
│⦿ 〔 *${prefix}flag3dtext*
│⦿ 〔 *${prefix}deletingtext*
│⦿ 〔 *${prefix}blackpinkstyle*
│⦿ 〔 *${prefix}glowingtext*
│⦿ 〔 *${prefix}underwatertext*
│⦿ 〔 *${prefix}logomaker*
│⦿ 〔 *${prefix}cartoonstyle*
│⦿ 〔 *${prefix}papercutstyle*
│⦿ 〔 *${prefix}watercolortext*
│⦿ 〔 *${prefix}effectclouds*
│⦿ 〔 *${prefix}blackpinklogo*
│⦿ 〔 *${prefix}gradienttext*
│⦿ 〔 *${prefix}summerbeach*
│⦿ 〔 *${prefix}luxurygold*
│⦿ 〔 *${prefix}multicoloredneon*
│⦿ 〔 *${prefix}sandsummer*
│⦿ 〔 *${prefix}galaxywallpaper*
│⦿ 〔 *${prefix}1917style*
│⦿ 〔 *${prefix}makingneon*
│⦿ 〔 *${prefix}royaltext*
│⦿ 〔 *${prefix}freecreate*
│⦿ 〔 *${prefix}galaxystyle*
│⦿ 〔 *${prefix}lighteffects*
◣──────────❈

┏『 *\`乂 ᴅ ᴀ ᴛ ᴀ ʙ ᴀ s ᴇ 乂\`* 』─✦
│⦿ 〔 *${prefix}setcmd*
│⦿ 〔 *${prefix}delcmd*
│⦿ 〔 *${prefix}listcmd*
│⦿ 〔 *${prefix}lockcmd*
│⦿ 〔 *${prefix}addmsg*
│⦿ 〔 *${prefix}delmsg*
│⦿ 〔 *${prefix}getmsg*
│⦿ 〔 *${prefix}listmsg*
◣──────────❈

┏『 *\`乂 ʙ ᴜ ɢ - ᴡ ᴀ ʀ 乂\`* 』─✦
│⦿ 〔 *${prefix}alyavip*
│⦿ 〔 *${prefix}alyacrush*
│⦿ 〔 *${prefix}xandroid*
│⦿ 〔 *${prefix}xandroid2*
│⦿ 〔 *${prefix}systemuicrash*
│⦿ 〔 *${prefix}xsysui*
│⦿ 〔 *${prefix}xios*
│⦿ 〔 *${prefix}xios2*
│⦿ 〔 *${prefix}xgc*
│⦿ 〔 *${prefix}ioskill*
│⦿ 〔 *${prefix}iosx*
│⦿ 〔 *${prefix}onekill*
│⦿ 〔 *${prefix}oneclickall*
│⦿ 〔 *${prefix}xsamsung*
│⦿ 〔 *${prefix}xwaweb*
│⦿ 〔 *${prefix}doublekill*
│⦿ 〔 *${prefix}triplekill*
│⦿ 〔 *${prefix}💀*
◣──────────❈

┏『 *\`乂 ᴏ ᴛ ʜ ᴇ ʀ - ᴍ ᴇ ɴ ᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}ping*
│⦿ 〔 *${prefix}tqtoto*
│⦿ 〔 *${prefix}ttp*
│⦿ 〔 *${prefix}brat*
│⦿ 〔 *${prefix}animebrat*
│⦿ 〔 *${prefix}bratvid*
│⦿ 〔 *${prefix}furbrat*
│⦿ 〔 *${prefix}totalchat*
│⦿ 〔 *${prefix}hytam*
│⦿ 〔 *${prefix}cekidch*
│⦿ 〔 *${prefix}ceksewa*
│⦿ 〔 *${prefix}listsewa*
│⦿ 〔 *${prefix}readviewonce*
│⦿ 〔 *${prefix}cekkhodam*
│⦿ 〔 *${prefix}alkitab*
│⦿ 〔 *${prefix}totalfitur*
│⦿ 〔 *${prefix}menu*
│⦿ 〔 *${prefix}myip*
│⦿ 〔 *${prefix}reportbug*
│⦿ 〔 *${prefix}listpem*
│⦿ 〔 *${prefix}liststicker*
│⦿ 〔 *${prefix}listimage*
│⦿ 〔 *${prefix}listvideo*
│⦿ 〔 *${prefix}listvn*
│⦿ 〔 *${prefix}listbadword*
│⦿ 〔 *${prefix}listpc*
│⦿ 〔 *${prefix}listgc*
│⦿ 〔 *${prefix}owner*
│⦿ 〔 *${prefix}jadibot*
│⦿ 〔 *${prefix}listjadibot*
│⦿ 〔 *${prefix}donate*
│⦿ 〔 *${prefix}friend*
│⦿ 〔 *${prefix}obfuscate*
│⦿ 〔 *${prefix}styletext*
│⦿ 〔 *${prefix}fliptext*
│⦿ 〔 *${prefix}tts*
│⦿ 〔 *${prefix}say*
│⦿ 〔 *${prefix}togif*
│⦿ 〔 *${prefix}toqr*
│⦿ 〔 *${prefix}bass*
│⦿ 〔 *${prefix}blown*
│⦿ 〔 *${prefix}deep*
│⦿ 〔 *${prefix}earrape*
│⦿ 〔 *${prefix}fast*
│⦿ 〔 *${prefix}fat*
│⦿ 〔 *${prefix}nightcore*
│⦿ 〔 *${prefix}reverse*
│⦿ 〔 *${prefix}robot*
│⦿ 〔 *${prefix}slow*
│⦿ 〔 *${prefix}smooth*
│⦿ 〔 *${prefix}squirrel*
│⦿ 〔 *${prefix}tinyurl*
│⦿ 〔 *${prefix}tinyurl*
│⦿ 〔 *${prefix}tovn*
│⦿ 〔 *${prefix}toaudio*
│⦿ 〔 *${prefix}tomp3*
│⦿ 〔 *${prefix}tomp4*
│⦿ 〔 *${prefix}toimg*
│⦿ 〔 *${prefix}toonce*
│⦿ 〔 *${prefix}sticker*
│⦿ 〔 *${prefix}take*
│⦿ 〔 *${prefix}emoji*
│⦿ 〔 *${prefix}volume*
│⦿ 〔 *${prefix}ebinary*
│⦿ 〔 *${prefix}dbinary*
│⦿ 〔 *${prefix}ssweb*
│⦿ 〔 *${prefix}quoted*
│⦿ 〔 *${prefix}runtime*
│⦿ 〔 *${prefix}fakeml*
│⦿ 〔 *${prefix}fakedev*
│⦿ 〔 *${prefix}fakegc*
│⦿ 〔 *${prefix}fakedana*
│⦿ 〔 *${prefix}lobbyff*
│⦿ 〔 *${prefix}web2zip*
◣──────────❈

┏『 *\`乂 ᴘ ʀ ɪ ᴍ ʙ ᴏ ɴ - ᴍ ᴇ ɴ ᴜ 乂\`* 』─✦
│⦿ 〔 *${prefix}artimimpi*
│⦿ 〔 *${prefix}artinama*
│⦿ 〔 *${prefix}ramaljodoh*
│⦿ 〔 *${prefix}ramaljodohbali*
│⦿ 〔 *${prefix}suamiistri*
│⦿ 〔 *${prefix}ramalcinta*
│⦿ 〔 *${prefix}cocoknama*
│⦿ 〔 *${prefix}pasangan*
│⦿ 〔 *${prefix}jadiannikah*
│⦿ 〔 *${prefix}sifatusaha*
│⦿ 〔 *${prefix}rezeki*
│⦿ 〔 *${prefix}pekerjaan*
│⦿ 〔 *${prefix}nasib*
│⦿ 〔 *${prefix}penyakit*
│⦿ 〔 *${prefix}tarot*
│⦿ 〔 *${prefix}fengshui*
│⦿ 〔 *${prefix}haribaik*
│⦿ 〔 *${prefix}harisangar*
│⦿ 〔 *${prefix}harisial*
│⦿ 〔 *${prefix}nagahari*
│⦿ 〔 *${prefix}arahrezeki*
│⦿ 〔 *${prefix}peruntungan*
│⦿ 〔 *${prefix}weton*
│⦿ 〔 *${prefix}karakter*
│⦿ 〔 *${prefix}keberuntungan*
│⦿ 〔 *${prefix}memancing*
│⦿ 〔 *${prefix}masasubur*
│⦿ 〔 *${prefix}zodiak*
│⦿ 〔 *${prefix}shio*
◣──────────❈

┏『 *\`乂 ᴄᴇʀᴛɪꜰɪᴋᴀᴛ - ᴍᴇɴᴜ 乂\`* 』─✦ 
│⦿ 〔 *${prefix}stkbaik*
│⦿ 〔 *${prefix}stkcantik*
│⦿ 〔 *${prefix}stkganteng*
│⦿ 〔 *${prefix}stkhitam*
│⦿ 〔 *${prefix}stkmiskin*
│⦿ 〔 *${prefix}stkkaya*
│⦿ 〔 *${prefix}stkmarah*
│⦿ 〔 *${prefix}stksabar*
│⦿ 〔 *${prefix}stksakiti*
│⦿ 〔 *${prefix}stkkeren*
│⦿ 〔 *${prefix}stkmisterius*
│⦿ 〔 *${prefix}stksantai*
│⦿ 〔 *${prefix}stksombong*
│⦿ 〔 *${prefix}stklucu*
│⦿ 〔 *${prefix}stkgila*
◣──────────❈`
}

global.animemenu = (prefix) => {
return`╔══ 💠 *「 ANIME INFO 」* 💠 ══╗
┃
│⦿ ⛩️ *${prefix}otakudesu*
│⦿ 🔍 *${prefix}animefinder*
│⦿ 📰 *${prefix}kaorinusantara*
│⦿ 🌸 *${prefix}akira*
│⦿ 🌸 *${prefix}akiyama*
│⦿ 🌸 *${prefix}ana*
│⦿ 🌸 *${prefix}asuna*
│⦿ 🌸 *${prefix}ayuzawa*
│⦿ 🌸 *${prefix}boruto*
│⦿ 🌸 *${prefix}chiho*
│⦿ 🌸 *${prefix}chitoge*
│⦿ 🎭 *${prefix}cosplayloli*
│⦿ 🎭 *${prefix}cosplaysagiri*
│⦿ 👺 *${prefix}deidara*
│⦿ 🐱 *${prefix}doraemon*
│⦿ 🧙‍♀️ *${prefix}elaina*
│⦿ 🤍 *${prefix}emilia*
│⦿ ⚔️ *${prefix}erza*
│⦿ 👿 *${prefix}gremory*
│⦿ 🏛️ *${prefix}hestia*
│⦿ 💜 *${prefix}hinata*
│⦿ 👦 *${prefix}husbu*
│⦿ 🎶 *${prefix}inori*
│⦿ 🔫 *${prefix}isuzu*
│⦿ 👁️ *${prefix}itachi*
│⦿ ☕ *${prefix}itori*
│⦿ 🚢 *${prefix}kaga*
│⦿ 🌂 *${prefix}kagura*
│⦿ ⚡ *${prefix}kakasih*
│⦿ 🎻 *${prefix}kaori*
│⦿ 💀 *${prefix}keneki*
│⦿ 🐥 *${prefix}kotori*
│⦿ 🕒 *${prefix}kurumi*
│⦿ 👧 *${prefix}loli*
│⦿ ☄️ *${prefix}madara*
│⦿ 💥 *${prefix}megumin*
│⦿ 🧣 *${prefix}mikasa*
│⦿ 🏍️ *${prefix}mikey*
│⦿ 🎧 *${prefix}miku*
│⦿ 🌪️ *${prefix}minato*
│⦿ 🍥 *${prefix}naruto*
│⦿ 🐾 *${prefix}neko*
│⦿ 🐾 *${prefix}neko2*
│⦿ 🐾 *${prefix}nekonime*
│⦿ 🎋 *${prefix}nezuko*
│⦿ 🏴‍☠️ *${prefix}onepiece*
│⦿ ⚡ *${prefix}pokemon*
│⦿ 🎲 *${prefix}randomnime*
│⦿ 🎲 *${prefix}randomnime2*
│⦿ 🍴 *${prefix}rize*
│⦿ 🎨 *${prefix}sagiri*
│⦿ 🌸 *${prefix}sakura*
│⦿ 🐍 *${prefix}sasuke*
│⦿ 🧊 *${prefix}shina*
│⦿ 💫 *${prefix}shinka*
│⦿ 🧊 *${prefix}shinomiya*
│⦿ 👓 *${prefix}shizuka*
│⦿ 🧒 *${prefix}shota*
│⦿ 🎩 *${prefix}tejina*
│⦿ ☕ *${prefix}toukachan*
│⦿ 🐌 *${prefix}tsunade*
│⦿ 💍 *${prefix}waifu*
│⦿ 🖼️ *${prefix}animewall*
│⦿ 🍀 *${prefix}yotsuba*
│⦿ ❄️ *${prefix}yuki*
│⦿ 🃏 *${prefix}yumeko*
│⦿ 🎱 *${prefix}8ball*
│⦿ 👣 *${prefix}tickle*
│⦿ 🖼️ *${prefix}gecg*
│⦿ 🍱 *${prefix}feed*
│⦿ 🐺 *${prefix}animeawoo*
│⦿ 💥 *${prefix}animemegumin*
│⦿ 🦋 *${prefix}animeshinobu*
│⦿ 🤝 *${prefix}animehandhold*
│⦿ ✋ *${prefix}animehighfive*
│⦿ 😬 *${prefix}animecringe*
│⦿ 💃 *${prefix}animedance*
│⦿ ️😊 *${prefix}animehappy*
│⦿ 🫂 *${prefix}animeglomp*
│⦿ 😳 *${prefix}animeblush*
│⦿ 😏 *${prefix}animesmug*
│⦿ 👋 *${prefix}animewave*
│⦿ 😁 *${prefix}animesmile*
│⦿ 👉 *${prefix}animepoke*
│⦿ 😉 *${prefix}animewink*
│⦿ 🔨 *${prefix}animebonk*
│⦿ 👊 *${prefix}animebully*
│⦿ 🚀 *${prefix}animeyeet*
│⦿ 🦷 *${prefix}animebite*
│⦿ 👅 *${prefix}animelick*
│⦿ 🗡️ *${prefix}animekill*
│⦿ 😭 *${prefix}animecry*
│⦿ 🖼️ *${prefix}animewlp*
│⦿ 💋 *${prefix}animekiss*
│⦿ 🫂 *${prefix}animehug*
│⦿ 🐾 *${prefix}animeneko*
│⦿ 💆 *${prefix}animepat*
│⦿ 👋 *${prefix}animeslap*
│⦿ 🧸 *${prefix}animecuddle*
│⦿ 💍 *${prefix}animewaifu*
│⦿ 😋 *${prefix}animenom*
│⦿ 🦊 *${prefix}animefoxgirl*
│⦿ 🖼️ *${prefix}animegecg*
│⦿ 👣 *${prefix}animetickle*
│⦿ 🍱 *${prefix}animefeed*
│⦿ 👤 *${prefix}animeavatar*
│⦿ 🌌 *${prefix}genshin*
│⦿ 🎌 *${prefix}anime*
│⦿ 🎞️ *${prefix}amv*
┃
╚════════════════════╝`}

global.ownermenu = (prefix) => {
return`╭═══ • 🌐 *OWNER ONLY* 🌐 • ═══╮
┃
│⦿ 📖 *${prefix}autoread*
│⦿ 🎫 *${prefix}addsewa*
│⦿ 🗑️ *${prefix}delsewa*
│⦿ 📱 *${prefix}onlypc*
│⦿ 👥 *${prefix}onlygc*
│⦿ 👤 *${prefix}self*
│⦿ 🧹 *${prefix}clearchat*
│⦿ 📌 *${prefix}pinchat*
│⦿ 📍 *${prefix}unpinchat*
│⦿ 🏘️ *${prefix}gconly*
│⦿ 🔓 *${prefix}public*
│⦿ 🛠️ *${prefix}addcase*
│⦿ 📥 *${prefix}join*
│⦿ 📢 *${prefix}bctext*
│⦿ 📊 *${prefix}poll*
│⦿ 🖼️ *${prefix}bcimage*
│⦿ 🎥 *${prefix}bcvideo*
│⦿ 📖 *${prefix}set* (set semua item/inventory)
│⦿ 🏗️ *${prefix}creategc*
│⦿ 🏷️ *${prefix}setexif*
│⦿ 🆔 *${prefix}userjid*
│⦿ 🤖 *${prefix}setbotname*
│⦿ 🤖 *${prefix}botmode*
│⦿ 📝 *${prefix}setbotbio*
│⦿ 🖼️ *${prefix}delppbot*
│⦿ 🔄 *${prefix}restart*
│⦿ 🖼️ *${prefix}setppbot*
│⦿ 💎 *${prefix}addprem*
│⦿ 🗑️ *${prefix}delprem*
│⦿ 👑 *${prefix}addowner*
│⦿ 🗑️ *${prefix}delowner*
│⦿ 🎤 *${prefix}addvn*
│⦿ 🗑️ *${prefix}delvn*
│⦿ 📁 *${prefix}addsticker*
│⦿ 🗑️ *${prefix}delsticker*
│⦿ 🖼️ *${prefix}addimage*
│⦿ 🗑️ *${prefix}delimage*
│⦿ 🎥 *${prefix}addvideo*
│⦿ 🗑️ *${prefix}delvideo*
│⦿ 🚫 *${prefix}block*
│⦿ 🔓 *${prefix}unblock del*
│⦿ 🚪 *${prefix}leavegc*
│⦿ 📊 *${prefix}setlimit*
│⦿ 💸 *${prefix}setmoney*
│⦿ 🆙 *${prefix}setlevel*
│⦿ 🏦 *${prefix}setbank*
┃
╰══════════════════════════╯`}

global.othermenu = (prefix) => {
return`┎┈┈┈ • 🔮 *OTHER MENU* 🔮 • ┈┈┈┒
┃
│⦿ 📝 *${prefix}daftar*
│⦿ 👑 *${prefix}tagadmin*
│⦿ 👨‍🦲 *${prefix}botak*
│⦿ 🌐 *${prefix}listonline*
│⦿ 🤥 *${prefix}fitnah*
│⦿ 🧕 *${prefix}hijabkan*
│⦿ 🎨 *${prefix}edit (foto)*
│⦿ 🚻 *${prefix}ubahgender*
│⦿ 👳 *${prefix}paustad*
│⦿ 🔝 *${prefix}upgc*
│⦿ 📶 *${prefix}ping*
│⦿ 🍀 *${prefix}tqtoto*
│⦿ 🖋️ *${prefix}ttp*
│⦿ 🖋️ *${prefix}brat*
│⦿ 🎞️ *${prefix}bratvid*
│⦿ 📊 *${prefix}totalchat*
│⦿ 🌑 *${prefix}hytam*
│⦿ 🆔 *${prefix}cekidch*
│⦿ 📅 *${prefix}ceksewa*
│⦿ 📜 *${prefix}listsewa*
│⦿ 👁️ *${prefix}readviewonce*
│⦿ 🔮 *${prefix}cekkhodam*
│⦿ 📖 *${prefix}alkitab*
│⦿ ⚙️ *${prefix}totalfitur*
│⦿ 📜 *${prefix}menu*
│⦿ 🌐 *${prefix}myip*
│⦿ 🐞 *${prefix}reportbug*
│⦿ 👤 *${prefix}listpem*
│⦿ 📁 *${prefix}liststicker*
│⦿ 🖼️ *${prefix}listimage*
│⦿ 🎥 *${prefix}listvideo*
│⦿ 🎤 *${prefix}listvn*
│⦿ 🤐 *${prefix}listbadword*
│⦿ 📱 *${prefix}listpc*
│⦿ 👥 *${prefix}listgc*
│⦿ 👑 *${prefix}owner*
│⦿ 🤖 *${prefix}jadibot*
│⦿ 📜 *${prefix}listjadibot*
│⦿ ☕ *${prefix}donate*
│⦿ 🤝 *${prefix}friend*
│⦿ 🔐 *${prefix}obfuscate*
│⦿ 🖋️ *${prefix}styletext*
│⦿ 🔃 *${prefix}fliptext*
│⦿ 🗣️ *${prefix}tts*
│⦿ 💬 *${prefix}say*
│⦿ 🎞️ *${prefix}togif*
│⦿ 🏁 *${prefix}toqr*
│⦿ 🔊 *${prefix}bass*
│⦿ 🌬️ *${prefix}blown*
│⦿ 🌊 *${prefix}deep*
│⦿ 📢 *${prefix}earrape*
│⦿ ⏩ *${prefix}fast*
│⦿ 🍔 *${prefix}fat*
│⦿ 🌙 *${prefix}nightcore*
│⦿ ⏪ *${prefix}reverse*
│⦿ 🤖 *${prefix}robot*
│⦿ 🐢 *${prefix}slow*
│⦿ 🧊 *${prefix}smooth*
│⦿ 🐿️ *${prefix}squirrel*
│⦿ 🔗 *${prefix}tinyurl*
│⦿ 🔗 *${prefix}tinyurl*
│⦿ 🎤 *${prefix}tovn*
│⦿ 🎧 *${prefix}toaudio*
│⦿ 🎵 *${prefix}tomp3*
│⦿ 📽️ *${prefix}tomp4*
│⦿ 🖼️ *${prefix}toimg*
│⦿ 👁️ *${prefix}toonce*
│⦿ 📁 *${prefix}sticker*
│⦿ 📥 *${prefix}take*
│⦿ 🙂 *${prefix}emoji*
│⦿ 🔊 *${prefix}volume*
│⦿ 🔢 *${prefix}ebinary*
│⦿ 🔢 *${prefix}dbinary*
│⦿ 📸 *${prefix}ssweb*
│⦿ 💬 *${prefix}quoted*
│⦿ ⏳ *${prefix}runtime*
│⦿ 🎮 *${prefix}fakeml*
│⦿ 💻 *${prefix}fakedev*
│⦿ 👥 *${prefix}fakegc*
│⦿ 💸 *${prefix}fakedana*
│⦿ 🔫 *${prefix}lobbyff*
│⦿ 📦 *${prefix}web2zip*
◣──────────❈`}

global.rpgmenu = (prefix, hituet) => {
return`╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
┃  ⚔️  *\`乂 R P G - M E N U 乂\`* ⚔️
╽
│⦿ 💼 *${prefix}kerja*
│⦿ 💼 *${prefix}pinjol*
│⦿ 💼 *${prefix}belivga*
│⦿ 💼 *${prefix}nambangkripto*
│⦿ 💼 *${prefix}jualkripto*
│⦿ 🐉 *${prefix}fightnaga*
│⦿ 🐈 *${prefix}fightkucing*
│⦿ 🦅 *${prefix}fightphonix*
│⦿ 🦁 *${prefix}fightgriffin*
│⦿ 🦊 *${prefix}fightkyubi*
│⦿ 🐎 *${prefix}fightcentaur*
│⦿ 💰 *${prefix}nabung*
│⦿ ⛏️ *${prefix}mining*
│⦿ 🏦 *${prefix}bankcek*
│⦿ 🥷 *${prefix}maling*
│⦿ 🏧 *${prefix}banknabung*
│⦿ 🏧 *${prefix}banktarik*
│⦿ 🌿 *${prefix}berkebon*
│⦿ 🔨 *${prefix}crafting*
│⦿ 🎲 *${prefix}bet*
│⦿ 🎁 *${prefix}bonus*
│⦿ 🍎 *${prefix}buah*
│⦿ 🪓 *${prefix}nebang*
│⦿ 👷 *${prefix}bekerja*
│⦿ 🏛️ *${prefix}bansos*
│⦿ 🚕 *${prefix}taxy*
│⦿ 🗑️ *${prefix}mulung*
│⦿ 🏹 *${prefix}berburu*
│⦿ 👮 *${prefix}polisi*
│⦿ 🏪 *${prefix}berdagang*
│⦿ 🔫 *${prefix}rampok*
│⦿ 🔪 *${prefix}bunuh*
│⦿ 💎 *${prefix}collect*
│⦿ 🎣 *${prefix}mancing*
│⦿ 🛠️ *${prefix}repair*
│⦿ 🍱 *${prefix}feed*
│⦿ ⚔️ *${prefix}duel*
│⦿ 💸 *${prefix}gajian*
│⦿ 🆙 *${prefix}upgrade*
│⦿ 💸 *${prefix}transfer*
│⦿ 🛒 *${prefix}shop*
│⦿ 🔮 *${prefix}selectskill*
│⦿ 🗑️ *${prefix}sampah*
│⦿ 🚀 *${prefix}roket*
│⦿ 🛵 *${prefix}ojek*
│⦿ 🏗️ *${prefix}nguli*
│⦿ 🏪 *${prefix}pasar*
│⦿ 🥷 *${prefix}rob*
│⦿ 🔗 *${prefix}referal*
│⦿ 🐾 *${prefix}petshop*
│⦿ 🌊 *${prefix}kolam*
│⦿ 🤠 *${prefix}koboy*
│⦿ 🏆 *${prefix}leaderboard*
│⦿ 🎰 *${prefix}casino*
│⦿ ⚔️ *${prefix}duel*
│⦿ 🛡️ *${prefix}pilihclass*
│⦿ 🔫 *${prefix}heist*
│⦿ 🃏 *${prefix}poker3*
│⦿ 👊 *${prefix}fight*
│⦿ 🎫 *${prefix}Lotre*
│⦿ ⚔️ *${prefix}battle*
│⦿ 📈 *${prefix}hilo*
│⦿ 🔫 *${prefix}rr*
│⦿ 📊 *${prefix}mystats*
│⦿ 💣 *${prefix}bomb*
│⦿ 🗺️ *${prefix}petualang*
│⦿ 🥋 *${prefix}perangsarung*
│⦿ 🎲 *${prefix}ulartangga*
│⦿ 🐓 *${prefix}sabung*
│⦿ 📈 *${prefix}invest*
│⦿ 📁 *${prefix}portofolio*
│⦿ 🌑 *${prefix}blackinvest*
│⦿ 🥷 *${prefix}begal*
│⦿ 🎰 *${prefix}slot*
│⦿ 🏎️ *${prefix}balapan*
│⦿ 🌴 *${prefix}nyawit*
┃
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯`}

global.gamemenu = (prefix, hituet) => {
return`╔═══ • 🎮 *GAME MENU* • ═══╗
┃
│⦿ 🎮 *${prefix}tebakanml*
│⦿ 🎮 *${prefix}tebakgame*
│⦿ 🏷️ *${prefix}tebaklogo*
│⦿ 📖 *${prefix}tebaksurah*
│⦿ 🃏 *${prefix}blackjack*
│⦿ 🃏 *${prefix}poker*
│⦿ ♟️ *${prefix}catur*
│⦿ 🧱 *${prefix}tetris*
│⦿ 🐍 *${prefix}snake*
│⦿ 🐦 *${prefix}flappybird*
│⦿ 📝 *${prefix}tebakkata*
│⦿ ❓ *${prefix}tebaktebakan*
│⦿ 🎶 *${prefix}tebaklirik*
│⦿ 🖼️ *${prefix}tebakgambar*
│⦿ 🎵 *${prefix}tebaklagu*
│⦿ 🧪 *${prefix}tebakkimia*
│⦿ 🧠 *${prefix}asahotak*
│⦿ 👤 *${prefix}siapaaku*
│⦿ 🧩 *${prefix}susunkata*
│⦿ 🧩 *${prefix}tekateki*
│⦿ 🤡 *${prefix}caklontong*
│⦿ 👨‍👩‍👧‍👦 *${prefix}family100*
│⦿ 🐺 *${prefix}werewolf*
┃
╚══════════════════╝`}

global.downloadmenu = (prefix) => {
return`╭─── • 📥 *DOWNLOADER* • ───╮
┃
│⦿ 📱 ${prefix}tiktok
│⦿ 🤖 ${prefix}an1
│⦿ 🖼️ ${prefix}tiktokslide
│⦿ 🎶 ${prefix}tiktokaudio
│⦿ 🧵 ${prefix}threads
│⦿ 🎧 ${prefix}spdl
│⦿ 🔍 ${prefix}ytsearch <mp3>
│⦿ 🔍 ${prefix}ttsearch
│⦿ 📦 ${prefix}teraboxdl
│⦿ 🎥 ${prefix}snackvideo
│⦿ 🎬 ${prefix}capcutdl
│⦿ 🎧 ${prefix}play
│⦿ 🎵 ${prefix}ytmp3
│⦿ 🎥 ${prefix}ytmp4
│⦿ 🔍 ${prefix}google
│⦿ 🎬 ${prefix}imdb
│⦿ ⛅ ${prefix}weather
│⦿ 🆔 ${prefix}wanumber
│⦿ 📸 ${prefix}instagram
│⦿ 🔵 ${prefix}facebook
│⦿ 🐦 ${prefix}twittervid
│⦿ 📁 ${prefix}telestick
│⦿ 🎧 ${prefix}spotify
│⦿ 📁 ${prefix}gitclone
│⦿ 📱 ${prefix}happymod
│⦿ ☁️ ${prefix}gdrive
│⦿ 📌 ${prefix}pindl/pinterestdl
│⦿ 🔔 ${prefix}ringtone
│⦿ 🌐 ${prefix}AIO (all in one)
◣──────────❈`}
global.newfitur = (prefix) => {
return`╭━ • ✨ *乂 New Feature 乂* ✨ • ━╮ 
┃ 
│⦿ 👾 *${prefix}an1* 
│⦿ 🗺️ *${prefix}maps* 
│⦿ ⚰️ *${prefix}fakewafat* 
│⦿ 🗣️ *${prefix}spch* 
│⦿ 👨‍💻 *${prefix}fakedev* 
│⦿ 💳 *${prefix}fakedana* 
│⦿ 💬 *${prefix}fakegc* 
│⦿ 🎮 *${prefix}lobyff* 
│⦿ 🕶️ *${prefix}fakebangjago* 
│⦿ 🕌 *${prefix}autosahur* 
│⦿ 📦 *${prefix}stickerpack* 
│⦿ 🎫 *${prefix}redeem* 
│⦿ ➕ *${prefix}addredeem* 
│⦿ 📜 *${prefix}listredeem* 
│⦿ 🟩 *${prefix}alyabrat* 
│⦿ 🟩 *${prefix}bratbahlil* 
│⦿ 🖌️ *${prefix}editimg* 
│⦿ 🧵 *${prefix}threads* 
│⦿ 🌸 *${prefix}anime* 
│⦿ ⚙️ *${prefix}Spekhp* 
│⦿ 🕵️‍♂️ *${prefix}Wastalk* 
│⦿ 📌 *${prefix}Pindl* 
│⦿ 🛑 *${prefix}Antispam* 
│⦿ 📱 *${prefix}GSMARENA* 
│⦿ 👁️ *${prefix}antidelete* 
│⦿ 🪶 *${prefix}faketwit* 
│⦿ ▶️ *${prefix}playch* 
│⦿ 💬 *${prefix}fakethread* 
│⦿ 🔞 *${prefix}antinsfw* 
│⦿ 🧍 *${prefix}tofigure* 
│⦿ 🖤 *${prefix}tohitam* 
│⦿ 👨‍🦲 *${prefix}tobotak* 
│⦿ 🧕 *${prefix}tohijab* 
│⦿ 🔴 *${prefix}ytstalk* 
│⦿ 🔎 *${prefix}ceknik* 
│⦿ 📸 *${prefix}fakestory* 
│⦿ 📦 *${prefix}aio* (All In One) 
│⦿ 🔳 *${prefix}qr* 
│⦿ 📝 *${prefix}nulis* 
│⦿ 📋 *${prefix}daftar* 
│⦿ 📢 *${prefix}tagadmin* 
│⦿ 👨‍🦲 *${prefix}botak* 
│⦿ 🟢 *${prefix}listonline* 
│⦿ 🎭 *${prefix}fitnah* 
│⦿ 📨 *${prefix}nglspam* 
│⦿ 👳‍♂️ *${prefix}paustad* 
│⦿ ⚔️ *${prefix}battle* 
│⦿ 💣 *${prefix}bomb* 
│⦿ 🃏 *${prefix}poker3* 
│⦿ ♟️ *${prefix}catur* 
│⦿ 🃏 *${prefix}poker* 
│⦿ 🧱 *${prefix}tetris* 
│⦿ 🐍 *${prefix}snake* 
│⦿ 🐦 *${prefix}flappybird* 
│⦿ ↕️ *${prefix}hilo* 
│⦿ 🎡 *${prefix}roulette* 
│⦿ 🎟️ *${prefix}lotre* 
│⦿ 🤺 *${prefix}duel* 
│⦿ 🎒 *${prefix}selectclass* 
│⦿ ✨ *${prefix}upgradestats* 
│⦿ 📊 *${prefix}mystats* 
│⦿ 🎲 *${prefix}gachawaifu* 
│⦿ 💍 *${prefix}buycincin* 
│⦿ 💒 *${prefix}marry* 
│⦿ 💕 *${prefix}mywaifu* 
│⦿ 💔 *${prefix}cerai* 
│⦿ 📱 *${prefix}scanme* 
│⦿ 🚨 *${prefix}wanted* 
│⦿ 🗳️ *${prefix}votekick* 
│⦿ 🔮 *${prefix}tarot* 
│⦿ 🎵 *${prefix}playmusic* 
│⦿ 🌈 *${prefix}cekfemboy* 
│⦿ 🤖 *${prefix}botmode on* 
│⦿ 🤖 *${prefix}botmode off* 
│⦿ 🔇 *${prefix}mutegc* 
│⦿ 📦 *${prefix}fdroid* 
│⦿ 💘 *${prefix}gachajodoh* 
│⦿ 📸 *${prefix}fakeig* 
│⦿ 🔔 *${prefix}fakenotif* 
│⦿ 💳 *${prefix}ccgen* 
│⦿ 📞 *${prefix}gachanomor* 
┗⊱ 🔑 *${prefix}getotp* 
┃ 
╰━━━━━━━━━━━━━━━━━━━━╯`}
global.groupmenu = (prefix) => {
return`╭┈┈ • 👥 *GROUP MENU* • ┈┈╮
┃
│⦿ 🕵️ *${prefix}sider*
│⦿ 🛡️ *${prefix}antinsfw*
│⦿ 🤖 *${prefix}autoaigc*
│⦿ 🤙 *${prefix}warcall*
│⦿ 🤖 *${prefix}autosimi*
│⦿ 💬 *${prefix}alyachat*
│⦿ 💬 *${prefix}alyachatv2*
│⦿ 👑 *${prefix}adminonly*
│⦿ 🎫 *${prefix}setwelcome*
│⦿ 🚪 *${prefix}setleft*
│⦿ 🔔 *${prefix}welcome on/off*
│⦿ 🔗 *${prefix}antilink*
│⦿ 🔗 *${prefix}antiwame*
│⦿ 🔗 *${prefix}linkgc*
│⦿ 📥 *${prefix}invite*
│⦿ ⏳ *${prefix}ephemeral*
│⦿ 🗑️ *${prefix}delete*
│⦿ 🖼️ *${prefix}setppgroup*
│⦿ 🗑️ *${prefix}delppgroup*
│⦿ 📝 *${prefix}setname*
│⦿ 📝 *${prefix}setdesc*
│⦿ ➕ *${prefix}add*
│⦿ ➖ *${prefix}kick*
│⦿ 🆙 *${prefix}promote*
│⦿ 🔽 *${prefix}demote*
│⦿ 📢 *${prefix}hidetag*
│⦿ 📢 *${prefix}totag*
│⦿ 📢 *${prefix}tagall*
│⦿ 📝 *${prefix}editinfo*
│⦿ 🔓 *${prefix}opentime*
│⦿ 🔒 *${prefix}closetime*
│⦿ 🔄 *${prefix}resetlink*
│⦿ 📝 *${prefix}getbio*
│⦿ 📊 *${prefix}vote*
│⦿ 🆙 *${prefix}upvote*
│⦿ 👑 *${prefix}tagadmin*
│⦿ 🌐 *${prefix}listonline*
│⦿ 🔽 *${prefix}downvote*
│⦿ 📊 *${prefix}checkvote*
│⦿ 🗑️ *${prefix}delvote*
│⦿ 📁 *${prefix}autostickergc*
│⦿ 🔗 *${prefix}antilinkgc*
│⦿ 🔗 *${prefix}antilinkch*
│⦿ 🔗 *${prefix}antiwame*
│⦿ 🔗 *${prefix}antilinkall*
│⦿ 🔗 *${prefix}antilinktiktok*
│⦿ 🔗 *${prefix}antilinkfb*
│⦿ 🔗 *${prefix}antilinktwitter*
│⦿ 🔗 *${prefix}antilinkig*
│⦿ 🔗 *${prefix}antilinktg*
│⦿ 🔗 *${prefix}antilinkytvid*
│⦿ 🔗 *${prefix}antilinkytch*
│⦿ 🛡️ *${prefix}antivirus*
│⦿ 🤐 *${prefix}antitoxic*
│⦿ 🤖 *${prefix}antibot*
│⦿ 🛡️ *${prefix}antispam*
│⦿ 🛡️ *${prefix}antidelete*
│⦿ ❤️ *${prefix}react*
◣──────────❈`}

global.funmenu = (prefix) => {
return`╭── • 🎈 *FUN MENU* • ──╮
┃
│⦿ 💍 *${prefix}gachawaifu*
│⦿ 💍 *${prefix}marry*
│⦿ 💍 *${prefix}mywaifu*
│⦿ 💍 *${prefix}buycincin*
│⦿ 💔 *${prefix}cerai*
│⦿ 🖼️ *${prefix}smeme*
│⦿ 👩‍❤️‍👨 *${prefix}ppcouple*
│⦿ 📖 *${prefix}define*
│⦿ 💬 *${prefix}qc*
│⦿ 🎶 *${prefix}lyrics*
│⦿ ✊ *${prefix}suit*
│⦿ ➕ *${prefix}math*
│⦿ ⭕ *${prefix}tictactoe*
│⦿ 💡 *${prefix}fact*
│⦿ ⚖️ *${prefix}truth*
│⦿ ⚖️ *${prefix}dare*
│⦿ 👩‍❤️‍👨 *${prefix}couple*
│⦿ ❤️ *${prefix}soulmate*
│⦿ 🤡 *${prefix}stupidcheck*
│⦿ 😎 *${prefix}handsomecheck*
│⦿ 🤢 *${prefix}uncleancheck*
│⦿ 🔥 *${prefix}hotcheck*
│⦿ 🧠 *${prefix}smartcheck*
│⦿ 👍 *${prefix}greatcheck*
│⦿ 😈 *${prefix}evilcheck*
│⦿ 🐶 *${prefix}dogcheck*
│⦿ 😎 *${prefix}coolcheck*
│⦿ 💍 *${prefix}waifucheck*
│⦿ 🤩 *${prefix}awesomecheck*
│⦿ 🏳️‍🌈 *${prefix}gaycheck*
│⦿ ✨ *${prefix}cutecheck*
│⦿ 👩‍❤️‍👩 *${prefix}lesbiancheck*
│⦿ 🔞 *${prefix}hornycheck*
│⦿ 💅 *${prefix}prettycheck*
│⦿ 💕 *${prefix}lovelycheck*
│⦿ 👺 *${prefix}uglycheck*
│⦿ 🎲 *${prefix}pick*
│⦿ 📝 *${prefix}quotes*
│⦿ ❓ *${prefix}can*
│⦿ ❓ *${prefix}is*
│⦿ ❓ *${prefix}when*
│⦿ ❓ *${prefix}where*
│⦿ ❓ *${prefix}what*
│⦿ ❓ *${prefix}how*
│⦿ 📊 *${prefix}rate*
│⦿ 😭 *${prefix}cry*
│⦿ 🗡️ *${prefix}kill*
│⦿ 🫂 *${prefix}hug*
│⦿ 💆 *${prefix}pat*
│⦿ 👅 *${prefix}lick*
│⦿ 💋 *${prefix}kiss*
│⦿ 🦷 *${prefix}bite*
│⦿ 🚀 *${prefix}yeet*
│⦿ 👊 *${prefix}bully*
│⦿ 🔨 *${prefix}bonk*
│⦿ 😉 *${prefix}wink*
│⦿ 👉 *${prefix}poke*
│⦿ 😋 *${prefix}nom*
│⦿ 👋 *${prefix}slap*
│⦿ 😊 *${prefix}smile*
│⦿ 👋 *${prefix}wave*
│⦿ 🐺 *${prefix}awoo*
│⦿ 😳 *${prefix}blush*
│⦿ 😏 *${prefix}smug*
│⦿ 🫂 *${prefix}glomp*
│⦿ 😊 *${prefix}happy*
│⦿ 💃 *${prefix}dance*
│⦿ 😬 *${prefix}cringe*
│⦿ 🧸 *${prefix}cuddle*
│⦿ ✋ *${prefix}highfive*
│⦿ 🦋 *${prefix}shinobu*
│⦿ 🤝 *${prefix}handhold*
│⦿ 🍑 *${prefix}spank*
│⦿ 👣 *${prefix}tickle*
│⦿ 👤 *${prefix}avatar*
│⦿ 🍱 *${prefix}feed*
│⦿ 🦊 *${prefix}foxgirl*
│⦿ 🖼️ *${prefix}gecg*
│⦿ 👤 *${prefix}checkme*
◣──────────❈`}

global.stalkermenu = (prefix) => {
return `╭── • 🕵️ *STALKER* • ──╮
┃
│⦿ 📸 *${prefix}igstalk*
│⦿ 📱 *${prefix}ttstalk*
│⦿ 🔫 *${prefix}ffstalk*
│⦿ 🎮 *${prefix}mlstalk*
│⦿ 📦 *${prefix}npmstalk*
│⦿ 📁 *${prefix}ghstalk*
│⦿ 📺 *${prefix}ytstalk*
◣──────────❈`}

global.stickermenu = (prefix) => {
return`╭── • 📁 *STICKER* • ──╮
┃
│⦿ 🦢 *${prefix}goose*
│⦿ 🐶 *${prefix}woof*
│⦿ 🎱 *${prefix}8ball*
│⦿ 🦎 *${prefix}lizard*
│⦿ 🐱 *${prefix}meow*
│⦿ 🔱 *${prefix}gura*
│⦿ 🐶 *${prefix}doge*
│⦿ ⭐️ *${prefix}patrick*
│⦿ ❤️ *${prefix}lovestick*
◣──────────❈`}

global.databasemenu = (prefix) => {
return`╭── • 📂 *DATABASE* • ──╮
┃
│⦿ 🏷️ *${prefix}setcmd*
│⦿ 🗑️ *${prefix}delcmd*
│⦿ 📜 *${prefix}listcmd*
│⦿ 🔒 *${prefix}lockcmd*
│⦿ ➕ *${prefix}addmsg*
│⦿ 🗑️ *${prefix}delmsg*
│⦿ 📥 *${prefix}getmsg*
│⦿ 📜 *${prefix}listmsg*
◣──────────❈`}

global.aimenu = (prefix) => {
return`╭── • 🤖 *OPEN-AI* • ──╮
┃
│⦿ 🧠 *${prefix}leptonai*
│⦿ 🎨 *${prefix}text2anime*
│⦿ 👤 *${prefix}faceswap*
│⦿ 🧠 *${prefix}openai*
│⦿ 💬 *${prefix}ai4chat*
│⦿ ➕ *${prefix}aimath*
│⦿ 🧠 *${prefix}aoyoai*
│⦿ 🤖 *${prefix}simi*
│⦿ 🧠 *${prefix}powerbrain*
│⦿ 🧠 *${prefix}alyamind*
│⦿ 🎸 *${prefix}hitori-gotoh*
│⦿ 🌊 *${prefix}hiura-mihate*
│⦿ ⭐️ *${prefix}hoshino-takanashi*
│⦿ 🖼️ *${prefix}aiimg*
│⦿ 🤖 *${prefix}ai*
│⦿ 🧠 *${prefix}bard*
│⦿ 🎨 *${prefix}prodia*
│⦿ 🎌 *${prefix}diffusion-anime*
│⦿ 🗺️ *${prefix}travel-assistant*
│⦿ 📄 *${prefix}ocr*
│⦿ 🧠 *${prefix}guru-ai*
│⦿ 🧠 *${prefix}emi-ai*
│⦿ 🧠 *${prefix}claude-ai*
│⦿ 👗 *${prefix}costume-ai*
│⦿ 🧠 *${prefix}herc-ai*
│⦿ 🎨 *${prefix}hercai-cartoon*
│⦿ 🎌 *${prefix}hercai-animefy*
│⦿ 📚 *${prefix}hercai-lexica*
│⦿ 🎨 *${prefix}hercai-prodia*
│⦿ 🎨 *${prefix}hercai-simurg*
│⦿ 🎨 *${prefix}hercai-raava*
│⦿ 🎨 *${prefix}hercai-shonin*
│⦿ 📸 *${prefix}realistic*
│⦿ 🧊 *${prefix}3dmodel*
│⦿ 🧟 *${prefix}jadizombie*
│⦿ 🧠 *${prefix}blackboxai*
│⦿ 🎨 *${prefix}photoleapai*
│⦿ 🎨 *${prefix}diffusion*
│⦿ 🧠 *${prefix}indo-ai*
│⦿ 🧠 *${prefix}lamaai*
│⦿ 🎙️ *${prefix}aivo*
│⦿ 🧠 *${prefix}gemini*
│⦿ 🖼️ *${prefix}text2img*
│⦿ 🧠 *${prefix}absolutely*
│⦿ 🖼️ *${prefix}dalle*
│⦿ 🖼️ *${prefix}bingimg*
│⦿ 🧠 *${prefix}bingai*
│⦿ 🖼️ *${prefix}gptimg*
│⦿ 🧠 *${prefix}gpt4*
│⦿ 🧠 *${prefix}gpt4_2*
│⦿ 🧠 *${prefix}anything*
│⦿ 📺 *${prefix}hdvid*
│⦿ 💬 *${prefix}cai*
│⦿ 🧠 *${prefix}youai*
│⦿ 📸 *${prefix}remini*
│⦿ 🎌 *${prefix}jadianime*
│⦿ ✂️ *${prefix}removebg*
│⦿ 👨‍🦲 *${prefix}tobotak*
│⦿ 👤 *${prefix}tofigure*
│⦿ 👤 *${prefix}tofigure2*
│⦿ 👤 *${prefix}tofigure3*
│⦿ 👤 *${prefix}tofigure4*
│⦿ 🌑 *${prefix}tohitam*
│⦿ 🧕 *${prefix}tohijab*
│⦿ 🎨 *${prefix}tochibi*
│⦿ 🎨 *${prefix}editimg*
│⦿ 🖋️ *${prefix}nulis*
◣──────────❈`}

global.quotesmenu = (prefix) => {
return`╭── • 📜 *QUOTES* • ──╮
┃
│⦿ 🎌 *${prefix}quotesanime*
│⦿ 🗣️ *${prefix}quotesbacot*
│⦿ 💕 *${prefix}quotesbucin*
│⦿ 💪 *${prefix}quotesmotivasi*
│⦿ 💔 *${prefix}quotesgalau*
│⦿ 💘 *${prefix}quotesgombal*
│⦿ 💻 *${prefix}quoteshacker*
│⦿ 💡 *${prefix}quotesbijak*
◣──────────❈`}

global.jashermenu = (prefix) => {
return`╭── • 🛠️ *JASHER* • ──╮
┃
│⦿ ➕ *${prefix}addid*
│⦿ 🗑️ *${prefix}delid*
│⦿ 📜 *${prefix}listid*
│⦿ ⚡ *${prefix}addhyd (Own JS)*
│⦿ ⚡ *${prefix}addalya (PT JS)*
│⦿ 📢 *${prefix}jpmch*
◣──────────❈`}

global.storemenu = (prefix) => {
return`╭── • 🏪 *STORE* • ──╮
┃
│⦿ 📜 *${prefix}list*
│⦿ ➕ *${prefix}addlist*
│⦿ 🗑️ *${prefix}dellist*
│⦿ 🔄 *${prefix}update*
│⦿ ⏳ *${prefix}jeda*
│⦿ ➕ *${prefix}tambah*
│⦿ ➖ *${prefix}kurang*
│⦿ ✖️ *${prefix}kali*
│⦿ ➗ *${prefix}bagi*
│⦿ 🗑️ *${prefix}delsetdone*
│⦿ 🔄 *${prefix}changedone*
│⦿ ⚙️ *${prefix}setdone*
│⦿ 🗑️ *${prefix}delproses*
│⦿ 🔄 *${prefix}changeproses*
│⦿ ⚙️ *${prefix}setproses*
│⦿ ⏳ *${prefix}proses*
│⦿ ✅ *${prefix}done*
◣──────────❈`}

global.nsfwmenu = (prefix) => {
return`╭── • 🔞 *ANIME NSFW* • ──╮
┃
│⦿ 🔞 *${prefix}hentai*
│⦿ 🎞️ *${prefix}gifhentai*
│⦿ 🎞️ *${prefix}gifblowjob*
│⦿ 🎥 *${prefix}hentaivid*
│⦿ 🔞 *${prefix}hneko*
│⦿ 🔞 *${prefix}nwaifu*
│⦿ 👋 *${prefix}animespank*
│⦿ 🔞 *${prefix}trap*
│⦿ 🔞 *${prefix}gasm*
│⦿ 🔞 *${prefix}ahegao*
│⦿ 🔞 *${prefix}ass*
│⦿ 🔞 *${prefix}bdsm*
│⦿ 🔞 *${prefix}blowjob*
│⦿ 🔞 *${prefix}cuckold*
│⦿ 🔞 *${prefix}cum*
│⦿ 🔞 *${prefix}milf*
│⦿ 🔞 *${prefix}eba*
│⦿ 🔞 *${prefix}ero*
│⦿ 🔞 *${prefix}femdom*
│⦿ 🔞 *${prefix}foot*
│⦿ 🔞 *${prefix}gangbang*
│⦿ 🔞 *${prefix}glasses*
│⦿ 🔞 *${prefix}jahy*
│⦿ 🔞 *${prefix}masturbation*
│⦿ 🔍 *${prefix}mangasearch*
│⦿ 🔞 *${prefix}neko-hentai*
│⦿ 🔞 *${prefix}neko-hentai2*
│⦿ 👧 *${prefix}nsfwloli*
│⦿ 🔞 *${prefix}orgy*
│⦿ 🔞 *${prefix}panties*
│⦿ 🔞 *${prefix}pussy*
│⦿ 🔞 *${prefix}tentacles*
│⦿ 🔞 *${prefix}thighs*
│⦿ 👩‍❤️‍👩 *${prefix}yuri*
│⦿ 🔞 *${prefix}zettai*
│⦿ 🔍 *${prefix}xnxxsearch*
│⦿ 📥 *${prefix}xnxxdl*
◣──────────❈`}

global.anonymousmenu = (prefix) => {
return`╭── • 🕵️ *ANONYMOUS* • ──╮
┃
│⦿ 💬 *${prefix}anonymouschat*
│⦿ 🏁 *${prefix}start*
│⦿ ⏩ *${prefix}next*
│⦿ 🛑 *${prefix}stop*
│⦿ 👤 *${prefix}sendprofile*
│⦿ 📩 *${prefix}menfess*
│⦿ 📩 *${prefix}confess*
│⦿ 📩 *${prefix}balasmenfess*
│⦿ 🛑 *${prefix}tolakmenfess*
│⦿ 🛑 *${prefix}stopmenfess*
◣──────────❈`}

global.pushmenu = (prefix) => {
return`╭── • 🚀 *PUSH MENU* • ──╮
┃
│⦿ 🆔 *${prefix}cekidgc*
│⦿ 📱 *${prefix}pushkontak*
│⦿ 📱 *${prefix}pushkontakv2*
│⦿ 📱 *${prefix}pushkontakv3*
│⦿ 📱 *${prefix}pushkontakv4*
│⦿ 📁 *${prefix}savekontakv*
│⦿ 📁 *${prefix}savekontakv2*
│⦿ 📥 *${prefix}getkontak*
│⦿ 📤 *${prefix}sendkontak*
│⦿ 📢 *${prefix}jpm*
│⦿ 📢 *${prefix}jpm2*
◣──────────❈`}

global.cpanelmenu = (prefix) => {
return`╭── • 🌐 *CPANEL* • ──╮
┃
│⦿ 🌐 *${prefix}panel*
│⦿ 👤 *${prefix}listusr*
│⦿ 🗑️ *${prefix}delusr*
│⦿ 🖥️ *${prefix}listsrv*
│⦿ 🗑️ *${prefix}delsrv*
│⦿ 📖 *${prefix}tutorial*
│⦿ 📊 *${prefix}ramlist*
│⦿ 💎 *${prefix}premlist*
│⦿ ➕ *${prefix}addusr*
│⦿ 🏗️ *${prefix}addsrv*
│⦿ 🔄 *${prefix}updatesrv*
│⦿ 🛑 *${prefix}suspend*
│⦿ 🔓 *${prefix}unsuspend*
│⦿ 👑 *${prefix}createadmin*
│⦿ 📜 *${prefix}listadmin*
◣──────────❈`}

global.bugmenu = (prefix) => {
return`╭── • 💣 *BUG WAR* • ──╮
┃
│⦿ 💣 *${prefix}forcealya*
│⦿ 💣 *${prefix}alyacrash*
│⦿ 💣 *${prefix}alyadozer*
│⦿ 💣 *${prefix}alyafreez*
◣──────────❈`}

global.randomphotomenu = (prefix) => {
return`╭── • 📸 *RANDOM PHOTO* • ──╮
┃
│⦿ 🎨 *${prefix}aesthetic*
│⦿ ☕ *${prefix}coffee*
│⦿ 🌐 *${prefix}wikimedia*
│⦿ 🖼️ *${prefix}wallpaper*
│⦿ 🎨 *${prefix}art*
│⦿ 🎤 *${prefix}bts*
│⦿ 🐶 *${prefix}dogwoof*
│⦿ 🐱 *${prefix}catmeow*
│⦿ 🦎 *${prefix}lizardpic*
│⦿ 🦢 *${prefix}goosebird*
│⦿ 🎱 *${prefix}8ballpool*
│⦿ 🎭 *${prefix}cosplay*
│⦿ 💻 *${prefix}hacker*
│⦿ 🖥️ *${prefix}cyber*
│⦿ 🎮 *${prefix}gamewallpaper*
│⦿ 🕋 *${prefix}islamic*
│⦿ 🎤 *${prefix}jennie*
│⦿ 🎤 *${prefix}jiso*
│⦿ 🌑 *${prefix}satanic*
│⦿ 🎤 *${prefix}justina*
│⦿ 🎨 *${prefix}cartoon*
│⦿ 🎨 *${prefix}pentol*
│⦿ 🐱 *${prefix}cat*
│⦿ 🎤 *${prefix}kpop*
│⦿ 🎤 *${prefix}exo*
│⦿ 🎤 *${prefix}lisa*
│⦿ 🌌 *${prefix}space*
│⦿ 🏎️ *${prefix}car*
│⦿ 💻 *${prefix}technology*
│⦿ 🏍️ *${prefix}bike*
│⦿ 📜 *${prefix}shortquote*
│⦿ 👷 *${prefix}antiwork*
│⦿ 💻 *${prefix}hacking*
│⦿ 🧸 *${prefix}boneka*
│⦿ 🌹 *${prefix}rose*
│⦿ 🎤 *${prefix}ryujin*
│⦿ 👦 *${prefix}ulzzangboy*
│⦿ 👧 *${prefix}ulzzanggirl*
│⦿ 🎮 *${prefix}wallml*
│⦿ 📱 *${prefix}wallphone*
│⦿ ⛰️ *${prefix}mountain*
│⦿ 🦢 *${prefix}goose*
│⦿ 👤 *${prefix}profilepic*
│⦿ 👩‍❤️‍👨 *${prefix}couplepic*
│⦿ 💻 *${prefix}programming*
│⦿ 🔫 *${prefix}pubg*
│⦿ 🎤 *${prefix}blackpink*
│⦿ 👦 *${prefix}randomboy*
│⦿ 👧 *${prefix}randomgirl*
│⦿ 🧕 *${prefix}tiktokhijab*
│⦿ 🇨🇳 *${prefix}chinese*
│⦿ 🇮🇩 *${prefix}indo*
│⦿ 🇯🇵 *${prefix}japanese*
│⦿ 🇰🇷 *${prefix}korean*
│⦿ 🇲🇾 *${prefix}malay*
│⦿ 🇹🇭 *${prefix}thai*
│⦿ 🇻🇳 *${prefix}vietnamese*
◣──────────❈`}

global.randomvideomenu = (prefix) => {
return`╭── • 🎥 *RANDOM VIDEO* • ──╮
┃
│⦿ 👧 *${prefix}tiktokgirl*
│⦿ 👧 *${prefix}tiktoknukthy*
│⦿ 👧 *${prefix}tiktokkayes*
│⦿ 👧 *${prefix}tiktokpanrika*
│⦿ 👧 *${prefix}tiktoknotnot*
│⦿ 👧 *${prefix}tiktokghea*
│⦿ 👧 *${prefix}tiktoksantuy*
│⦿ 👧 *${prefix}tiktokbocil*
◣──────────❈`}

global.primbonmenu = (prefix) => {
return `╭── • 🔮 *PRIMBON* • ──╮
┃
│⦿ 🔮 *${prefix}artimimpi*
│⦿ 🔮 *${prefix}artinama*
│⦿ 🔮 *${prefix}ramaljodoh*
│⦿ 🔮 *${prefix}ramaljodohbali*
│⦿ 🔮 *${prefix}suamiistri*
│⦿ 🔮 *${prefix}ramalcinta*
│⦿ 🔮 *${prefix}cocoknama*
│⦿ 🔮 *${prefix}pasangan*
│⦿ 🔮 *${prefix}jadiannikah*
│⦿ 🔮 *${prefix}sifatusaha*
│⦿ 🔮 *${prefix}rezeki*
│⦿ 🔮 *${prefix}pekerjaan*
│⦿ 🔮 *${prefix}nasib*
│⦿ 🔮 *${prefix}penyakit*
│⦿ 🔮 *${prefix}tarot*
│⦿ 🔮 *${prefix}fengshui*
│⦿ 🔮 *${prefix}haribaik*
│⦿ 🔮 *${prefix}harisangar*
│⦿ 🔮 *${prefix}harisial*
│⦿ 🔮 *${prefix}nagahari*
│⦿ 🔮 *${prefix}arahrezeki*
│⦿ 🔮 *${prefix}peruntungan*
│⦿ 🔮 *${prefix}weton*
│⦿ 🔮 *${prefix}karakter*
│⦿ 🔮 *${prefix}keberuntungan*
│⦿ 🔮 *${prefix}memancing*
│⦿ 🔮 *${prefix}masasubur*
│⦿ 🔮 *${prefix}zodiak*
│⦿ 🔮 *${prefix}shio*
◣──────────❈`}

global.beritamenu = (prefix) => {
return `╭── • 📰 *BERITA* • ──╮
┃
│⦿ ⚽ *${prefix}beritabola*
│⦿ 📰 *${prefix}fajar*
│⦿ 📺 *${prefix}cnn*
│⦿ 🎬 *${prefix}layarkaca*
│⦿ 📈 *${prefix}cnbc*
│⦿ 📰 *${prefix}tribun*
│⦿ 📰 *${prefix}indozone*
│⦿ 📰 *${prefix}kompas*
│⦿ 📰 *${prefix}detiknews*
│⦿ 📰 *${prefix}dailynews*
│⦿ 📺 *${prefix}inews*
│⦿ 📰 *${prefix}okezone*
│⦿ 📰 *${prefix}sindo*
│⦿ 📰 *${prefix}tempo*
│⦿ 📰 *${prefix}antara*
│⦿ 📰 *${prefix}kontan*
│⦿ 📰 *${prefix}merdeka*
│⦿ 📱 *${prefix}jalantikus*
◣──────────❈`}

global.islamimenu= (prefix) => {
return`╭── • 🌙 *ISLAMI* • ──╮
┃
│⦿ 🕌 *${prefix}kisahnabi*
│⦿ 🕌 *${prefix}asmaulhusna*
│⦿ 🕌 *${prefix}bacaansholat*
│⦿ 🎧 *${prefix}audiosurah*
│⦿ 🕌 *${prefix}ayatkursi*
│⦿ 🕌 *${prefix}doaharian*
│⦿ 🕌 *${prefix}niatsholat*
│⦿ 📜 *${prefix}quotesislami*
│⦿ 🕌 *${prefix}doatahlil*
│⦿ 📖 *${prefix}alquran*
│⦿ ⏳ *${prefix}jadwalsholat*
◣──────────❈`}

global.ephoto360menu = (prefix) => {
return`╭── • 🎨 *EPHOTO 360* • ──╮
┃
│⦿ 🎨 *${prefix}glitchtext*
│⦿ 🎨 *${prefix}writetext*
│⦿ 🎨 *${prefix}advancedglow*
│⦿ 🎨 *${prefix}typographytext*
│⦿ 🎨 *${prefix}pixelglitch*
│⦿ 🎨 *${prefix}neonglitch*
│⦿ 🎨 *${prefix}flagtext*
│⦿ 🎨 *${prefix}flag3dtext*
│⦿ 🎨 *${prefix}deletingtext*
│⦿ 🎨 *${prefix}blackpinkstyle*
│⦿ 🎨 *${prefix}glowingtext*
│⦿ 🎨 *${prefix}underwatertext*
│⦿ 🎨 *${prefix}logomaker*
│⦿ 🎨 *${prefix}cartoonstyle*
│⦿ 🎨 *${prefix}papercutstyle*
│⦿ 🎨 *${prefix}watercolortext*
│⦿ 🎨 *${prefix}effectclouds*
│⦿ 🎨 *${prefix}blackpinklogo*
│⦿ 🎨 *${prefix}gradienttext*
│⦿ 🎨 *${prefix}summerbeach*
│⦿ 🎨 *${prefix}luxurygold*
│⦿ 🎨 *${prefix}multicoloredneon*
│⦿ 🎨 *${prefix}sandsummer*
│⦿ 🎨 *${prefix}galaxywallpaper*
│⦿ 🎨 *${prefix}1917style*
│⦿ 🎨 *${prefix}makingneon*
│⦿ 🎨 *${prefix}royaltext*
│⦿ 🎨 *${prefix}freecreate*
│⦿ 🎨 *${prefix}galaxystyle*
│⦿ 🎨 *${prefix}lighteffects*
◣──────────❈`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
