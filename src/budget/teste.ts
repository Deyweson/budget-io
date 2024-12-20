export const test = `
<html >

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style type="text/css">

    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    .company {
      border: 1px solid black;
      border-radius: 10px;
      width: 800px;
      height: 150px;
      padding: 10px 20px;
      display: flex;
      background-color: rgba(113, 179, 64, 0.3);
    }

    .logo>img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    .company-info {
      display: flex;
      margin: auto;
    }

    .company-info>div {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .company-info p {
      width: 230px;
      margin: 0px 10px 0px 20px;
      word-wrap: break-word;
    }

    .client {
      border: 1px solid black;
      border-radius: 10px;
      width: 800px;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      background-color: rgba(113, 179, 64, 0.3);
    }

    .client>div {
      display: flex;
      justify-content: space-between;
    }

    .client>div>p {
      word-wrap: break-word;
    }

    .products {
      border: 1px solid black;
      margin-top: 10px;
      border-radius: 10px;
      width: 840px;
      word-wrap: break-word;
      padding: 5px 0;
      background-color:rgba(113, 179, 64, 0.3);
    }

    .products p {
      text-align: center;
      margin: 10px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .products-header,
    .products-list {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
    }

    .products-list {
      border-top: 1px solid black;
      padding: 5px 0px;
    }

    .products-list>p {
      margin: 2px 0;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 842px;
    }

    .obs>div {
      border-radius: 10px;
      border: 1px solid black;
      width: 500px;
      height: 200px;
      background-color: rgba(113, 179, 64, 0.3);
    }

    .totals {
      display: flex;
      align-content: center;
      justify-content: center;
      width: 342px;
      margin-left: 60px;
    }

    .totals>div {
      margin: 0px 10px;
    }

    .totals>div>div {
      width: 120px;
      height: 50px;
      border: 1px solid black;
      border-radius: 10px;
      background-color: rgba(113, 179, 64, 0.3);
    }
  </style>
</head>

<body>
  <div class="company">
    <div class="logo">
      <img src="">
    </div>
    <div class="company-info">
      <div>
        <p>Nome da empresa</p>
        <p>E-mail</p>
        <p>Endereço</p>
      </div>
      <div>
        <p>CNPJ</p>
        <p>Telefone</p>
      </div>
    </div>
  </div>

  <div class="client">
    <div>
      <p style="width: 300px;">Deyweson dos Santos Almeida De Deus</p>
      <p style="width: 200px;">CPF/CNPJ</p>
      <p style="width: 150px;">Telefone</p>
    </div>
    <div>
      <p style="width: 300px;">E-mail</p>
      <p style="width: 363px;">Endereço Endereço Endereço Endereço</p>
    </div>
  </div>

  <div class="products">
    <div class="products-header">
      <p style="width: 80px;">Código</p>
      <p style="width: 300px;">Produto / Serviço</p>
      <p style="width: 80px;">Quantidade</p>
      <p style="width: 100px;">Valor Uni.</p>
      <p style="width: 100px;">Valor Total</p>
    </div>
    <div class="products-list" style="background-color: #fff;">
      <p style="min-height: 15px; width: 80px;">Código</p>
      <p style="min-height: 15px; width: 300px; text-align: left;">Notebook teste</p>
      <p style="min-height: 15px; width: 80px;">10</p>
      <p style="min-height: 15px; width: 100px;">30.000.000,00</p>
      <p style="min-height: 15px; width: 100px;">30.000.000,00</p>
    </div>
    <div class="products-list">
      <p style="min-height: 15px; width: 80px;"></p>
      <p style="min-height: 15px; width: 300px; text-align: left;"></p>
      <p style="min-height: 15px; width: 80px;"></p>
      <p style="min-height: 15px; width: 100px;"></p>
      <p style="min-height: 15px; width: 100px;"></p>
    </div>
  </div>

  <div class="footer">
    <div class="obs">
      <p>Observações</p>
      <div>
      </div>
    </div>
    <div class="totals">
      <div>
        <p>Total de produtos</p>
        <div>
        </div>
      </div>
      <div>
        <p>Valor total</p>
        <div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>

`