import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asking } from './asking';

describe('Asking', () => {
  let component: Asking;
  let fixture: ComponentFixture<Asking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Asking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
