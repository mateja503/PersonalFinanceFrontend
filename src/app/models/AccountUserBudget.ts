import { AccountUser } from "./AccountUser"
import { Budget } from "./Budget"
import { Category } from "./Category"

export interface AccountUserBudget
{

    id: number
    AccountUser: AccountUser
    accountUserId: number
    budget: Budget
    budgetId: number
    category: Category
    categoryId: number
}