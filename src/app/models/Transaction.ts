import { Category } from "./Category"
import { TransationType } from "./enumiration/TransationType"
import { TransactionNote } from "./TransactionNote"

export interface Transaction
{
    id?: number
    dateTime: string
    amount: number
    transactionType: number
    category?: Category
    categoryId: number
    transactionNoteList: TransactionNote[]

}