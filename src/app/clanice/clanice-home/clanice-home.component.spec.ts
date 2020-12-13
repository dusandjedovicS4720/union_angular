import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaniceHomeComponent } from './clanice-home.component';

describe('ClaniceHomeComponent', () => {
  let component: ClaniceHomeComponent;
  let fixture: ComponentFixture<ClaniceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaniceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaniceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
