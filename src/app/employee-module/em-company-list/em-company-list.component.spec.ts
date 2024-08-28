import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmCompanyListComponent } from './em-company-list.component';

describe('EmCompanyListComponent', () => {
  let component: EmCompanyListComponent;
  let fixture: ComponentFixture<EmCompanyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmCompanyListComponent]
    });
    fixture = TestBed.createComponent(EmCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
