import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajKomisijePdfCellRendererComponent } from './izvestaj-komisije-pdf-cell-renderer.component';

describe('IzvestajKomisijePdfCellRendererComponent', () => {
  let component: IzvestajKomisijePdfCellRendererComponent;
  let fixture: ComponentFixture<IzvestajKomisijePdfCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvestajKomisijePdfCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajKomisijePdfCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
