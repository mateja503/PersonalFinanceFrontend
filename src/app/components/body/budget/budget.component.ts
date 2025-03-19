import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../models/Budget';
import { BudgetService } from '../../../services/budget.service';
import { ButtonComponent } from "../../button/button.component";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-budget',
  imports: [ButtonComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent implements OnInit {

  budgets: Budget[] = []

  constructor(private budgetService: BudgetService,
    private route: ActivatedRoute, 
    private router: Router) {}

    // formatDate(inputDate: string): string{
    //   const date = new Date(inputDate)
    //   const year = date.getFullYear()
    //   const month = String(date.getMonth() + 1).padStart(2,'0')
    //   const day = String(date.getDay() + 1).padStart(2,'0')
    //   return `${year}-${month}-${day}`
    // }
    
  ngOnInit(): void {
      this.loadBudgets()
      // this.budgets.forEach((u) => u.budgetMonth = this.formatDate(u.budgetMonth))
  }

  loadBudgets(): void{
    this.budgetService.getAll().subscribe((b) => this.budgets = b)
  }

  onEdit(id:any,budget: Budget) : void
  {
    const url = `/budget/edit/${id}`
    this.router.navigate([url])
  }

  onAdd():void
  {
    this.router.navigate(['/budget/add'])

  }

   onDelete(id: any)
  {
    this.budgetService.delete(id).subscribe({
      next: (budget) => {
        // this.budgets = this.budgets.filter((b) => b.id !== budget.id); 
        this.loadBudgets()
      }
    })
      
  }

}
