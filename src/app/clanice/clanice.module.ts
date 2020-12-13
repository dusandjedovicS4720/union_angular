import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../shared/shared.module";
import {ClaniceRoutingModule} from "./clanice-routing.module";

import {ClaniceHomeComponent} from './clanice-home/clanice-home.component';

@NgModule({
  declarations: [ClaniceHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClaniceRoutingModule
  ]
})
export class ClaniceModule {
}
