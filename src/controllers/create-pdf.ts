import { FastifyReply, FastifyRequest } from "fastify";
import { budgetSchema } from "../schemas/budget";
import { CreateBudget } from "../budget/create";
import { randomUUID } from "crypto";
import path from "node:path";
import { GeneratePDF } from "../services/create-pdf";
import { GetHourDate } from "../utils/get-day-date";

export async function CreatePdfController(request: FastifyRequest, reply: FastifyReply) {
  const data = budgetSchema.parse(request.body)
  const budget = CreateBudget(data)
  const id = randomUUID()
  const hour = GetHourDate()
  const pdfPath = path.join(`./pdf/${hour}-${id}.pdf`)
  console.log(hour)

  await GeneratePDF(budget).then(pdf => {
    const fs = require('fs');
    fs.writeFileSync(pdfPath, pdf);
    console.log('PDF generated successfully');
    return reply.status(200).send({
      message: 'PDF generated successfully',
      pdfId: `${hour}-${id}`
    })
  }).catch(err => {
    console.error('Error generating PDF:', err);
    return reply.status(500).send({
      message: 'Error generating PDF',
      error: err
    })
  });
}