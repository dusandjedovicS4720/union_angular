import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ONamaHomeComponent} from "./o-nama-home.component";

describe('ONamaHomeComponent', () => {
  let component: ONamaHomeComponent;
  let fixture: ComponentFixture<ONamaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ONamaHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ONamaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
