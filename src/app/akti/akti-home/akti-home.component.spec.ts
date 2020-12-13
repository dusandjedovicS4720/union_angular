import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktiHomeComponent } from './akti-home.component';

describe('AktiHomeComponent', () => {
  let component: AktiHomeComponent;
  let fixture: ComponentFixture<AktiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
