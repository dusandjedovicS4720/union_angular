import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OUniverzitetuHomeComponent} from "./o-univerzitetu-home.component";

describe('OUniverzitetuHomeComponent', () => {
  let component: OUniverzitetuHomeComponent;
  let fixture: ComponentFixture<OUniverzitetuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OUniverzitetuHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OUniverzitetuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
