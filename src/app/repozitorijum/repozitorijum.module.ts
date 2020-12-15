import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepozitorijumRoutingModule } from './repozitorijum-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { RepozitorijumHomeComponent } from './repozitorijum-home/repozitorijum-home.component';
import { DisertacijaPdfCellRendererComponent } from './repozitorijum-home/disertacija-pdf-cell-renderer/disertacija-pdf-cell-renderer.component';
import { IzvestajKomisijePdfCellRendererComponent } from './repozitorijum-home/izvestaj-komisije-pdf-cell-renderer/izvestaj-komisije-pdf-cell-renderer.component';

@NgModule({
  declarations: [RepozitorijumHomeComponent, DisertacijaPdfCellRendererComponent, IzvestajKomisijePdfCellRendererComponent],
  imports: [
    CommonModule,
    RepozitorijumRoutingModule,
    SharedModule,
    AgGridModule.withComponents(),
  ],
})
export class RepozitorijumModule {}
