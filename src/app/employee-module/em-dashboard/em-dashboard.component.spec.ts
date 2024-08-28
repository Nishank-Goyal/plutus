import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmDashboardComponent } from './em-dashboard.component';

describe('EmDashboardComponent', () => {
  let component: EmDashboardComponent;
  let fixture: ComponentFixture<EmDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmDashboardComponent]
    });
    fixture = TestBed.createComponent(EmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
