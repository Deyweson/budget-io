# Budget-io

Web service para geração de orçamentos em PDF

## Rotas

```/``
<br>
Rotas para gerar o orçamento

Exemplo de requisição:
````json
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