import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoCardsComponent } from './general-info-cards.component';

describe('GeneralInfoCardsComponent', () => {
  let component: GeneralInfoCardsComponent;
  let fixture: ComponentFixture<GeneralInfoCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralInfoCardsComponent]
    });
    fixture = TestBed.createComponent(GeneralInfoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
