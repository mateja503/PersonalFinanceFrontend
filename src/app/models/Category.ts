import { AccountUserBudget } from "./AccountUserBudget"
import { TransactionNotes } from "./TransactionNotes"

export interface Category
{
    id?: number
    categoryName: string
    transactionList: TransactionNotes[]
    accountUserBudgetList: AccountUserBudget[]

}