import { AccountUserBudget } from "./AccountUserBudget"
import { TransactionNotes } from "./TransactionNotes"

export interface Category
{
    Id: number
    categoryName: string
    transactionList: TransactionNotes[]
    accountUserBudgetList: AccountUserBudget[]

}