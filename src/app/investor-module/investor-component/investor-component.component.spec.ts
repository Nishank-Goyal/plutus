import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorComponentComponent } from './investor-component.component';

describe('InvestorComponentComponent', () => {
  let component: InvestorComponentComponent;
  let fixture: ComponentFixture<InvestorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorComponentComponent]
    });
    fixture = TestBed.createComponent(InvestorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
