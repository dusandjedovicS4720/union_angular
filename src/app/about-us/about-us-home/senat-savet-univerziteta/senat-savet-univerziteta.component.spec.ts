import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatSavetUniverzitetaComponent } from './senat-savet-univerziteta.component';

describe('SenatSavetUniverzitetaComponent', () => {
  let component: SenatSavetUniverzitetaComponent;
  let fixture: ComponentFixture<SenatSavetUniverzitetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatSavetUniverzitetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatSavetUniverzitetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
