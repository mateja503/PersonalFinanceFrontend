import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInteface } from '../models/UserInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl = '/api/AccountUser'
  // apiUrl = 'http://localhost:5082/api/AccountUser'

  constructor(private http:HttpClient) { }

  get(): Observable<UserInteface>
  {
    const url = `${this.apiUrl}/validate-user`
    // localStorage.getItem('token')
    // console.log(localStorage.getItem('token'))
    return this.http.get<UserInteface>(url)
  }
}
