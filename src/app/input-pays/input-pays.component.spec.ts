import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPaysComponent } from './input-pays.component';

describe('InputPaysComponent', () => {
  let component: InputPaysComponent;
  let fixture: ComponentFixture<InputPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
