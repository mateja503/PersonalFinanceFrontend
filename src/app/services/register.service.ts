
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountUserLoginModel } from '../models/AccountUserLoginModel';
import { AccountUserRegisterModel } from '../models/AccountUserRegisterModel';
import { UserInteface } from '../models/UserInterface';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'http://localhost:5082/api/AccountUser/register'
  constructor(private http:HttpClient) { }


  register(userRegister:AccountUserRegisterModel):Observable<UserInteface>
  {

    return this.http.post<UserInteface>(this.apiUrl,userRegister,httpOptions)
  }
  
}

