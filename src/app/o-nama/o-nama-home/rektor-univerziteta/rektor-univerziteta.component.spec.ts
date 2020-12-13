import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RektorUniverzitetaComponent } from './rektor-univerziteta.component';

describe('RektorUniverzitetaComponent', () => {
  let component: RektorUniverzitetaComponent;
  let fixture: ComponentFixture<RektorUniverzitetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RektorUniverzitetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RektorUniverzitetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
