import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from './general/general.service';
import { FinancialGoals } from '../models/FinancialGoals';

@Injectable({
  providedIn: 'root'
})
export class FinancialGoalsService extends GeneralService<FinancialGoals> {

  constructor(http:HttpClient) 
  {
    super(http,'/api/FinancialGoals')
        // super(http,'http://localhost:5082/api/FinancialGoals')

  }
}
