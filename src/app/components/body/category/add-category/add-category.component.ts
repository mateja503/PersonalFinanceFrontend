import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  name!:string

  constructor(private categoryService: CategoryService,private router: Router){}


  onSubmit()
  {
    if(!this.name)
      {
        alert('Please enter the name')
        return
      }
      const category = 
      {
        categoryName:this.name,
        transactionList:[],
        accountUserBudgetList:[]
      }
      this.categoryService.add(category).subscribe({
        next: () =>{
          alert('The category has been saved')
          this.router.navigate(['/category'])
        },
        error: () => {
          alert('An error has occured please try again')
        }
      })

  }
}
