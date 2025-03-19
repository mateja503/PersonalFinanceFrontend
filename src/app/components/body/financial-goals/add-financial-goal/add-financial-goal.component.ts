import { Component } from '@angular/core';
import { FinancialGoalsService } from '../../../../services/financial-goals.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-financial-goal',
  imports: [FormsModule],
  templateUrl: './add-financial-goal.component.html',
  styleUrl: './add-financial-goal.component.scss'
})
export class AddFinancialGoalComponent {
    goalText!: string
    goalReachInTime!: string
    amountGoal!: number
  

    constructor(private f : FinancialGoalsService, private router: Router){}
    onSubmit()
    {
      if(!this.goalText || !this.goalReachInTime || !this.amountGoal)
        {
          alert('Please enter the missing field')

        }

        const newGoal = {
          goalText: this.goalText,
          goalReachInTime: this.goalReachInTime,
          amountGoal : this.amountGoal,
          accountUserFinancialGoalList: [],
        }

        this.f.add(newGoal).subscribe({
          next: () => {
            alert('New Goal added')
            this.router.navigate(['/financialGoals'])
          },
          error: () => {
            alert('Cant add the goal')
          }
        })

      

    }
}
