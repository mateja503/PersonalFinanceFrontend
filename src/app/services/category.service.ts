import { Injectable } from '@angular/core';
import { GeneralService } from './general/general.service';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GeneralService<Category> {

  constructor(http: HttpClient) 
  {
     super(http,'http://localhost:5082/api/Category')
 }
}
