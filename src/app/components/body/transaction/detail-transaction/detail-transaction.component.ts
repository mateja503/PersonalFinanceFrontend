import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/Category';
import { Transaction } from '../../../../models/Transaction';
import { TransactionNote } from '../../../../models/TransactionNote';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { CategoryService } from '../../../../services/category.service';
import { NoteService } from '../../../../services/note.service';
import { TransactionNoteService } from '../../../../services/transaction-note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransationType } from '../../../../models/enumiration/TransationType';
import { Note } from '../../../../models/Note';
import { ButtonComponent } from "../../../button/button.component";

@Component({
  selector: 'app-detail-transaction',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './detail-transaction.component.html',
  styleUrl: './detail-transaction.component.scss'
})
export class DetailTransactionComponent implements OnInit {

  datetime!:string
  amount!: number
  selectedCategoryId?: number
  categories : Category [] = []
  category?: Category
  selectedType!: number
  transactionTypes: {id: number; type: string}[] = []
  transaction!: Transaction
  transactionNoteList: TransactionNote [] = []
  notesList: Note [] = []
  noteText!: string


  
  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService, 
    private noteService: NoteService,
    private transactionNoteService: TransactionNoteService,
    private router: Router,
    private route: ActivatedRoute)
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

    getTranasctionId()
    {
        return Number(this.route.snapshot.paramMap.get('id')) || 0
    }

    
  formatDate(inputDate: string): string{
    const date = new Date(inputDate)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2,'0')
    const day = String(date.getDate()).padStart(2,'0')
    return `${year}-${month}-${day}`
  }

    ngOnInit(): void {

      this.transactionService.get(this.getTranasctionId()).subscribe({
        next: (t) => {
            this.selectedCategoryId = t.categoryId
            this.selectedType = Number(t.transactionType)
            this.datetime = this.formatDate(t.dateTime)
            this.amount = t.amount
            
            this.transactionNoteService.getAll().subscribe({
              next: (u) => 
                {
                  this.transactionNoteList = u.filter((tn)=>tn.transactionId === t.id)
                 


                  this.noteService.getAll().subscribe({
                    next: (notes) =>
                      {
                        notes = notes.filter((n)=> this.transactionNoteList.some((u)=> u.noteId === n.id))
                        this.notesList = notes
                        
                      }
                      
                  })

                }
            })

            
        }
        
      })
     

      this.categoryService.getAll().subscribe((u)=>this.categories = u)
      this.transactionTypes = this.getTransactionType()  


    
    }

    changeNoteText(id:any,text:any)
    {
      console.log('Created note')
      console.log(id)
      console.log('Created text for the note')
      console.log(text)
      this.noteService.get(id).subscribe({
        next: (note) => 
          {
            const newNote = 
            {
              text: text,
              transactionNoteList: [] 
            }

            this.noteService.edit(newNote,id).subscribe({
              next: () => 
                {
                  alert('Updated note for the transaction')
                  const url  = `/transaction/detail/${this.getTranasctionId()}`
                  this.router.navigate([url])
                },
                error : () => 
                  {
                    alert('Error while editing Note')
                  }
            })
          }
      })
     

       
    }

    addNewField()
    {
      this.transactionService.get(this.getTranasctionId()).subscribe( {
        next: (t) => 
          {
            const newNote = 
            {
              text: '',
              transactionNoteList: []
              
            }
              this.noteService.add(newNote).subscribe({
                next: (note) => 
                  {
                    console.log(note)
                    const newTransactionNoteService = {
                      noteId: note.id,
                      transactionId: t.id
                    }
                    this.transactionNoteService.add(newTransactionNoteService).subscribe({
                      next: () => 
                        {
                          alert('New note added to transaction')
                          // const url = `/transaction/detail/${this.getTranasctionId()}`
                          // this.router.navigate([url])
                          this.notesList.push(note)
                          console.log(this.notesList)
                        },
                        error: () => 
                          {
                            alert('Cant add note to the transaction')
                          }

                    })
                  }
              })
          }
      })
    }

    deleteNote(id:any)
    {
      this.noteService.delete(id).subscribe({
        next: () =>
          {
            alert('Note is deleted from transaction')
            this.notesList = this.notesList.filter((u) => u.id !== id)
          },
          error: () => 
            {
              alert('Error while removing the the note from the transaction')
            }
      })
    }
  }
