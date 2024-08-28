import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorHeaderComponent } from './investor-header.component';

describe('InvestorHeaderComponent', () => {
  let component: InvestorHeaderComponent;
  let fixture: ComponentFixture<InvestorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorHeaderComponent]
    });
    fixture = TestBed.createComponent(InvestorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
