# Budget-io

Web service para geração de orçamentos em PDF

## Rotas

`POST /` Criar PDF
![post](./doc-img/post.png)

O corpo da requisição precisa ter os seguintes dados.

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
Em caso de sucesso a resposta da API sera uma mensagem confirmando a criação e um ID para o download do PDF
```json
{
	"message": "PDF generated successfully",
	"pdfId": "id-para-download-do-orçamento"
}
```

`GET /:id`
Rota para download do pdf
A resposta da rota é um pdf referente ao id passado