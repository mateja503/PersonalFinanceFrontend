import { Routes } from '@angular/router';
import { BudgetComponent } from './components/body/budget/budget.component';
import { HomeComponent } from './components/body/home/home.component';
import { CategoryComponent } from './components/body/category/category.component';

export const routes: Routes = [
         {path: '', redirectTo: "home", pathMatch: "full"},
        {path: 'home', component: HomeComponent},
        {path:'budget',component: BudgetComponent},
        {path: 'category',component: CategoryComponent}

];
