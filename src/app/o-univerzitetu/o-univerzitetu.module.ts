import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OUniverzitetuRoutingModule } from './o-univerzitetu-routing.module';

import { SharedModule } from '../shared/shared.module';

import { RektorUniverzitetaComponent } from './o-univerzitetu-home/rektor-univerziteta/rektor-univerziteta.component';
import { SenatSavetUniverzitetaComponent } from './o-univerzitetu-home/senat-savet-univerziteta/senat-savet-univerziteta.component';
import { IstorijatComponent } from './o-univerzitetu-home/istorijat/istorijat.component';
import { AkreditacijaComponent } from './o-univerzitetu-home/akreditacija/akreditacija.component';
import { OUniverzitetuHomeComponent } from './o-univerzitetu-home/o-univerzitetu-home.component';

@NgModule({
  declarations: [
    OUniverzitetuHomeComponent,
    IstorijatComponent,
    RektorUniverzitetaComponent,
    SenatSavetUniverzitetaComponent,
    AkreditacijaComponent,
  ],
  imports: [CommonModule, SharedModule, OUniverzitetuRoutingModule],
})
export class OUniverzitetuModule {}
