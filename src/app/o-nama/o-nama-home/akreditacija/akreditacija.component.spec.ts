import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkreditacijaComponent } from './akreditacija.component';

describe('AkreditacijaComponent', () => {
  let component: AkreditacijaComponent;
  let fixture: ComponentFixture<AkreditacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkreditacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkreditacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
