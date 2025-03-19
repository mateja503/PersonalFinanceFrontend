import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialGoalsService } from '../../../../services/financial-goals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-financial-goal',
  imports: [FormsModule],
  templateUrl: './edit-financial-goal.component.html',
  styleUrl: './edit-financial-goal.component.scss'
})
export class EditFinancialGoalComponent implements OnInit {
  goalText!: string
    goalReachInTime!: string
    amountGoal!: number

    constructor (private f: FinancialGoalsService, private router: Router, private route: ActivatedRoute) {}

  public getGoalId(){
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
    this.f.get(this.getGoalId()).subscribe({
        next: (c) => {
          this.goalText = c.goalText
          this.goalReachInTime = this.formatDate(c.goalReachInTime)
          this.amountGoal = c.amountGoal
        }
    })
  }

    onSubmit(){
       const newGoal = {
        goalText: this.goalText,
        goalReachInTime: this.goalReachInTime,
        amountGoal: this.amountGoal,
        accountUserFinancialGoalList: []
    
       }

       this.f.edit(newGoal,this.getGoalId()).subscribe({
        next: () => {
          alert('The goal is updated')
          this.router.navigate(['/financialGoals'])
        },
        error:()=>{
          alert('Error then trying to update the goal!!')
        }
       })
    }
}
