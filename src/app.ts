import fastify from 'fastify'
import path from 'node:path'
import { budgetSchema } from './schemas/budget'
import { GeneratePDF } from './services/create-pdf'
import { CreateBudget } from './budget/create'
import { randomUUID } from 'node:crypto'

const app = fastify()

app.post('/', async (request, reply) => {
  const data = budgetSchema.parse(request.body)
  const budget = CreateBudget(data)
  const pdfPath = path.join(`./pdf/${randomUUID()}.pdf`)

  await GeneratePDF(budget).then(pdf => {
    const fs = require('fs');
    fs.writeFileSync(pdfPath, pdf);
    console.log('PDF generated successfully');
    return reply.status(200).send('PDF generated successfully')
  }).catch(err => {
    console.error('Error generating PDF:', err);
    return reply.status(500).send('Error generating PDF')
  });
})

export default app