import puppeteer from 'puppeteer'
import { getIdols } from './functions/getIdols'

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: false,
  })

  // Get lists of idols
  const idols = await getIdols(browser)

  // Parse detailed idol
  const dump = await Promise.all(idols.map(async idol => {
    const page = await browser.newPage()

    await page.goto(`https://imas.gamedbs.jp/mlth/`, {
      waitUntil: 'networkidle0'
    })

    // get all character profiles
  }))
})()
