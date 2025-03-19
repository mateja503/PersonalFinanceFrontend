import { Injectable } from '@angular/core';
import { GeneralService } from './general/general.service';
import { TransactionNote } from '../models/TransactionNote';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionNoteService extends GeneralService<TransactionNote> {

  constructor(http: HttpClient) 
  {
    super(http,'http://localhost:5082/api/TransactionNote')
    
   }
}
