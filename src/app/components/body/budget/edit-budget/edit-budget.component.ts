import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../../models/Budget';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../../../../services/budget.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-budget',
  imports: [FormsModule],
  templateUrl: './edit-budget.component.html',
  styleUrl: './edit-budget.component.scss'
})
export class EditBudgetComponent implements OnInit {

  amount?: number
  date!: string
  budget!: Budget
  updatedBudget!: Budget
  constructor(private budgetService: BudgetService,private route:ActivatedRoute, private router: Router){}

  public getBudgetId(){
    return Number(this.route.snapshot.paramMap.get('id')) || 0;
  }

  formatDate(inputDate: string): string{
    const date = new Date(inputDate)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2,'0')
    const day = String(date.getDate()).padStart(2,'0')
    return `${year}-${month}-${day}`
  }

  ngOnInit(): void {
   
    this.budgetService.get(this.getBudgetId()).subscribe((b) =>{

      this.budget = b
      this.amount = this.budget.budgetAmount
      this.date = this.formatDate(this.budget.budgetMonth)
    })

  }

 

  onSubmit()
  {
   const newBudget = {
      budgetAmount : this.amount,
      budgetMonth: this.date,
      accountUserBudgetList : []
   }

    this.budgetService.edit(newBudget,this.getBudgetId()).subscribe({
      next: (b) => {
        alert('Budget updated successufully')
        this.router.navigate(['/budget'])
      },
      error: (err) => {
        alert('Error budget not updated please try again')
      }
    })

  }
}
