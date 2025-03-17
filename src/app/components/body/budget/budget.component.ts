import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../models/Budget';
import { BudgetService } from '../../../services/budget.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-budget',
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent implements OnInit {

  budgets: Budget[] = []

  constructor(private budgetService: BudgetService) {}




  ngOnInit(): void {
  this.budgetService.getAll().subscribe((b) => this.budgets = b)
  console.log(this.budgets)
  }

}
