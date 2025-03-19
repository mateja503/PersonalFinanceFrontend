import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  imports: [FormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent implements OnInit {


  name!: string

  constructor(private categoryService: CategoryService,private router: Router, private route: ActivatedRoute){}

  public getCategoryId()
  {
    return Number(this.route.snapshot.paramMap.get('id')) || 0
  }

  ngOnInit(): void {
    this.categoryService.get(this.getCategoryId()).subscribe({
      next: (c) => {
        this.name = c.categoryName 
      },
      error: (err) => {
        alert(`No category with that id=${this.getCategoryId()} exists`)
      }
    })
  }

  onSubmit()
  {
    if(!this.name)
      {
        alert('Please enter the name of the category')
      }

    const newCategory = 
    {
      categoryName: this.name,
      transactionList: [],
      accountUserBudgetList: []
    }

    this.categoryService.edit(newCategory,this.getCategoryId()).subscribe({
      next: () => {
        this.router.navigate(['/category'])
      },
      error: () => {
        alert('Category failed to be updated. Please try again')
      }
    })

  }

}
