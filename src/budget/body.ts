export function budgetBody(style: string, header: string, productsList: string, totalProds: number, totalPrice: number, observation?: string) {
  const body = `
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        ${style}
      </head>
      <body>
        ${header}
        <div class="products">
          <div class="products-header">
            <p style="width: 80px;">Código</p>
            <p style="width: 300px;">Produto / Serviço</p>
            <p style="width: 80px;">Quantidade</p>
            <p style="width: 100px;">Valor Uni.</p>
            <p style="width: 100px;">Valor Total</p>
          </div>
          ${productsList}
        </div>
        <div class="footer">
          <div class="obs">
            <p>Observações:</p>
            <div>${observation ? observation : ''}</div>
          </div>
          <div class="totals">
            <div>
              <p>Total de produtos</p>
              <div>${totalProds}</div>
            </div>
            <div>
              <p>Valor total</p>
              <div>${totalPrice}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  return body
}