import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmAddCompanyComponent } from './em-add-company.component';

describe('EmAddCompanyComponent', () => {
  let component: EmAddCompanyComponent;
  let fixture: ComponentFixture<EmAddCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmAddCompanyComponent]
    });
    fixture = TestBed.createComponent(EmAddCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
