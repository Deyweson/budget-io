import puppeteer from 'puppeteer';
require('dotenv').config()

export async function GeneratePDF(html: string): Promise<Uint8Array> {
  const browser = await puppeteer.launch({
    args: process.env.NODE_ENV === 'production' ? [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote"
    ] : [],
    executablePath: process.env.NODE_ENV === 'production' ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath()
  })
  const page = await browser.newPage()

  await page.setContent(html, { waitUntil: 'networkidle0' })

  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true
  })

  await browser.close()
  return pdf
}