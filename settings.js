const fs = require('fs');
const chalk = require('chalk');

global.botName = 'Xizone MD'; // Nama Bot Kamu
global.ownerNumber = '+6285700307294'; // Nomor Kamu
global.ownerName = 'ghisz-dev'; // Nama Kamu
global.website = 'https://www.xizone.my.id/'; // Web Kamu
global.wagc = 'https://www.xizone.my.id/'; // Web Kamu

global.packname = "Sticker By"
global.author = "Xizone Bot\nDev By @ghiszz_\n\n\n\n\n\n\n------_____------\n\n\n\n\n\n\n +62 858-6419-5026"
global.footer = '©ghisz-dev';
global.creator = '6285700307294@s.whatsapp.net'; // Nomor Creator
global.premium = ['6285700307294']; // User Premium
global.prefix = ['!','.','#','&']
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363419258428689@newsletter'; // ID Saluran Kamu
global.saluranName = 'Xizone MD'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = ''; // Link Panel Kamu
global.cred = 'ptla_aPkBJgJLb5Af29zPTI6FwicgPV8Bw9kuuiTLxp6WEq5'; // API PTLA Kamu
global.apiuser = 'ptlc_XZ8jqmbIbeNLmY8GS3DLdgBmErMlj4Cb36OWno0SAuT'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4ORYZ_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822971"; // Zone ID CF Kamu
global.CF_DOMAIN = "xizone.my.id"; // Nama Domain Kamu di CF

global.typemenu = 'v5'; // Gaya Menu v1-v5
global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoJoinNewsletter = false // 

global.payment = {
	dana: "6285700307294",
	gopay: "",
	ovo: "",
	qris: "",
	shopeePay: "",
	seabank: ""
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya! ",
	botAdmin: "aku harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "nih woi 😈",
	error: "Eh, ada yang salah nih... coba lagi ya!",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan  Kamu udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini! 👑",
	premium: "Fitur ini cuma buat pengguna premium! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi! 💌",
	wait: "Tunggu sebentar ya... aku lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://www.xizone.my.id/"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://www.xizone.my.id/img/menu.jpg"; // Url Image
global.replyurl = "https://www.xizone.my.id/img/reply.jpg"
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})