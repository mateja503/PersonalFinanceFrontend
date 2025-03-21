import { Budget } from "./Budget"
import { Category } from "./Category"
import { UserInteface } from "./UserInterface"

export interface AccountUserBudget
{

    id: number
    AccountUser: UserInteface
    accountUserId: number
    budget: Budget
    budgetId: number
    category: Category
    categoryId: number
}