import { TestBed } from '@angular/core/testing';

import { TransactionNoteService } from './transaction-note.service';

describe('TransactionNoteService', () => {
  let service: TransactionNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
