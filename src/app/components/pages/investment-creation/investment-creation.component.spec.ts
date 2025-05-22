import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCreationComponent } from './investment-creation.component';

describe('InvestmentCreationComponent', () => {
  let component: InvestmentCreationComponent;
  let fixture: ComponentFixture<InvestmentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
