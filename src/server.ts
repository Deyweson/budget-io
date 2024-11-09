import app from './app'
import fs from 'node:fs'

const port = 3000

app.listen({
  port,
  host: '0.0.0.0'
}, () => {
  console.log(`Server is running at port ${port}`)

  if (!fs.existsSync('./pdf')) {
    fs.mkdir('./pdf', (err) => {
      if (err) {
        console.log("Deu ruim...");
        return
      }
      console.log("Diretório criado! =)")
    });
  }
})