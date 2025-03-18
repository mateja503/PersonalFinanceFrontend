import { Note } from "./Note"
import { Transaction } from "./Transaction"

export interface TransactionNotes
{

    id: number
    transaction: Transaction
    transactionId: number
    note: Note
    noteId: number
}