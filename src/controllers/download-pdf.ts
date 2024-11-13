import { FastifyReply, FastifyRequest } from "fastify";
import path from "node:path";
import fs from 'node:fs'
import { z } from "zod";

export async function DownloadPdfController(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    id: z.string()
  })

  const { id } = schema.parse(request.params)

  const pdfPath = path.join(`./pdf/${id}.pdf`)

  reply.header('Content-Disposition', 'attachment; filename="orçamento.pdf"');

  return reply.send(fs.createReadStream(pdfPath));
}