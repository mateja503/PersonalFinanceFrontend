import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { Category } from '../../../../models/Category';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { NoteService } from '../../../../services/note.service';
import { Note } from '../../../../models/Note';
import { TransationType } from '../../../../models/enumiration/TransationType';
import { TransactionNoteService } from '../../../../services/transaction-note.service';
import { Transaction } from '../../../../models/Transaction';
import { Observable, tap } from 'rxjs';
import { TransactionNote } from '../../../../models/TransactionNote';

@Component({
  selector: 'app-add-transaction',
  imports: [FormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit{

  dateTime!:string
  amount!: number
  categoryName!: string 
  noteText!: string
  selectedCategoryId!: number
  categories : Category [] = []
  category!: Category
  note!: Note
  selectedType!: number
  transactionTypes: {id: number; type: string}[] = []
  transaction!: Transaction


  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService, 
    private noteService: NoteService,
    private transactionNoteService: TransactionNoteService,
    private router: Router)
    {}

    getTransactionType() : {id:number; type: string} []
    {
        return Object.keys(TransationType)
        .filter((key) => isNaN(Number(key)))
        .map((key) => ({
          id: TransationType[key as keyof typeof TransationType],
          type: key
        }))

    }


  ngOnInit(): void {
    this.categoryService.getAll().subscribe((u)=>this.categories = u)
    this.transactionTypes = this.getTransactionType()
    
  }

//  dateTime: string
//     amount: number
//     transactionType: TransationType
//     category?: Category
//     categoryId: number
//     transactionNotesList: TransactionNotes[]

  addCategory(): Observable<Category>
  {


     if(!this.categoryName)
        {
          
          return this.categoryService.get(this.selectedCategoryId)
          //  .subscribe( (u) => this.category=u) 
            
        }else
        {
          const newCategory = 
          {
            categoryName :this.categoryName,
            transactionList: [],
            accountUserBudgetList: []
  
          }
          return this.categoryService.add(newCategory)
          // .subscribe( (u) => this.category=u)
         
        }

      

  }
  addNote(): Observable<Note>
  {
    const newNote = {
      text: this.noteText,
      transactionNoteList: []
    }

    return this.noteService.add(newNote)
    // .subscribe((u)=> this.note = u)

  }

  addTransaction(id:any): Observable<Transaction>
  {
    console.log('This is the id for the categortyId')
    console.log(id)
    const newTransaction = 
    {
      datetime: this.dateTime,
      amount: this.amount,
      transactionType: this.selectedType,
      categoryId: id,
      transactionNoteList: []
    }

    
    return this.transactionService.add(newTransaction)
    // .subscribe((u)=> this.transaction = u)
  }

  addTransactionNote(): Observable<TransactionNote>
  {
      const newTransactionNote = {
        note: this.note,
        noteId: this.note.id,
        transaction: this.transaction,
        transactionId: this.transaction.id
      }

      return this.transactionNoteService.add(newTransactionNote)
      // .subscribe({
      //   next: () => {
      //     alert('Transaction Added')
      //     this.router.navigate(['/transaction'])
      //   },
      //   error: () => {
      //     alert('Error while adding transaction')
      //   }
      // })
  }

  onSubmit()
  {
    console.log(this.noteText)
    if(!this.dateTime || !this.amount || (!this.categoryName && !this.selectedCategoryId) || !this.selectedType)
      {
        alert('Please enter all of the fields needed')
        
      }
      
         this.addCategory()
         .subscribe( (u) => 
          {
            this.category = u
            console.log('This is the category')
            console.log(this.category)

            this.addNote().subscribe( (n)=> {
              this.note = n
              console.log('This is the note')
              console.log(this.note)

              this.addTransaction(u.id).subscribe( (t) => 
                {
                  this.transaction = t
                  console.log('This is the transaction')
                  console.log(this.transaction)

                  this.addTransactionNote().subscribe({
                    next: () => {
                      alert('Transaction Added')
                      this.router.navigate(['/transaction'])
                    },
                    error: () => {
                      alert('Error while adding transaction')
                    }
                  })
                })

            })

          })



    


  }
}
