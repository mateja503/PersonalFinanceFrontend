import { Note } from "./Note"
import { Transaction } from "./Transaction"

export interface TransactionNotes
{

    Id: number
    transaction: Transaction
    transactionId: number
    note: Note
    noteId: number
}