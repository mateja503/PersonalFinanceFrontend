import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../models/Budget';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private  apiUrl = 'http://localhost:5082/api/Budget' 
   constructor(private http:HttpClient) { }

   getAll():Observable<Budget[]>{
      const url = `${this.apiUrl}/all`
      return this.http.get<Budget[]>(url,httpOptions);
   }

   get(index:number):Observable<Budget>
   {
      const url = `${this.apiUrl}/${index}`
      return this.http.get<Budget>(url,httpOptions)
   }

   add(budget: Budget):Observable<Budget>
   {
    return this.http.post<Budget>(this.apiUrl,budget,httpOptions)
   }

   edit(budget: Budget,index: number):Observable<Budget>
   {
    const url = `${this.apiUrl}/${index}`
    return this.http.put<Budget>(url,budget,httpOptions)
  }

  delete(index: number): Observable<Budget>
  {
    const url = `${this.apiUrl}/${index}`
    return this.http.delete<Budget>(url,httpOptions)
  }
   

}
