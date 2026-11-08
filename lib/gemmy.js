/*
Base : https://gemini.google.com
Author : Geno
WhatsApp Channel: https://whatsapp.com/channel/0029Vb6hVYK8V0tkiz4bKs0N
Modified for: Alya Bot Integration
Featured 
- Support Streaming Chat
- Support Conversation (Contextual)
- Support WebSearch
*/

const axios = require('axios');
const crypto = require('crypto');

function syncCookies(jar, setCookie) {
  if (!setCookie) return;
  const list = Array.isArray(setCookie) ? setCookie : [setCookie];
  for (const item of list) {
    const pair = item.split(';')[0].split('=');
    if (pair.length >= 2) {
      jar[pair[0].trim()] = pair.slice(1).join('=').trim();
    }
  }
}

const buildCookieString = (jar) => Object.entries(jar).map(([k, v]) => `${k}=${v}`).join('; ');

function cleanText(text) {
  if (!text) return '';
  text = text.replace(/http:\/\/googleusercontent\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\n*/g, '');
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

async function startSession() {
  const cookies = {};
  
  const pageRes = await axios.get('https://gemini.google.com/app', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  syncCookies(cookies, pageRes.headers['set-cookie']);
  
  const html = pageRes.data.toString();
  const cfb2hMatch = html.match(/"cfb2h":\s*"(.*?)"/);
  const buildLabel = cfb2hMatch ? cfb2hMatch[1] : 'boq_assistant-bard-web-server_20260709.09_p0';

  const response = await axios.post(
    'https://gemini.google.com/_/BardChatUi/data/batchexecute?rpcids=maGuAc&source-path=%2F&hl=en-US&_reqid=1&rt=c',
    'f.req=[[["maGuAc","[0]",null,"generic"]]]&',
    { 
      headers: { 
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'cookie': buildCookieString(cookies)
      } 
    }
  );
  syncCookies(cookies, response.headers['set-cookie']);
  
  const sessionId = Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join('');
  
  return {
    cookies,
    buildLabel,
    sessionId,
    reqId: Math.floor(Math.random() * 90000) + 10000
  };
}

async function guestChat(prompt, auth = null, chatId = null, onChunk = null) {
  auth = auth || await startSession();
  auth.reqId = (auth.reqId || 10000) + 100000;
  
  let metadata = ['', '', '', null, null, null, null, null, null, ''];
  if (chatId) {
    try {
      metadata = typeof chatId === 'string' ? JSON.parse(chatId) : chatId;
    } catch (e) {}
  }
  
  const requestPayload = [
    [prompt, 0, null, null, null, null, 0], ['en-US'],
    metadata, null, null, null, [1], 1, null, null, 1, 0, null, null, null, null, null, [[0]], 1,
    null, null, null, null, null,
    ['', '', '', null, null, null, null, null, 0, null, 1, null, null, null, []],
    null, null, 1, null, null, null, null, null, null, null,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    1, null, null, null, null, [1],
  ];

  const traceId = crypto.randomUUID().toUpperCase();
  const queryParams = new URLSearchParams({
    hl: 'en-US',
    _reqid: String(auth.reqId),
    rt: 'c'
  });
  if (auth.buildLabel) queryParams.set('bl', auth.buildLabel);
  if (auth.sessionId) queryParams.set('f.sid', auth.sessionId);

  const requestBody = new URLSearchParams({ 'f.req': JSON.stringify([null, JSON.stringify(requestPayload)]) });

  const streamResponse = await axios.post(
    `https://gemini.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?${queryParams}`,
    requestBody.toString(),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'x-goog-ext-525001261-jspb': '[1,null,null,null,"fbb127bbb056c959",null,null,0,[4,6],null,null,1,null,null,1]',
        'x-goog-ext-525005358-jspb': `["${traceId}",1]`,
        'x-goog-ext-73010989-jspb': '[0]',
        'x-goog-ext-73010990-jspb': '[0,0,0]',
        'x-same-domain': '1',
        'origin': 'https://gemini.google.com',
        'referer': 'https://gemini.google.com/',
        'cookie': buildCookieString(auth.cookies),
      },
      responseType: 'stream'
    }
  );

  syncCookies(auth.cookies, streamResponse.headers['set-cookie']);

  return new Promise((resolve, reject) => {
    let accumulatedText = '';
    let lastSentText = '';
    let buffer = '';
    let updatedMetadata = metadata;

    streamResponse.data.on('data', chunk => {
      try {
        buffer += chunk.toString('utf8');
        if (buffer.startsWith(")]}'")) buffer = buffer.substring(4).trimStart();

        while (true) {
          const nl = buffer.indexOf('\n');
          if (nl === -1) break;

          const sizeStr = buffer.substring(0, nl).trim();
          const size = parseInt(sizeStr, 10);
          
          if (isNaN(size)) {
            buffer = buffer.substring(nl + 1);
            continue;
          }
          if (buffer.length < nl + size) break;

          const framePayload = buffer.substring(nl, nl + size);
          buffer = buffer.substring(nl + size);

          let frameData;
          try { frameData = JSON.parse(framePayload); } catch (e) { continue; }

          const envelope = Array.isArray(frameData) ? frameData : [frameData];
          for (const item of envelope) {
            const innerStr = item?.[2];
            if (!innerStr) continue;

            let pj;
            try { pj = JSON.parse(innerStr); } catch (e) { continue; }

            const mData = pj?.[1];
            if (mData) updatedMetadata = mData;

            const contextToken = pj?.[25];
            if (typeof contextToken === 'string') updatedMetadata[9] = contextToken;

            const candidates = pj?.[4] || [];
            for (const cand of candidates) {
              const rawContent = cand?.[1]?.[0] || '';
              const cleaned = cleanText(rawContent);
              
              if (cleaned) {
                accumulatedText = cleaned;
                const delta = cleaned.substring(lastSentText.length);
                if (delta && onChunk) {
                  onChunk(delta);
                  lastSentText = cleaned;
                }
              }
            }
          }
        }
      } catch (err) { reject(err); }
    });

    streamResponse.data.on('end', () => {
      try {
        const finalDelta = accumulatedText.substring(lastSentText.length);
        if (finalDelta && onChunk) onChunk(finalDelta);
        
        // Return object langsung, tidak usah JSON.stringify
        resolve({
          response: accumulatedText,
          chatId: updatedMetadata,
          auth: auth
        });
      } catch (err) { reject(err); }
    });

    streamResponse.data.on('error', reject);
  });
}

const gemmy = {
  chat: async (prompt, auth = null, chatId = null, options = {}) => {
    try {
      let finalPrompt = prompt;
      
      // Inject persona jika chatId kosong (percakapan baru)
      if (!chatId) {
        const ownername = options.ownername || "Owner";
        const pushname = options.pushname || "User";
        finalPrompt = `System: Nama kamu adalah Alya Mikhailovna Kujou dan dibuat oleh ${ownername} dan tugas kamu adalah melayani permintaan ${pushname}.\n\nUser: ${prompt}`;
      }

      const res = await guestChat(finalPrompt, auth, chatId);
      
      return { 
        success: true, 
        reply: res.response, 
        auth: res.auth, 
        chatId: res.chatId 
      };
    } catch (error) {
      console.error(`[Gemini Web Error]: ${error.message}`);
      return { success: false, msg: error.message };
    }
  }
};

module.exports = { gemmy };