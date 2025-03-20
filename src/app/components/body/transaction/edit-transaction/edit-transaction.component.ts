import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/Category';
import { Note } from '../../../../models/Note';
import { Transaction } from '../../../../models/Transaction';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { CategoryService } from '../../../../services/category.service';
import { NoteService } from '../../../../services/note.service';
import { TransactionNoteService } from '../../../../services/transaction-note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransationType } from '../../../../models/enumiration/TransationType';
import { TransactionNote } from '../../../../models/TransactionNote';

@Component({
  selector: 'app-edit-transaction',
  imports: [FormsModule],
  templateUrl: './edit-transaction.component.html',
  styleUrl: './edit-transaction.component.scss'
})
export class EditTransactionComponent implements OnInit {

  datetime!:string
  amount!: number
  selectedCategoryId?: number
  categories : Category [] = []
  category?: Category
  selectedType!: number
  transactionTypes: {id: number; type: string}[] = []
  transaction!: Transaction
  transactionNoteList: TransactionNote [] = []

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

    getTranasctionNoteId()
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
      this.transactionService.get(this.getTranasctionNoteId()).subscribe({
        next: (t) => {
            this.selectedCategoryId = t.categoryId
            this.selectedType = Number(t.transactionType)
            this.datetime = this.formatDate(t.dateTime)
            this.amount = t.amount
            this.transactionNoteList = t.transactionNoteList
        }
      })


      this.categoryService.getAll().subscribe((u)=>this.categories = u)
      this.transactionTypes = this.getTransactionType()  
    
    }

  onSubmit(){


    this.categoryService.get(Number(this.selectedCategoryId)).subscribe({
      next: (c) => 
        {
            this.category = c

       
                const newTransaction = 
                {
                  dateTime: this.datetime,
                  amount: this.amount,
                  transactionType: Number(this.selectedType),
                  categoryId: Number(this.selectedCategoryId),
                  transactionNoteList: []
                }
                console.log(newTransaction)
                this.transactionService.edit(newTransaction,this.getTranasctionNoteId())
                      .subscribe({
                        next: () => 
                          {
                            alert('Transaction Edited')
                            this.router.navigate(['/transaction'])
                          },
                          error :(err) => 
                            {
                              console.log(err)
                              alert('Error while editing Transaction')
                            }
                      })

                          }
                      })
  }
}
