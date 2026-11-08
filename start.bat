@echo off
chcp 65001 >nul 2>nul
title FURINA V18 - WhatsApp Bot
cd /d "%~dp0"
setlocal enabledelayedexpansion

echo.
echo  ==========================================================
echo    FURINA V18 6488 FEATURE  -  WhatsApp Bot Launcher
echo  ==========================================================
echo.

REM ---------- Cek Node.js ----------
where node >nul 2>nul
if errorlevel 1 (
    echo  [ERROR] Node.js tidak ditemukan di PATH.
    echo  Buka https://nodejs.org lalu install versi LTS, lalu jalankan ulang.
    echo.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node --version') do set NODEVER=%%v
echo  [OK] Node.js !NODEVER!
where npm >nul 2>nul
if errorlevel 1 (
    echo  [ERROR] npm tidak ditemukan di PATH.
    echo.
    pause
    exit /b 1
)
echo.

REM ---------- Cegah instance ganda ----------
REM Dua proses pada folder session/ yang sama saling menimpa credentials
REM dan memicu "device removed" / logout palsu di WhatsApp.
tasklist /fi "imagename eq node.exe" /nh 2>nul | findstr /i /c:"node.exe" >nul
if not errorlevel 1 (
    echo  [PERINGATAN] Node.js lain masih jalan.
    echo  Bot tidak boleh dijalankan dua kali pada session yang sama.
    echo  Stop dulu proses node yang ada, lalu ulangi.
    echo.
    tasklist /fi "imagename eq node.exe"
    echo.
    pause
    exit /b 1
)

REM ---------- Dependensi ----------
if not exist "node_modules" (
    echo  [INFO] node_modules belum ada - memasang dependensi, mohon tunggu...
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        echo.
        echo  [ERROR] npm install gagal. Lihat pesan di atas.
        echo.
        pause
        exit /b 1
    )
    echo  [OK] Dependensi terpasang.
    echo.
)

REM ---------- Status pairing ----------
if exist "sessions\creds.json" (
    echo  [OK] Sesi ditemukan - bot akan langsung connect, tidak perlu pairing.
) else (
    echo  [PENTING] Belum paired. Nanti akan muncul KODE PAIRING 8 digit.
    echo  Ketik kode itu di WhatsApp ^-^> Perangkat Tertaut ^-^> Tautkan dengan nomor telepon.
    echo.
)

if exist "bot.log" del /q "bot.log"

echo  ==========================================================
echo   Output di bawah tampil REAL TIME dan juga disimpan ke bot.log
echo   Pairing: ketik kode pairing di jendela ini lalu Enter
echo   Stop   : Ctrl+C
echo  ==========================================================
echo.

REM PENTING: JANGAN redirect output di sini. index.js sudah meng-tee sendiri
REM ke bot.log dari dalam prosesnya. Kalau di-redirect di sini, kode pairing
REM tidak bisa diketik karena readline kehilangan akses stdin.
node index.js

set EXITCODE=%ERRORLEVEL%
echo.
if not "%EXITCODE%"=="0" (
    echo  [INFO] Bot berhenti dengan kode %EXITCODE%.
) else (
    echo  [INFO] Bot berhenti normal.
)
if exist "bot.log" (
    echo.
    echo  ---------- 30 baris terakhir bot.log ----------
    powershell -NoProfile -Command "Get-Content -Path 'bot.log' -Tail 30 -Encoding UTF8"
)
echo.
pause
endlocal