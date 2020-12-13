import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ONamaRoutingModule} from './o-nama-routing.module';

import {SharedModule} from "../shared/shared.module";

import {RektorUniverzitetaComponent} from './o-nama-home/rektor-univerziteta/rektor-univerziteta.component';
import {SenatSavetUniverzitetaComponent} from './o-nama-home/senat-savet-univerziteta/senat-savet-univerziteta.component';
import {IstorijatComponent} from './o-nama-home/istorijat/istorijat.component';
import {AkreditacijaComponent} from './o-nama-home/akreditacija/akreditacija.component';
import {ONamaHomeComponent} from "./o-nama-home/o-nama-home.component";

@NgModule({
  declarations: [ONamaHomeComponent, IstorijatComponent, RektorUniverzitetaComponent, SenatSavetUniverzitetaComponent, AkreditacijaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ONamaRoutingModule
  ]
})
export class ONamaModule {
}
