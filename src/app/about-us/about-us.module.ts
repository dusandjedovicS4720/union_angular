import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsRoutingModule} from './about-us-routing.module';

import {SharedModule} from "../shared/shared.module";

import {AboutUsHomeComponent} from './about-us-home/about-us-home.component';
import {UkratkoComponent} from './about-us-home/ukratko/ukratko.component';
import {RektorUniverzitetaComponent} from './about-us-home/rektor-univerziteta/rektor-univerziteta.component';
import {SenatSavetUniverzitetaComponent} from './about-us-home/senat-savet-univerziteta/senat-savet-univerziteta.component';

@NgModule({
  declarations: [AboutUsHomeComponent, UkratkoComponent, RektorUniverzitetaComponent, SenatSavetUniverzitetaComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule {
}
