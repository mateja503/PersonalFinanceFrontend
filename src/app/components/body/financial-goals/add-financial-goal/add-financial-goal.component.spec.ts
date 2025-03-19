import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialGoalComponent } from './add-financial-goal.component';

describe('AddFinancialGoalComponent', () => {
  let component: AddFinancialGoalComponent;
  let fixture: ComponentFixture<AddFinancialGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFinancialGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinancialGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
