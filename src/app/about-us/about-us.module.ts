import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsRoutingModule} from './about-us-routing.module';

import {SharedModule} from "../../shared/shared.module";

import {AboutUsHomeComponent} from './about-us-home/about-us-home.component';

@NgModule({
  declarations: [AboutUsHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule {
}
