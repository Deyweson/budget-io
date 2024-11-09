import app from './app'

const port = 3000

app.listen({
  port,
  host: '0.0.0.0'
}, () => {
  console.log(`Server is running at port ${port}`)
})