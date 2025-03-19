import { Routes } from '@angular/router';
import { BudgetComponent } from './components/body/budget/budget.component';
import { HomeComponent } from './components/body/home/home.component';
import { CategoryComponent } from './components/body/category/category.component';
import { AddBudgetComponent } from './components/body/budget/add-budget/add-budget.component';
 import { EditBudgetComponent } from './components/body/budget/edit-budget/edit-budget.component';
import { AddCategoryComponent } from './components/body/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/body/category/edit-category/edit-category.component';

export const routes: Routes = [
        {path: '', redirectTo: "home", pathMatch: "full"},
        {path: 'home', component: HomeComponent},

        //budget routes
        {path:'budget',component: BudgetComponent},
        {path: 'budget/add', component: AddBudgetComponent},
        {path: 'budget/edit/:id', component: EditBudgetComponent},

        //categorgy routes
        {path: 'category',component: CategoryComponent},
        {path: 'category/add',component: AddCategoryComponent},
        {path: 'category/edit/:id',component: EditCategoryComponent},
        

];
