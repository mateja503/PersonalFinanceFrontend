import { AccountUserBudget } from "./AccountUserBudget"

export interface Budget{

    Id: number
    budgetMonth: string
    budgetAmount?: number
    accountUserBudget?: AccountUserBudget[]
    year?: number
    month?: number
}