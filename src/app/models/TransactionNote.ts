import { Note } from "./Note"
import { Transaction } from "./Transaction"

export interface TransactionNote
{
    id?:number
    noteId?:number
    note?:Note
    transactionId?:number
    transaction?: Transaction

}