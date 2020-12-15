import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepozitorijumHomeComponent } from './repozitorijum-home/repozitorijum-home.component';

const routes: Routes = [
  {path: '', component: RepozitorijumHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepozitorijumRoutingModule { }
