import { Budget } from "../schemas/budget";
import { budgetBody } from "./body";
import { budgetHeader } from "./header";
import { budgteProducts } from "./products";
import { style } from "./style";


export function CreateBudget(budget: Budget): string {
  const header = budgetHeader(budget.company, budget.client)
  const productsList = budgteProducts(budget.products)

  let totalValue = 0
  let totalProds = 0
  budget.products.map((prod) => {
    totalValue += prod.totalPrice
    totalProds += prod.quant
  })
  
  const body = budgetBody(style, header, productsList, totalProds, (totalValue / 100), budget.observation)
  return body
}