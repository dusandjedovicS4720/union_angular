import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {KontaktHomeComponent} from './kontakt-home/kontakt-home.component';

const routes: Routes = [
  {path: '', component: KontaktHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontaktRoutingModule {
}
