import fastify from 'fastify'
import cors from '@fastify/cors'
import cron from 'node-cron'
import { CreatePdfController } from './controllers/create-pdf'
import { DownloadPdfController } from './controllers/download-pdf'
import { DeletePdfUseCase } from './use-cases/delete-pdfs'

const app = fastify()

cron.schedule('* * * * *', DeletePdfUseCase);

app.register(cors, {
  origin: (origin, cb) => {
    cb(null, true);
  }
})

app.post('/', CreatePdfController)
app.get('/:id', DownloadPdfController)

export default app