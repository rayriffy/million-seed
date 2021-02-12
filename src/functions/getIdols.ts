import { Browser } from 'puppeteer'

export const getIdols = async (browser: Browser) => {
  const page = await browser.newPage()

  await page.goto(`https://imas.gamedbs.jp/mlth/`, {
    waitUntil: 'networkidle0'
  })

  const idols = await page.$$eval('#contents-main > section > section > article > ul > li', elements => {
    const res = elements.map(element => {
      return {
        // idol name
        name: element.querySelector('a').textContent,
        // next url to be parsed
        nextHop: element.querySelector('a').getAttribute('href')
      }
    })

    return res
  })

  await page.close()

  return idols
}
