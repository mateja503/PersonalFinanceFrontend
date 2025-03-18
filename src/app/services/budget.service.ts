import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../models/Budget';
import { GeneralService } from './general/general.service';



@Injectable({
  providedIn: 'root'
})
export class BudgetService extends GeneralService<Budget> {

   constructor(http: HttpClient) 
   {
      super(http,'http://localhost:5082/api/Budget')
  }

 
}
