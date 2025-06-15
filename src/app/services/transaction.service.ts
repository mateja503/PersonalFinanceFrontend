import { Injectable } from '@angular/core';
import { GeneralService } from './general/general.service';
import { Transaction } from '../models/Transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends GeneralService<Transaction> {
  constructor(http: HttpClient) 
  {
    super(http,'/api/Transaction')
        // super(http,'http://localhost:5082/api/Transaction')

  }
}
