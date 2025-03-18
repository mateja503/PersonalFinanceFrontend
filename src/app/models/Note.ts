import { TransactionNotes } from "./TransactionNotes"

export interface Note
{
    id: number
    text: string
    transactionNotesList: TransactionNotes[]

}