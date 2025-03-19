import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinancialGoalComponent } from './edit-financial-goal.component';

describe('EditFinancialGoalComponent', () => {
  let component: EditFinancialGoalComponent;
  let fixture: ComponentFixture<EditFinancialGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFinancialGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFinancialGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
