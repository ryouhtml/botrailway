var spin = require('spinnies');

var spinner = {
    "interval": 100,
    "frames": [
        " 🌀 ",
        " 🌀 Men...",
        " 🌀 Menu...",
        " 🌀 Menun...",
        " 🌀 Menung...",
        " 🌀 Menunggu...",
        " 🌀 Menunggu P...",
        " 🌀 Menunggu Pe...",
        " 🌀 Menunggu Pes...",
        " 🌀 Menunggu Pesa...",
        " 🌀 Menunggu Pesan...",
        " 🌀🌀 ",
        " 🌀🌀🌀 ",
        " 🌀🌀🌀🌀 ",
        " 🌀🌀🌀🌀🌀 ",
        " 🌀🌀🌀🌀🌀 Menunggu Pesan...",
    ]
};

let globalSpinner;

var getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ 
        color: 'magenta', 
        succeedColor: 'cyan', 
        spinner, 
        disableSpins 
    });
    return globalSpinner;
};

let spins = getGlobalSpinner(false);

module.exports.start = (id, text) => {
    spins.add(id, { text: text });
};