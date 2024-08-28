import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOfferDetailComponent } from './live-offer-detail.component';

describe('LiveOfferDetailComponent', () => {
  let component: LiveOfferDetailComponent;
  let fixture: ComponentFixture<LiveOfferDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveOfferDetailComponent]
    });
    fixture = TestBed.createComponent(LiveOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
