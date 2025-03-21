import { Injectable,signal } from '@angular/core';
import { UserInteface } from '../models/UserInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSignal = signal<UserInteface | undefined | null>(undefined)

}
