import { Injectable } from '@angular/core';
import { GeneralService } from './general/general.service';
import { Note } from '../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends GeneralService<Note> {

  constructor(http: HttpClient) 
  {
    super(http,'/api/Note')
        // super(http,'http://localhost:5082/api/Note')

  }
}
