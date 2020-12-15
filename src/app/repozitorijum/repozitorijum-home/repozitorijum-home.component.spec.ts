import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepozitorijumHomeComponent } from './repozitorijum-home.component';

describe('RepozitorijumHomeComponent', () => {
  let component: RepozitorijumHomeComponent;
  let fixture: ComponentFixture<RepozitorijumHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepozitorijumHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepozitorijumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
