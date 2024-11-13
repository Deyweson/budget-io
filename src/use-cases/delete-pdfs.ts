import fs from 'node:fs'
import fsPromise from 'node:fs/promises'

export function DeletePdfUseCase() {
  const filenames = fs.readdirSync('pdf')
  const date: Date = new Date()

  for (let i = 0; i < filenames.length; i++) {
    console.log(filenames[i])
    const pdfDate: Date = new Date()

    const hour = `${filenames[i][0] + filenames[i][1]}`
    const min = `${filenames[i][3] + filenames[i][4]}`
    pdfDate.setHours(Number(hour), Number(min))
    const hourDiff = Math.abs(date.valueOf() - pdfDate.valueOf()) / 36e5
    console.log(hourDiff)
    if (hourDiff >= 1) {
      try {
        fsPromise.rm(`pdf/${filenames[i]}`)
      } catch (err) {
        console.log(err)
      }
    }
  }
}