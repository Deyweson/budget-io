import { Products } from "../schemas/budget";

export function budgteProducts(products: Products): string {

  let productsList = ''

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].description)
    productsList += `
    <div class="products-list" ${i % 2 === 0 ? '' : 'style="background-color: #fff;"'
      }>
      <p style="min-height: 15px; width: 80px;">${products[i].code}</p>
      <p style="min-height: 15px; width: 300px; text-align: left;">${products[i].description}</p>
      <p style="min-height: 15px; width: 80px;">${products[i].quant}</p>
      <p style="min-height: 15px; width: 100px;">${products[i].price}</p>
      <p style="min-height: 15px; width: 100px;">${products[i].totalPrice}</p>
    </div> `
  }
  for (let i = products.length; i < 10; i++) {
    productsList += `
    <div class="products-list" ${i % 2 === 0 ? '' : 'style="background-color: #fff;"'
      }>
      <p style="min-height: 15px; width: 80px;"></p>
      <p style="min-height: 15px; width: 300px; text-align: left;"></p>
      <p style="min-height: 15px; width: 80px;"></p>
      <p style="min-height: 15px; width: 100px;"></p>
      <p style="min-height: 15px; width: 100px;"></p>
    </div>
    `
  }
  return productsList
}