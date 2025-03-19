import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { FinancialGoals } from '../../../models/FinancialGoals';
import { FinancialGoalsService } from '../../../services/financial-goals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-goals',
  imports: [ButtonComponent],
  templateUrl: './financial-goals.component.html',
  styleUrl: './financial-goals.component.scss'
})
export class FinancialGoalsComponent implements OnInit {
 

  goals: FinancialGoals[] = []

  constructor(private financialGoalService: FinancialGoalsService, private router:Router){}

  ngOnInit(): void {
    this.financialGoalService.getAll().subscribe((u)=> this.goals = u)
  }

  onAdd()
  {
    this.router.navigate(['/financialGoals/add'])
  }

  onEdit(id:any, f: FinancialGoals)
  {
      const url = `/financialGoals/edit/${id}`
      this.router.navigate([url])
  }
  onDelete(id:any)
  {
    this.financialGoalService.delete(id).subscribe({
      next: ()=>{
        alert('Goal Deleted!!')
        this.goals = this.goals.filter((u)=>u.id !== id)
      },
      error: () => {
        alert('Error when trying to delete Goal')
      } 
    })
  }


  
}
