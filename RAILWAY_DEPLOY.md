# 🚀 Deploy FURINA V18 ke Railway

Panduan singkat untuk menjalankan bot WhatsApp FURINA V18 di [Railway](https://railway.app).

## Apa yang sudah disiapkan

Berkas berikut sudah ditambahkan ke dalam proyek:

| Berkas | Fungsi |
|--------|--------|
| `Dockerfile` | Image Node.js 22 + dependensi sistem (ffmpeg, sharp/libvips, canvas/cairo, Chromium/puppeteer, tfjs-node) |
| `.dockerignore` | Menghindari `node_modules`, log, dan folder runtime ikut di-copy ke image |
| `railway.toml` | Perintah start `npm start` dan catatan resource |
| `.env.example` | Contoh variabel lingkungan |
| `RAILWAY_DEPLOY.md` | Panduan ini |

`package.json` sudah memiliki `"start": "node index.js"`, jadi Railway dapat menjalankan bot langsung.

## Prasyarat

- Akun [GitHub](https://github.com)
- Akun [Railway](https://railway.app)
- Proyek FURINA V18 ini di-upload ke GitHub repository (publik atau privat)

## Langkah-langkah Deployment

### 1. Push proyek ke GitHub

Masuk ke folder proyek, lalu inisialisasi git dan push:

```bash
cd "C:\Users\Administrator\Documents\Bagus\koding\FURINA V18 6488 FEATURE"
git init
git add .
git commit -m "initial: FURINA V18 ready for Railway"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAMA.git
git push -u origin main
```

> Folder `./sessions` (yang sudah berisi kredensial pairing WhatsApp) **sengaja di-include** agar bot tidak meminta kode pairing secara interaktif saat di Railway.

### 2. Buat service baru di Railway

1. Login ke [Railway Dashboard](https://railway.app/dashboard).
2. Klik **New Project** → **Deploy from GitHub repo**.
3. Pilih repository FURINA V18 tadi.
4. Railway akan mendeteksi `Dockerfile` dan build image secara otomatis.

### 3. Atur variabel lingkungan (opsional)

Buka **Service > Variables**, tambahkan:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |

(Variabel API key lainnya sudah ada di `settings.js`; ubah di sana jika perlu.)

### 4. Deploy

Railway akan otomatis mendeteksi perubahan dan deploy. Tunggu hingga build selesai, lalu lihat **Logs** untuk memastikan bot terhubung ke WhatsApp.

## ⚠️ Penting: Sesi WhatsApp & Multi-Device

Karena folder `./sessions` sudah disertakan, bot akan **connect langsung tanpa scan QR / kode pairing** saat pertama kali di Railway.

**Jangan** menjalankan bot ini di komputer lokal **dan** di Railway pada saat yang sama dengan session yang sama. WhatsApp akan mendeteksi duplikasi dan memutus salah satu ("connection replaced" / logged out). Pilih salah satu tempat untuk menjalankannya.

Jika session kadaluarsa atau bot terpaksa pairing ulang, Anda perlu:
1. Menghapus isi folder `./sessions` di repository,
2. Menjalankan bot secara lokal sekali untuk scan pairing,
3. Meng-upload kembali folder `./sessions` yang baru ke GitHub,
4. Redeploy di Railway.

## Resource yang Direkomendasikan

FURINA V18 cukup berat karena memuat `puppeteer` (Chromium), `sharp`, `canvas`, dan `@tensorflow/tfjs-node`.

- **RAM minimal**: 1 GB
- **Tipe layanan**: Gunakan "service" (worker), bukan web, karena bot ini tidak membuka port HTTP.

Atur di **Railway Dashboard > Service > Settings > Memory**.

## Troubleshooting

| Masalah | Penyebab kemungkinan | Solusi |
|---------|----------------------|--------|
| Build gagal saat `npm ci` | Native module (sharp/canvas/tfjs-node) gagal compile | Pastikan `Dockerfile` diikuti, tidak diubah. Build log di Railway akan menunjukkan detailnya. |
| Bot tiba-tiba logout / "connection replaced" | Session digunakan di 2 tempat sekaligus | Matikan bot lokal, biarkan hanya di Railway. |
| Bot tidak muncul online | Session expired / tidak terpairing | Lakukan pairing ulang (lihat langkah di atas). |
| Memory OOM (keluarkan) | RAM terlalu kecil | Tambahkan memory di Railway (minimal 1 GB). |

## Logs

Buka **Service > Deployments > Lihat log** untuk memantau output bot secara real-time, termasuk kode pairing jika diperlukan.

---

Selamat deploy! 🌊