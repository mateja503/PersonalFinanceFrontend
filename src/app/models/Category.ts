import { AccountUserBudget } from "./AccountUserBudget"
import { TransactionNote } from "./TransactionNote"

export interface Category
{
    id?: number
    categoryName: string
    transactionList: TransactionNote[]
    accountUserBudgetList: AccountUserBudget[]

}