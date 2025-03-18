import { Category } from "./Category"
import { TransationType } from "./enumiration/TransationType"
import { TransactionNotes } from "./TransactionNotes"

export interface Transaction
{
    id: number
    datetime: string
    amount: number
    transactionType: TransationType
    category: Category
    categoryId: number
    transactionNotesList: TransactionNotes[]
}