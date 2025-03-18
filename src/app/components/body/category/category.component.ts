import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [ButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  

  categories: Category[] = []

  constructor(private categoryService: CategoryService,private router: Router){}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((c) => this.categories = c)
  }

  onAdd(): void
  {
      this.router.navigate(['/category/add'])
  }

  onEdit(id:any,category:Category)
  {
    // const url = `/category/edit/${id}`
    // this.router.navigate([`/category/edit/${id}`])
  }

  onDelete(id:any)
  {


  }
}
