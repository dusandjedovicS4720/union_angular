import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";

import {AktiRoutingModule} from './akti-routing.module';
import {AktiHomeComponent} from './akti-home/akti-home.component';

@NgModule({
  declarations: [AktiHomeComponent],
  imports: [
    CommonModule,
    AktiRoutingModule,
    SharedModule
  ]
})
export class AktiModule {
}
