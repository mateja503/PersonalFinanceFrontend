import { TransactionNotes } from "./TransactionNotes"

export interface Note
{
    Id: number
    text: string
    transactionNotesList: TransactionNotes[]

}