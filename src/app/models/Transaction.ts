import { Category } from "./Category"
import { TransationType } from "./enumiration/TransationType"
import { TransactionNote } from "./TransactionNote"

export interface Transaction
{
    id?: number
    datetime: string
    amount: number
    transactionType: TransationType
    category?: Category
    categoryId: number
    transactionNoteList: TransactionNote[]

}