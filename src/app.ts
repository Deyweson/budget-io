import fastify from 'fastify'
import path from 'node:path'
import fs from 'node:fs'
import { budgetSchema } from './schemas/budget'
import { GeneratePDF } from './services/create-pdf'
import { CreateBudget } from './budget/create'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: (origin, cb) => {
    // Permitir todas as origens (não recomendado para produção)
    cb(null, true);
  }
})


app.post('/', async (request, reply) => {
  const data = budgetSchema.parse(request.body)
  const budget = CreateBudget(data)
  const id = randomUUID()
  const pdfPath = path.join(`./pdf/${id}.pdf`)

  await GeneratePDF(budget).then(pdf => {
    const fs = require('fs');
    fs.writeFileSync(pdfPath, pdf);
    console.log('PDF generated successfully');
    return reply.status(200).send({
      message: 'PDF generated successfully',
      pdfId: id
    })
  }).catch(err => {
    console.error('Error generating PDF:', err);
    return reply.status(500).send({
      message: 'Error generating PDF',
      error: err
    })
  });
})

app.get('/:id', (request, reply) => {
  const schema = z.object({
    id: z.string()
  })

  const { id } = schema.parse(request.params)

  const pdfPath = path.join(`./pdf/${id}.pdf`)

  reply.header('Content-Disposition', 'attachment; filename="orçamento.pdf"');

  return reply.send(fs.createReadStream(pdfPath));
})

export default app