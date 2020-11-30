import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import {ContactRoutingModule} from './contact-routing.module';
import {ContactHomeComponent} from './contact-home/contact-home.component';

@NgModule({
  declarations: [ContactHomeComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {
}
