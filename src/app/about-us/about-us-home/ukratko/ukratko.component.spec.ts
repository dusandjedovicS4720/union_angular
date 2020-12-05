import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkratkoComponent } from './ukratko.component';

describe('UkratkoComponent', () => {
  let component: UkratkoComponent;
  let fixture: ComponentFixture<UkratkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkratkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkratkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
