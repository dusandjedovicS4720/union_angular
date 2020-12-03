import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionLogoComponent } from './union-logo.component';

describe('UnionLogoComponent', () => {
  let component: UnionLogoComponent;
  let fixture: ComponentFixture<UnionLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
