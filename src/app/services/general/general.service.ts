import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export abstract class GeneralService<T extends object> {

 protected url!:any

  constructor(private http:HttpClient,url: any)
  {
    this.url = url
  }


  getAll():Observable<T[]>{
    const url = `${this.url}/all`
    return this.http.get<T[]>(url);
 }

 get(index:number):Observable<T>
 {
    const url = `${this.url}/${index}`
    return this.http.get<T>(url)
 }

 add(budget: T):Observable<T>
 {
  return this.http.post<T>(this.url,budget,httpOptions)
 }

 edit(budget: T,index: number):Observable<T>
 {
  const url = `${this.url}/${index}`
  return this.http.put<T>(url,budget,httpOptions)
}

delete(index: number): Observable<T>
{
  const url = `${this.url}/${index}`
  return this.http.delete<T>(url,httpOptions)
}
}
