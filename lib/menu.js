const chalk = require('chalk');
const fs = require('fs');

global.Menu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. 📌 *MAIN MENU* ໒ ֵ ׄ
┃ お ─· ${p}allmenu
┃ お ─· ${p}ownermenu
┃ お ─· ${p}groupmenu
┃ お ─· ${p}searchmenu
┃ お ─· ${p}downloadmenu
┃ お ─· ${p}convertmenu
┃ お ─· ${p}gamemenu
┃ お ─· ${p}funmenu
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. 🌟 *ADDITIONAL MENU* ໒ ֵ ׄ
┃ お ─· ${p}randomanimemenu
┃ お ─· ${p}bugmenu
┃ お ─· ${p}rpgmenu
┃ お ─· ${p}othermenu
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. 🔒 *SPECIAL MENU* ໒ ֵ ׄ
┃ お ─· ${p}privacymenu
┃ お ─· ${p}newslettermenu
┃ お ─· ${p}aimenu
╰──────────── •`}

global.allMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}add
┃ ⌬ ─· ${p}addlist
┃ ⌬ ─· ${p}adminevent
┃ ⌬ ─· ${p}afk
┃ ⌬ ─· ${p}antiaudio
┃ ⌬ ─· ${p}antibadword
┃ ⌬ ─· ${p}anticontact
┃ ⌬ ─· ${p}antidocument
┃ ⌬ ─· ${p}antiforeign
┃ ⌬ ─· ${p}antiimage
┃ ⌬ ─· ${p}antilink
┃ ⌬ ─· ${p}antilinkgc
┃ ⌬ ─· ${p}antilocation
┃ ⌬ ─· ${p}antimedia
┃ ⌬ ─· ${p}antispam
┃ ⌬ ─· ${p}antisticker
┃ ⌬ ─· ${p}antivideo
┃ ⌬ ─· ${p}antiviewonce
┃ ⌬ ─· ${p}ceklist
┃ ⌬ ─· ${p}contacttag
┃ ⌬ ─· ${p}deleteppgc
┃ ⌬ ─· ${p}dellist
┃ ⌬ ─· ${p}demote
┃ ⌬ ─· ${p}editinfo
┃ ⌬ ─· ${p}getcontact
┃ ⌬ ─· ${p}group
┃ ⌬ ─· ${p}groupevent
┃ ⌬ ─· ${p}groupinfo
┃ ⌬ ─· ${p}hidetag
┃ ⌬ ─· ${p}kick
┃ ⌬ ─· ${p}left
┃ ⌬ ─· ${p}linkgc
┃ ⌬ ─· ${p}listonline
┃ ⌬ ─· ${p}mute
┃ ⌬ ─· ${p}nsfw
┃ ⌬ ─· ${p}promote
┃ ⌬ ─· ${p}pushcontact
┃ ⌬ ─· ${p}resetlink
┃ ⌬ ─· ${p}savecontact
┃ ⌬ ─· ${p}sendcontact
┃ ⌬ ─· ${p}setdesk
┃ ⌬ ─· ${p}setnamegc
┃ ⌬ ─· ${p}setppgc
┃ ⌬ ─· ${p}tagall
┃ ⌬ ─· ${p}welcome
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}anime
┃ ⌬ ─· ${p}bukalapak
┃ ⌬ ─· ${p}happymod
┃ ⌬ ─· ${p}imdb
┃ ⌬ ─· ${p}jkt48news
┃ ⌬ ─· ${p}kusonimeinfo
┃ ⌬ ─· ${p}kusonimesearch
┃ ⌬ ─· ${p}lyrics
┃ ⌬ ─· ${p}mangadetail
┃ ⌬ ─· ${p}mangainfo
┃ ⌬ ─· ${p}otakudesu
┃ ⌬ ─· ${p}pinterest
┃ ⌬ ─· ${p}playstore
┃ ⌬ ─· ${p}presetam
┃ ⌬ ─· ${p}ringtone
┃ ⌬ ─· ${p}soundcloud
┃ ⌬ ─· ${p}tiktoksearch
┃ ⌬ ─· ${p}traceanime
┃ ⌬ ─· ${p}umma
┃ ⌬ ─· ${p}wallpaper
┃ ⌬ ─· ${p}weather
┃ ⌬ ─· ${p}wikimedia
┃ ⌬ ─· ${p}wikipedia
┃ ⌬ ─· ${p}ytsearch

╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}facebook
┃ ⌬ ─· ${p}fdown
┃ ⌬ ─· ${p}gitclone
┃ ⌬ ─· ${p}gdrive
┃ ⌬ ─· ${p}instagram
┃ ⌬ ─· ${p}mediafire
┃ ⌬ ─· ${p}play
┃ ⌬ ─· ${p}savepin
┃ ⌬ ─· ${p}tiktokmp3
┃ ⌬ ─· ${p}tiktokmp4
┃ ⌬ ─· ${p}tiktokslide
┃ ⌬ ─· ${p}ytaudio
┃ ⌬ ─· ${p}ytvideo
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *TOOLS* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}blurface  
┃ ⌬ ─· ${p}brat  
┃ ⌬ ─· ${p}delwatermark  
┃ ⌬ ─· ${p}faceswap  
┃ ⌬ ─· ${p}fetch  
┃ ⌬ ─· ${p}hitamkan  
┃ ⌬ ─· ${p}qc  
┃ ⌬ ─· ${p}remini  
┃ ⌬ ─· ${p}removebg  
┃ ⌬ ─· ${p}ssweb  
┃ ⌬ ─· ${p}sticker  
┃ ⌬ ─· ${p}swm  
┃ ⌬ ─· ${p}toanime  
┃ ⌬ ─· ${p}toaudio  
┃ ⌬ ─· ${p}tohijab  
┃ ⌬ ─· ${p}toimage  
┃ ⌬ ─· ${p}toghibli  
┃ ⌬ ─· ${p}tourl  
┃ ⌬ ─· ${p}upscale  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *TOOLS Song ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}bass
┃ ⌬ ─· ${p}blown
┃ ⌬ ─· ${p}deep
┃ ⌬ ─· ${p}earrape
┃ ⌬ ─· ${p}fast
┃ ⌬ ─· ${p}fat
┃ ⌬ ─· ${p}nightcore
┃ ⌬ ─· ${p}reverse
┃ ⌬ ─· ${p}robot
┃ ⌬ ─· ${p}slow
┃ ⌬ ─· ${p}smooth
┃ ⌬ ─· ${p}squirrel
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}asahotak  
┃ ⌬ ─· ${p}lengkapikalimat  
┃ ⌬ ─· ${p}tebakaplikasi  
┃ ⌬ ─· ${p}tebakbendera  
┃ ⌬ ─· ${p}tebakchara  
┃ ⌬ ─· ${p}tebakff  
┃ ⌬ ─· ${p}tebakgame  
┃ ⌬ ─· ${p}tebakgambar  
┃ ⌬ ─· ${p}tebakhewan  
┃ ⌬ ─· ${p}tebakhero  
┃ ⌬ ─· ${p}tebakjkt48  
┃ ⌬ ─· ${p}tebakkabupaten  
┃ ⌬ ─· ${p}tebakkalimat  
┃ ⌬ ─· ${p}tebakkata  
┃ ⌬ ─· ${p}tebakkimia  
┃ ⌬ ─· ${p}tebaklirik  
┃ ⌬ ─· ${p}tebaklogo  
┃ ⌬ ─· ${p}tebakml  
┃ ⌬ ─· ${p}tebaksiapa  
┃ ⌬ ─· ${p}tebaktebakan  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}apakah  
┃ ⌬ ─· ${p}bagaimana  
┃ ⌬ ─· ${p}bisakah  
┃ ⌬ ─· ${p}cekcantik  
┃ ⌬ ─· ${p}cekganteng  
┃ ⌬ ─· ${p}cekimut  
┃ ⌬ ─· ${p}cekjomok  
┃ ⌬ ─· ${p}cekkpribadian  
┃ ⌬ ─· ${p}cekmasadepan  
┃ ⌬ ─· ${p}cekwaifu  
┃ ⌬ ─· ${p}checkme  
┃ ⌬ ─· ${p}couple  
┃ ⌬ ─· ${p}dare  
┃ ⌬ ─· ${p}dimana  
┃ ⌬ ─· ${p}faktaunik  
┃ ⌬ ─· ${p}faktakucing  
┃ ⌬ ─· ${p}joke  
┃ ⌬ ─· ${p}kapankah  
┃ ⌬ ─· ${p}mitos  
┃ ⌬ ─· ${p}quotesgalau  
┃ ⌬ ─· ${p}rate  
┃ ⌬ ─· ${p}soulmate  
┃ ⌬ ─· ${p}suit  
┃ ⌬ ─· ${p}truth  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}xandroid
┃ ⌬ ─· ${p}xandroid2
┃ ⌬ ─· ${p}xgc
┃ ⌬ ─· ${p}xios
┃ ⌬ ─· ${p}xios2
┃ ⌬ ─· ${p}systemuicrash
┃ ⌬ ─· ${p}xsysui
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}adventure  
┃ ⌬ ─· ${p}beli  
┃ ⌬ ─· ${p}berburu  
┃ ⌬ ─· ${p}berlayar  
┃ ⌬ ─· ${p}crafting  
┃ ⌬ ─· ${p}daily  
┃ ⌬ ─· ${p}heal  
┃ ⌬ ─· ${p}inventory  
┃ ⌬ ─· ${p}joinrpg  
┃ ⌬ ─· ${p}jual  
┃ ⌬ ─· ${p}kerja  
┃ ⌬ ─· ${p}memancing  
┃ ⌬ ─· ${p}merampok  
┃ ⌬ ─· ${p}mining  
┃ ⌬ ─· ${p}nebang  
┃ ⌬ ─· ${p}redeem  
┃ ⌬ ─· ${p}redeemdel  
┃ ⌬ ─· ${p}redeemset  
┃ ⌬ ─· ${p}repair  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ ⌬ ─· ${p}setcallprivacy
┃ ⌬ ─· ${p}setlastprivacy
┃ ⌬ ─· ${p}setonlineprivacy
┃ ⌬ ─· ${p}setprofileprivacy
┃ ⌬ ─· ${p}setreadreceiptsprivacy
┃ ⌬ ─· ${p}setreactionmode
┃ ⌬ ─· ${p}setstatusprivacy
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ ⌬ ─· ${p}setnewsletterdesc
┃ ⌬ ─· ${p}setnewslettername
┃ ⌬ ─· ${p}setnewsletterpic
┃ ⌬ ─· ${p}follownewsletter
┃ ⌬ ─· ${p}unfollownewsletter
┃ ⌬ ─· ${p}mutenewsletter
┃ ⌬ ─· ${p}unmutenewsletter
┃ ⌬ ─· ${p}createnewsletter
┃ ⌬ ─· ${p}newsletterinfo
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}aiscan  
┃ ⌬ ─· ${p}aishepherd  
┃ ⌬ ─· ${p}bardai  
┃ ⌬ ─· ${p}bibleai  
┃ ⌬ ─· ${p}blackboxai  
┃ ⌬ ─· ${p}blackboxai-pro  
┃ ⌬ ─· ${p}claude-sonnet  
┃ ⌬ ─· ${p}claudeai  
┃ ⌬ ─· ${p}dbrx-instruct  
┃ ⌬ ─· ${p}deepseek  
┃ ⌬ ─· ${p}deepseek-llm  
┃ ⌬ ─· ${p}dreamshaper  
┃ ⌬ ─· ${p}felo  
┃ ⌬ ─· ${p}flux  
┃ ⌬ ─· ${p}gandalf  
┃ ⌬ ─· ${p}gemini  
┃ ⌬ ─· ${p}gemini-pro  
┃ ⌬ ─· ${p}gemma  
┃ ⌬ ─· ${p}gita  
┃ ⌬ ─· ${p}gpt3  
┃ ⌬ ─· ${p}jokoai  
┃ ⌬ ─· ${p}metaai  
┃ ⌬ ─· ${p}mistral7b  
┃ ⌬ ─· ${p}muslimai  
┃ ⌬ ─· ${p}naw  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}addsubdo  
┃ ⌬ ─· ${p}country  
┃ ⌬ ─· ${p}daftar  
┃ ⌬ ─· ${p}delSubdo  
┃ ⌬ ─· ${p}dns  
┃ ⌬ ─· ${p}donate  
┃ ⌬ ─· ${p}gempa  
┃ ⌬ ─· ${p}githubstalk  
┃ ⌬ ─· ${p}infobot  
┃ ⌬ ─· ${p}ipwhois  
┃ ⌬ ─· ${p}jadibot  
┃ ⌬ ─· ${p}listjadibot  
┃ ⌬ ─· ${p}listsubdo  
┃ ⌬ ─· ${p}mlstalk  
┃ ⌬ ─· ${p}npmstalk  
┃ ⌬ ─· ${p}otakudesu  
┃ ⌬ ─· ${p}owner  
┃ ⌬ ─· ${p}ping  
┃ ⌬ ─· ${p}quotesanime  
┃ ⌬ ─· ${p}repository  
┃ ⌬ ─· ${p}runtime  
┃ ⌬ ─· ${p}script  
┃ ⌬ ─· ${p}speedtest  
┃ ⌬ ─· ${p}stopjadibot  
┃ ⌬ ─· ${p}unreg  
╰──────────── •
`}

global.ownerMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OWNER MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}addaudio  
┃ ⌬ ─· ${p}addbadword  
┃ ⌬ ─· ${p}addimage  
┃ ⌬ ─· ${p}addlimit  
┃ ⌬ ─· ${p}addlist  
┃ ⌬ ─· ${p}addowner  
┃ ⌬ ─· ${p}addpremium  
┃ ⌬ ─· ${p}addsticker  
┃ ⌬ ─· ${p}addtitle  
┃ ⌬ ─· ${p}adduang  
┃ ⌬ ─· ${p}addvideo  
┃ ⌬ ─· ${p}anticall  
┃ ⌬ ─· ${p}autobio  
┃ ⌬ ─· ${p}autoblock  
┃ ⌬ ─· ${p}autodownload  
┃ ⌬ ─· ${p}autoread  
┃ ⌬ ─· ${p}autorecord  
┃ ⌬ ─· ${p}autorecordtype  
┃ ⌬ ─· ${p}autosticker  
┃ ⌬ ─· ${p}autotype  
┃ ⌬ ─· ${p}autoswview  
┃ ⌬ ─· ${p}backup  
┃ ⌬ ─· ${p}ban  
┃ ⌬ ─· ${p}ceklist  
┃ ⌬ ─· ${p}clearmedia  
┃ ⌬ ─· ${p}clearsession  
┃ ⌬ ─· ${p}contacttag  
┃ ⌬ ─· ${p}creategc  
┃ ⌬ ─· ${p}delaudio  
┃ ⌬ ─· ${p}delbadword  
┃ ⌬ ─· ${p}delimage  
┃ ⌬ ─· ${p}dellimit  
┃ ⌬ ─· ${p}dellist  
┃ ⌬ ─· ${p}delowner  
┃ ⌬ ─· ${p}delpremium  
┃ ⌬ ─· ${p}delsticker  
┃ ⌬ ─· ${p}deltitle  
┃ ⌬ ─· ${p}deluang  
┃ ⌬ ─· ${p}delvideo  
┃ ⌬ ─· ${p}getcase  
┃ ⌬ ─· ${p}getcontact  
┃ ⌬ ─· ${p}getsession  
┃ ⌬ ─· ${p}joingroup  
┃ ⌬ ─· ${p}joinchannel  
┃ ⌬ ─· ${p}kill  
┃ ⌬ ─· ${p}listaudio  
┃ ⌬ ─· ${p}listbadword  
┃ ⌬ ─· ${p}listgc  
┃ ⌬ ─· ${p}listimage  
┃ ⌬ ─· ${p}listpc  
┃ ⌬ ─· ${p}listpremium  
┃ ⌬ ─· ${p}liststicker  
┃ ⌬ ─· ${p}listvideo  
┃ ⌬ ─· ${p}onlygc  
┃ ⌬ ─· ${p}onlypc  
┃ ⌬ ─· ${p}outchannel  
┃ ⌬ ─· ${p}outgroup  
┃ ⌬ ─· ${p}public  
┃ ⌬ ─· ${p}pushcontact  
┃ ⌬ ─· ${p}resetdbmoney  
┃ ⌬ ─· ${p}resetdblimit  
┃ ⌬ ─· ${p}resetdbuser  
┃ ⌬ ─· ${p}resethit  
┃ ⌬ ─· ${p}resetlimit  
┃ ⌬ ─· ${p}resetuang  
┃ ⌬ ─· ${p}restart  
┃ ⌬ ─· ${p}safesearch  
┃ ⌬ ─· ${p}savecontact  
┃ ⌬ ─· ${p}self  
┃ ⌬ ─· ${p}sendcontact  
┃ ⌬ ─· ${p}setantiforeign  
┃ ⌬ ─· ${p}setautoblock  
┃ ⌬ ─· ${p}setbiobot  
┃ ⌬ ─· ${p}setexif  
┃ ⌬ ─· ${p}setimgmenu  
┃ ⌬ ─· ${p}setmenu  
┃ ⌬ ─· ${p}setp  
┃ ⌬ ─· ${p}setppbot  
┃ ⌬ ─· ${p}setreply  
┃ ⌬ ─· ${p}setvidmenu  
┃ ⌬ ─· ${p}shutdown  
┃ ⌬ ─· ${p}statustext  
┃ ⌬ ─· ${p}statusaudio  
┃ ⌬ ─· ${p}statusimage  
┃ ⌬ ─· ${p}statusvideo  
┃ ⌬ ─· ${p}unavailable  
┃ ⌬ ─· ${p}unban  
┃ ⌬ ─· ${p}upsaluran
╰──────────── •
`}

global.groupMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}add
┃ ⌬ ─· ${p}addlist
┃ ⌬ ─· ${p}adminevent
┃ ⌬ ─· ${p}afk
┃ ⌬ ─· ${p}antiaudio
┃ ⌬ ─· ${p}antibadword
┃ ⌬ ─· ${p}anticontact
┃ ⌬ ─· ${p}antidocument
┃ ⌬ ─· ${p}antiforeign
┃ ⌬ ─· ${p}antiimage
┃ ⌬ ─· ${p}antilink
┃ ⌬ ─· ${p}antilinkgc
┃ ⌬ ─· ${p}antilocation
┃ ⌬ ─· ${p}antimedia
┃ ⌬ ─· ${p}antispam
┃ ⌬ ─· ${p}antisticker
┃ ⌬ ─· ${p}antivideo
┃ ⌬ ─· ${p}antiviewonce
┃ ⌬ ─· ${p}ceklist
┃ ⌬ ─· ${p}contacttag
┃ ⌬ ─· ${p}deleteppgc
┃ ⌬ ─· ${p}dellist
┃ ⌬ ─· ${p}demote
┃ ⌬ ─· ${p}editinfo
┃ ⌬ ─· ${p}getcontact
┃ ⌬ ─· ${p}group
┃ ⌬ ─· ${p}groupevent
┃ ⌬ ─· ${p}groupinfo
┃ ⌬ ─· ${p}hidetag
┃ ⌬ ─· ${p}kick
┃ ⌬ ─· ${p}left
┃ ⌬ ─· ${p}linkgc
┃ ⌬ ─· ${p}listonline
┃ ⌬ ─· ${p}mute
┃ ⌬ ─· ${p}nsfw
┃ ⌬ ─· ${p}promote
┃ ⌬ ─· ${p}pushcontact
┃ ⌬ ─· ${p}resetlink
┃ ⌬ ─· ${p}savecontact
┃ ⌬ ─· ${p}sendcontact
┃ ⌬ ─· ${p}setdesk
┃ ⌬ ─· ${p}setnamegc
┃ ⌬ ─· ${p}setppgc
┃ ⌬ ─· ${p}tagall
┃ ⌬ ─· ${p}welcome
╰──────────── •
`}

global.searchMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}anime
┃ ⌬ ─· ${p}bukalapak
┃ ⌬ ─· ${p}happymod
┃ ⌬ ─· ${p}imdb
┃ ⌬ ─· ${p}jkt48news
┃ ⌬ ─· ${p}kusonimeinfo
┃ ⌬ ─· ${p}kusonimesearch
┃ ⌬ ─· ${p}lyrics
┃ ⌬ ─· ${p}mangadetail
┃ ⌬ ─· ${p}mangainfo
┃ ⌬ ─· ${p}otakudesu
┃ ⌬ ─· ${p}pinterest
┃ ⌬ ─· ${p}playstore
┃ ⌬ ─· ${p}presetam
┃ ⌬ ─· ${p}ringtone
┃ ⌬ ─· ${p}soundcloud
┃ ⌬ ─· ${p}tiktoksearch
┃ ⌬ ─· ${p}traceanime
┃ ⌬ ─· ${p}umma
┃ ⌬ ─· ${p}wallpaper
┃ ⌬ ─· ${p}weather
┃ ⌬ ─· ${p}wikimedia
┃ ⌬ ─· ${p}wikipedia
┃ ⌬ ─· ${p}ytsearch
╰──────────── •
`}

global.downloadMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}facebook
┃ ⌬ ─· ${p}fdown
┃ ⌬ ─· ${p}gitclone
┃ ⌬ ─· ${p}gdrive
┃ ⌬ ─· ${p}instagram
┃ ⌬ ─· ${p}mediafire
┃ ⌬ ─· ${p}play
┃ ⌬ ─· ${p}savepin
┃ ⌬ ─· ${p}tiktokmp3
┃ ⌬ ─· ${p}tiktokmp4
┃ ⌬ ─· ${p}tiktokslide
┃ ⌬ ─· ${p}ytaudio
┃ ⌬ ─· ${p}ytvideo
╰──────────── •
`}

global.toolsMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *TOOLS* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}blurface  
┃ ⌬ ─· ${p}brat  
┃ ⌬ ─· ${p}delwatermark  
┃ ⌬ ─· ${p}faceswap  
┃ ⌬ ─· ${p}fetch  
┃ ⌬ ─· ${p}hitamkan  
┃ ⌬ ─· ${p}qc  
┃ ⌬ ─· ${p}remini  
┃ ⌬ ─· ${p}removebg  
┃ ⌬ ─· ${p}ssweb  
┃ ⌬ ─· ${p}sticker  
┃ ⌬ ─· ${p}swm  
┃ ⌬ ─· ${p}toanime  
┃ ⌬ ─· ${p}toaudio  
┃ ⌬ ─· ${p}tohijab  
┃ ⌬ ─· ${p}toimage  
┃ ⌬ ─· ${p}toghibli  
┃ ⌬ ─· ${p}tourl  
┃ ⌬ ─· ${p}upscale  
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *TOOLS Song ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}bass
┃ ⌬ ─· ${p}blown
┃ ⌬ ─· ${p}deep
┃ ⌬ ─· ${p}earrape
┃ ⌬ ─· ${p}fast
┃ ⌬ ─· ${p}fat
┃ ⌬ ─· ${p}nightcore
┃ ⌬ ─· ${p}reverse
┃ ⌬ ─· ${p}robot
┃ ⌬ ─· ${p}slow
┃ ⌬ ─· ${p}smooth
┃ ⌬ ─· ${p}squirrel
╰──────────── •
`}

global.storeMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *STORE MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}updatelist
┃ ⌬ ─· ${p}jpm
┃ ⌬ ─· ${p}jpm2
┃ ⌬ ─· ${p}addlist
┃ ⌬ ─· ${p}dellist
┃ ⌬ ─· ${p}store
┃ ⌬ ─· ${p}list
┃ ⌬ ─· ${p}bagi
┃ ⌬ ─· ${p}kali
┃ ⌬ ─· ${p}kurang
┃ ⌬ ─· ${p}tambah
╰──────────── •
`}

global.panelMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *PANEL MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}addserver
┃ ⌬ ─· ${p}adduser
┃ ⌬ ─· ${p}listserver
┃ ⌬ ─· ${p}listuser
┃ ⌬ ─· ${p}adduseradmin
┃ ⌬ ─· ${p}restartserver
┃ ⌬ ─· ${p}stopserver
┃ ⌬ ─· ${p}startserver
┃ ⌬ ─· ${p}deluser
┃ ⌬ ─· ${p}delserver
┃ ⌬ ─· ${p}1gb ~ 50gb
┃ ⌬ ─· ${p}unli
╰──────────── •
`}

global.gameMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}asahotak  
┃ ⌬ ─· ${p}lengkapikalimat  
┃ ⌬ ─· ${p}tebakaplikasi  
┃ ⌬ ─· ${p}tebakbendera  
┃ ⌬ ─· ${p}tebakchara  
┃ ⌬ ─· ${p}tebakff  
┃ ⌬ ─· ${p}tebakgame  
┃ ⌬ ─· ${p}tebakgambar  
┃ ⌬ ─· ${p}tebakhewan  
┃ ⌬ ─· ${p}tebakhero  
┃ ⌬ ─· ${p}tebakjkt48  
┃ ⌬ ─· ${p}tebakkabupaten  
┃ ⌬ ─· ${p}tebakkalimat  
┃ ⌬ ─· ${p}tebakkata  
┃ ⌬ ─· ${p}tebakkimia  
┃ ⌬ ─· ${p}tebaklirik  
┃ ⌬ ─· ${p}tebaklogo  
┃ ⌬ ─· ${p}tebakml  
┃ ⌬ ─· ${p}tebaksiapa  
┃ ⌬ ─· ${p}tebaktebakan  
╰──────────── •
`}

global.funMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}apakah  
┃ ⌬ ─· ${p}bagaimana  
┃ ⌬ ─· ${p}bisakah  
┃ ⌬ ─· ${p}cekcantik  
┃ ⌬ ─· ${p}cekganteng  
┃ ⌬ ─· ${p}cekimut  
┃ ⌬ ─· ${p}cekjomok  
┃ ⌬ ─· ${p}cekkpribadian  
┃ ⌬ ─· ${p}cekmasadepan  
┃ ⌬ ─· ${p}cekwaifu  
┃ ⌬ ─· ${p}checkme  
┃ ⌬ ─· ${p}couple  
┃ ⌬ ─· ${p}dare  
┃ ⌬ ─· ${p}dimana  
┃ ⌬ ─· ${p}faktaunik  
┃ ⌬ ─· ${p}faktakucing  
┃ ⌬ ─· ${p}joke  
┃ ⌬ ─· ${p}kapankah  
┃ ⌬ ─· ${p}mitos  
┃ ⌬ ─· ${p}quotesgalau  
┃ ⌬ ─· ${p}rate  
┃ ⌬ ─· ${p}soulmate  
┃ ⌬ ─· ${p}suit  
┃ ⌬ ─· ${p}truth  
╰──────────── •
`}

global.randomAnimeMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RANDOM ANIME MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}akira
┃ ⌬ ─· ${p}akiyama
┃ ⌬ ─· ${p}ana
┃ ⌬ ─· ${p}art
┃ ⌬ ─· ${p}asuna
┃ ⌬ ─· ${p}ayuzawa
┃ ⌬ ─· ${p}boruto
┃ ⌬ ─· ${p}bts
┃ ⌬ ─· ${p}chiho
┃ ⌬ ─· ${p}chitoge
┃ ⌬ ─· ${p}cosplay
┃ ⌬ ─· ${p}cosplayloli
┃ ⌬ ─· ${p}cosplaysagiri
┃ ⌬ ─· ${p}cyber
┃ ⌬ ─· ${p}deidara
┃ ⌬ ─· ${p}doraemon
┃ ⌬ ─· ${p}elaina
┃ ⌬ ─· ${p}emilia
┃ ⌬ ─· ${p}erza
┃ ⌬ ─· ${p}exo
┃ ⌬ ─· ${p}gamewallpaper
┃ ⌬ ─· ${p}gremory
┃ ⌬ ─· ${p}hacker
┃ ⌬ ─· ${p}hestia
┃ ⌬ ─· ${p}husbu
┃ ⌬ ─· ${p}inori
┃ ⌬ ─· ${p}islamic
┃ ⌬ ─· ${p}isuzu
┃ ⌬ ─· ${p}itachi
┃ ⌬ ─· ${p}itori
┃ ⌬ ─· ${p}jennie
┃ ⌬ ─· ${p}jiso
┃ ⌬ ─· ${p}justina
┃ ⌬ ─· ${p}kaga
┃ ⌬ ─· ${p}kagura
┃ ⌬ ─· ${p}kakasih
┃ ⌬ ─· ${p}kaori
┃ ⌬ ─· ${p}cartoon
┃ ⌬ ─· ${p}shortquote
┃ ⌬ ─· ${p}keneki
┃ ⌬ ─· ${p}kotori
┃ ⌬ ─· ${p}kurumi
┃ ⌬ ─· ${p}lisa
┃ ⌬ ─· ${p}loli2
┃ ⌬ ─· ${p}madara
┃ ⌬ ─· ${p}megumin
┃ ⌬ ─· ${p}mikasa
┃ ⌬ ─· ${p}mikey
┃ ⌬ ─· ${p}miku
┃ ⌬ ─· ${p}minato
┃ ⌬ ─· ${p}mountain
┃ ⌬ ─· ${p}naruto
┃ ⌬ ─· ${p}nekonime
┃ ⌬ ─· ${p}nezuko
┃ ⌬ ─· ${p}onepiece
┃ ⌬ ─· ${p}pentol
┃ ⌬ ─· ${p}pokemon
┃ ⌬ ─· ${p}programming
┃ ⌬ ─· ${p}randomnime
┃ ⌬ ─· ${p}randomnime2
┃ ⌬ ─· ${p}rize
┃ ⌬ ─· ${p}rose
┃ ⌬ ─· ${p}sagiri
┃ ⌬ ─· ${p}sakura
┃ ⌬ ─· ${p}sasuke
┃ ⌬ ─· ${p}satanic
┃ ⌬ ─· ${p}shina
┃ ⌬ ─· ${p}shinka
┃ ⌬ ─· ${p}shinomiya
┃ ⌬ ─· ${p}shizuka
┃ ⌬ ─· ${p}shota
┃ ⌬ ─· ${p}space
┃ ⌬ ─· ${p}technology
┃ ⌬ ─· ${p}tejina
┃ ⌬ ─· ${p}toukachan
┃ ⌬ ─· ${p}tsunade
┃ ⌬ ─· ${p}waifu2
┃ ⌬ ─· ${p}yotsuba
┃ ⌬ ─· ${p}yuki
┃ ⌬ ─· ${p}yulibocil
┃ ⌬ ─· ${p}yumeko
╰──────────── •
`}

global.bugMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}xandroid
┃ ⌬ ─· ${p}xandroid2
┃ ⌬ ─· ${p}xgc
┃ ⌬ ─· ${p}xios
┃ ⌬ ─· ${p}xios2
┃ ⌬ ─· ${p}systemuicrash
┃ ⌬ ─· ${p}xsysui
╰──────────── •
`}

global.rpgMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}adventure  
┃ ⌬ ─· ${p}beli  
┃ ⌬ ─· ${p}berburu  
┃ ⌬ ─· ${p}berlayar  
┃ ⌬ ─· ${p}crafting  
┃ ⌬ ─· ${p}daily  
┃ ⌬ ─· ${p}heal  
┃ ⌬ ─· ${p}inventory  
┃ ⌬ ─· ${p}joinrpg  
┃ ⌬ ─· ${p}jual  
┃ ⌬ ─· ${p}kerja  
┃ ⌬ ─· ${p}memancing  
┃ ⌬ ─· ${p}merampok  
┃ ⌬ ─· ${p}mining  
┃ ⌬ ─· ${p}nebang  
┃ ⌬ ─· ${p}redeem  
┃ ⌬ ─· ${p}redeemdel  
┃ ⌬ ─· ${p}redeemset  
┃ ⌬ ─· ${p}repair  
╰──────────── •
`}

global.privacyMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ ⌬ ─· ${p}setcallprivacy
┃ ⌬ ─· ${p}setlastprivacy
┃ ⌬ ─· ${p}setonlineprivacy
┃ ⌬ ─· ${p}setprofileprivacy
┃ ⌬ ─· ${p}setreadreceiptsprivacy
┃ ⌬ ─· ${p}setreactionmode
┃ ⌬ ─· ${p}setstatusprivacy
╰──────────── •
`}

global.newsletterMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ ⌬ ─· ${p}setnewsletterdesc
┃ ⌬ ─· ${p}setnewslettername
┃ ⌬ ─· ${p}setnewsletterpic
┃ ⌬ ─· ${p}follownewsletter
┃ ⌬ ─· ${p}unfollownewsletter
┃ ⌬ ─· ${p}mutenewsletter
┃ ⌬ ─· ${p}unmutenewsletter
┃ ⌬ ─· ${p}createnewsletter
┃ ⌬ ─· ${p}newsletterinfo
╰──────────── •
`}

global.aiMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}aiscan  
┃ ⌬ ─· ${p}aishepherd  
┃ ⌬ ─· ${p}bardai  
┃ ⌬ ─· ${p}bibleai  
┃ ⌬ ─· ${p}blackboxai  
┃ ⌬ ─· ${p}blackboxai-pro  
┃ ⌬ ─· ${p}claude-sonnet  
┃ ⌬ ─· ${p}claudeai  
┃ ⌬ ─· ${p}dbrx-instruct  
┃ ⌬ ─· ${p}deepseek  
┃ ⌬ ─· ${p}deepseek-llm  
┃ ⌬ ─· ${p}dreamshaper  
┃ ⌬ ─· ${p}felo  
┃ ⌬ ─· ${p}flux  
┃ ⌬ ─· ${p}gandalf  
┃ ⌬ ─· ${p}gemini  
┃ ⌬ ─· ${p}gemini-pro  
┃ ⌬ ─· ${p}gemma  
┃ ⌬ ─· ${p}gita  
┃ ⌬ ─· ${p}gpt3  
┃ ⌬ ─· ${p}jokoai  
┃ ⌬ ─· ${p}metaai  
┃ ⌬ ─· ${p}mistral7b  
┃ ⌬ ─· ${p}muslimai  
┃ ⌬ ─· ${p}naw  
╰──────────── •
`}

global.otherMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ ⌬ ─· ${p}addsubdo  
┃ ⌬ ─· ${p}country  
┃ ⌬ ─· ${p}daftar  
┃ ⌬ ─· ${p}delSubdo  
┃ ⌬ ─· ${p}dns  
┃ ⌬ ─· ${p}donate  
┃ ⌬ ─· ${p}gempa  
┃ ⌬ ─· ${p}githubstalk  
┃ ⌬ ─· ${p}infobot  
┃ ⌬ ─· ${p}ipwhois  
┃ ⌬ ─· ${p}jadibot  
┃ ⌬ ─· ${p}listjadibot  
┃ ⌬ ─· ${p}listsubdo  
┃ ⌬ ─· ${p}mlstalk  
┃ ⌬ ─· ${p}npmstalk  
┃ ⌬ ─· ${p}otakudesu  
┃ ⌬ ─· ${p}owner  
┃ ⌬ ─· ${p}ping  
┃ ⌬ ─· ${p}quotesanime  
┃ ⌬ ─· ${p}repository  
┃ ⌬ ─· ${p}runtime  
┃ ⌬ ─· ${p}script  
┃ ⌬ ─· ${p}speedtest  
┃ ⌬ ─· ${p}stopjadibot  
┃ ⌬ ─· ${p}unreg  
╰──────────── •
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})