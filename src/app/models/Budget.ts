import { AccountUserBudget } from "./AccountUserBudget"

export interface Budget{

    id?: number
    budgetMonth: string
    budgetAmount?: number
    accountUserBudgetList?: AccountUserBudget[]
    year?: number
    month?: number
}