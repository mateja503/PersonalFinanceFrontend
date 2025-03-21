import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountUserLoginModel } from '../models/AccountUserLoginModel';
import { UserInteface } from '../models/UserInterface';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:5082/api/AccountUser/login'
  constructor(private http:HttpClient) { }


  login(userLogin:AccountUserLoginModel):Observable<UserInteface>
  {

    return this.http.post<UserInteface>(this.apiUrl,userLogin,httpOptions)
  }
  
}

