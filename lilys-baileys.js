// Shim: lilys-baileys adalah alias paket Baileys.
// Coba cantarella-baileys dulu (fork asli), fallback ke @whiskeysockets/baileys (resmi).
let baileys;
try {
	baileys = require('cantarella-baileys');
} catch (e) {
	baileys = require('@whiskeysockets/baileys');
}

// Fallback makeInMemoryStore jika tidak tersedia (khusus @whiskeysockets/baileys)
if (!baileys.makeInMemoryStore) {
	baileys.makeInMemoryStore = (opts = {}) => {
		const store = {
			messages: {},
			contacts: {},
			...opts,
		};
		return store;
	};
}

module.exports = baileys;
