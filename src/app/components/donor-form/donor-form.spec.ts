import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorForm } from './donor-form';

describe('DonorForm', () => {
  let component: DonorForm;
  let fixture: ComponentFixture<DonorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
