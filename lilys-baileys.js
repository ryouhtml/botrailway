// Shim: lilys-baileys adalah alias paket Baileys.
// Coba cantarella-baileys dulu (fork asli), fallback ke @whiskeysockets/baileys (resmi).
let baileys;
try {
	baileys = require('cantarella-baileys');
} catch (e) {
	baileys = require('@whiskeysockets/baileys');
}

// Pastikan makeInMemoryStore selalu ada dan mengembalikan store dengan method bind
const _origMakeInMemoryStore = baileys.makeInMemoryStore;
baileys.makeInMemoryStore = (opts = {}) => {
	const store = _origMakeInMemoryStore ? _origMakeInMemoryStore(opts) : { messages: {}, contacts: {}, ...opts };
	if (!store.bind) store.bind = (ev) => ev;
	return store;
};

module.exports = baileys;
