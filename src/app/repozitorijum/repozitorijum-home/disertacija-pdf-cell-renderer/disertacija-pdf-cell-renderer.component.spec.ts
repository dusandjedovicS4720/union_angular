import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisertacijaPdfCellRendererComponent } from './disertacija-pdf-cell-renderer.component';

describe('DisertacijaPdfCellRendererComponent', () => {
  let component: DisertacijaPdfCellRendererComponent;
  let fixture: ComponentFixture<DisertacijaPdfCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisertacijaPdfCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisertacijaPdfCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
