import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { Transaction } from '../../../models/Transaction';
import { TransactionService } from '../../../services/transaction.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { TransationType } from '../../../models/enumiration/TransationType';

@Component({
  selector: 'app-transaction',
  imports: [ButtonComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = []

  constructor(private transactionService: TransactionService, private categoryService: CategoryService,private router: Router){}

  loadTransactions()
  {
    this.transactionService.getAll().subscribe((u)=>{
      u.forEach((t)=> {
        if(t.categoryId!=null)
          {
            this.categoryService.get(t.categoryId).subscribe((u)=> t.category = u)
          }
       
         console.log(t)
      })

      this.transactions = u

    })

    return this.transactions
  }

  ngOnInit(): void {
    this.loadTransactions()
  }

 

  onAdd()
  {

    this.router.navigate(['/transaction/add'])
  }

  onEdit(id:any,t:Transaction)
  {


  }

  onDelete(id:any)
  {


  }

  onDetail(id:any)
  {


  }
}
