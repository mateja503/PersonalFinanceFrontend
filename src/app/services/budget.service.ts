import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../models/Budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private  apiUrl = 'http://localhost:5082/api/Budget/' 
   constructor(private http:HttpClient) { }

   getAll():Observable<Budget[]>{
      return this.http.get<Budget[]>(this.apiUrl+"all");
   }
}
