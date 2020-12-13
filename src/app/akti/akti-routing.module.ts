import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClaniceHomeComponent} from "../clanice/clanice-home/clanice-home.component";

import {AktiHomeComponent} from "./akti-home/akti-home.component";

const routes: Routes = [
  {path: '', component: AktiHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AktiRoutingModule {
}
