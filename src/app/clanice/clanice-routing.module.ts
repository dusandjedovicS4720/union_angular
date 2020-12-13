import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClaniceHomeComponent} from "./clanice-home/clanice-home.component";

const routes: Routes = [
  {path: '', component: ClaniceHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaniceRoutingModule {
}
