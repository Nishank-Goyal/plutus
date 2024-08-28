import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmCompanyDetailComponent } from './em-company-detail.component';

describe('EmCompanyDetailComponent', () => {
  let component: EmCompanyDetailComponent;
  let fixture: ComponentFixture<EmCompanyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmCompanyDetailComponent]
    });
    fixture = TestBed.createComponent(EmCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
