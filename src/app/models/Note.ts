import { TransactionNote } from "./TransactionNote"

export interface Note
{
    id?: number
    text?: string
    transactionNoteList?: TransactionNote[]

}