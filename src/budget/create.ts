import { Budget } from "../schemas/budget";
import { budgetBody } from "./body";
import { budgetHeader } from "./header";
import { budgteProducts } from "./products";
import { style } from "./style";


export function CreateBudget(budget: Budget): string {
  const header = budgetHeader(budget.company, budget.client)
  const productsList = budgteProducts(budget.products)
  const body = budgetBody(style, header, productsList)
  return body
}