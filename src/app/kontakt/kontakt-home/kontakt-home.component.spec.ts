import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktHomeComponent } from './kontakt-home.component';

describe('KontaktHomeComponent', () => {
  let component: KontaktHomeComponent;
  let fixture: ComponentFixture<KontaktHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
