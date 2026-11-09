// Shim: lilys-baileys adalah alias paket Baileys.
// Coba cantarella-baileys dulu (fork asli), fallback ke @whiskeysockets/baileys (resmi).
let baileys;
try {
	baileys = require('cantarella-baileys');
} catch (e) {
	baileys = require('@whiskeysockets/baileys');
}
module.exports = baileys;
