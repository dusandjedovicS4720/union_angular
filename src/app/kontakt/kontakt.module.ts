import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../shared/shared.module";
import {KontaktRoutingModule} from './kontakt-routing.module';

import {KontaktHomeComponent} from "./kontakt-home/kontakt-home.component";

@NgModule({
  declarations: [KontaktHomeComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    KontaktRoutingModule
  ]
})
export class KontaktModule {
}
