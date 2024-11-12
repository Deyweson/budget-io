# Budget-io

Web service para geração de orçamentos em PDF

## Rotas

`POST /`
Rota para gerar o orçamento
Exemplo de requisição:
```json
{
  "company": {
    "name": "",
    "id": "",
    "address": "",
    "fone": "",
    "email": ""
  },
  "client": {
    "name": "",
    "id": "",
    "address": "",
    "fone": "",
    "email": ""
  },
  "products": [
    {
      "code": "",
      "description": "",
      "quant": 0,
      "price": 0,
      "totalPrice": 0
    }
  ]
}
```
Exemplo da resposta:
```json
{
	"message": "PDF generated successfully",
	"pdfId": "id-para-download-do-orçamento"
}
```

`GET /:id`
Rota para download do pdf
A resposta da rota é um pdf referente ao id passado