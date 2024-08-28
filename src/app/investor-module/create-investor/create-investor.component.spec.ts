import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvestorComponent } from './create-investor.component';

describe('CreateInvestorComponent', () => {
  let component: CreateInvestorComponent;
  let fixture: ComponentFixture<CreateInvestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInvestorComponent]
    });
    fixture = TestBed.createComponent(CreateInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
