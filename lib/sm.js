// lib/starmax.js
const axios = require('axios')
const cheerio = require('cheerio')

async function starmaxfilmdl(url) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    })

    const $ = cheerio.load(data)
    
    const title = $('h1.entry-title').text().trim()
    const description = $('.entry-content p').first().text().trim()
    const thumbnail = $('.limage img').attr('src')
    
    const ratingValue = $('.rtd span[itemprop="ratingValue"]').text().trim()
    const ratingCount = $('.rtd span[itemprop="ratingCount"]').text().trim()
    const rating = ratingValue ? `${ratingValue} / 10 (${ratingCount} votes)` : null

    const details = {}
    $('.entry-content ul.data li').each((_, el) => {
      const key = $(el).find('b').text().replace(':', '').trim().toLowerCase()
      const val = $(el).find('.colspan').text().trim()
      if (key && val) details[key] = val
    })

    const downloads = []
    let currentCategory = 'General'

    $('.dl-item').children().each((_, el) => {
      if (el.tagName === 'div') {
        const catText = $(el).text().trim()
        if (catText) currentCategory = catText
      } else if (el.tagName === 'a') {
        const href = $(el).attr('href')
        const provider = $(el).find('span').eq(0).text().trim()
        const language = $(el).find('span').eq(1).text().trim()
        const resolution = $(el).find('span').eq(2).text().trim()

        if (href) {
          downloads.push({
            category: currentCategory,
            provider,
            language,
            resolution,
            url: href
          })
        }
      }
    })

    return {
      title,
      description,
      thumbnail,
      rating,
      details,
      downloads
    }
  } catch (err) {
    throw new Error('Gagal scrape data!')
  }
}

module.exports = { starmaxfilmdl }