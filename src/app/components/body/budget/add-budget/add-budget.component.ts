import { Component, Output,EventEmitter } from '@angular/core';
import { BudgetService } from '../../../../services/budget.service';
import { FormsModule } from '@angular/forms';
import { Budget } from '../../../../models/Budget';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-budget',
  imports: [FormsModule],
  templateUrl: './add-budget.component.html',
  styleUrl: './add-budget.component.scss'
})
export class AddBudgetComponent {

  // @Output() onAddBudget: EventEmitter<Budget> = new EventEmitter(); // when the child component has to emit to the parent component

  amount! : number
  date! : string
  newBudget!: Budget
  constructor(private budgetService: BudgetService,private router: Router){}

      onSubmit()
      { 
       
        if(!this.date)
          {
            alert('Please add the date')
          }
        if(!this.amount)
          {
            alert('Please add the amount')
          }
          

         this.newBudget = 
         {
              budgetMonth: this.date,
              budgetAmount: this.amount,
              accountUserBudgetList: []
         }

          // return this.budgetService.add(newBudget)
          this.budgetService.add(this.newBudget).subscribe({
            next: (addedBudget) => {
              console.log('Budget added successufully: ',addedBudget)
              alert('Budget added successfully!!')
              this.router.navigate(['/budget'])
            },
            error: (err) =>{
              console.error('Error', err)
              alert('Error adding budget. Please try again')
            }
          }
        )


      }

}
