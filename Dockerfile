# =============================================================================
# Dockerfile untuk FURINA V18 WhatsApp Bot (Railway)
# Base image: Node.js 22 (engines di package.json menuntut >=22.0.0)
# =============================================================================
FROM node:22-slim

WORKDIR /app

# =============================================================================
# Dependensi sistem yang dibutuhkan native modules & fitur bot:
#   - build-essential, python3       : compile native modules (sharp, canvas, dll)
#   - ffmpeg                         : audio/video processing (fluent-ffmpeg)
#   - libvips-dev                    : sharp image processing
#   - libcairo2, libpango, libjpeg, libgif, librsvg2 : canvas
#   - chromium + fonts               : puppeteer
#   - libnss3, libatk, libgbm, dll   : Chromium headless di Linux
# =============================================================================
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates \
    chromium \
    ffmpeg \
    fonts-freefont-ttf \
    fonts-ipafont-gothic \
    fonts-kacst \
    fonts-liberation \
    fonts-thai-tlwg \
    fonts-wqy-zenhei \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libgconf-2-4 \
    libgtk-3-0 \
    libjpeg-dev \
    libnss3 \
    libpango1.0-dev \
    librsvg2-dev \
    libvips-dev \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    make \
    python3 \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# =============================================================================
# Variabel lingkungan
# =============================================================================
ENV NODE_ENV=production
ENV PORT=3000

# Paksa puppeteer menggunakan Chromium yang sudah diinstall sistem di atas
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Hapus notifikasi funding/npm audit selama install
ENV NODE_ENV=production

# =============================================================================
# Install dependensi Node.js
# =============================================================================
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# =============================================================================
# Salin seluruh source proyek (termasuk folder sessions yang sudah terpairing)
# =============================================================================
COPY . .

# =============================================================================
# Jalankan bot
# =============================================================================
CMD ["npm", "start"]
