import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IstorijatComponent} from './o-nama-home/istorijat/istorijat.component';
import {RektorUniverzitetaComponent} from "./o-nama-home/rektor-univerziteta/rektor-univerziteta.component";
import {SenatSavetUniverzitetaComponent} from "./o-nama-home/senat-savet-univerziteta/senat-savet-univerziteta.component";
import {AkreditacijaComponent} from "./o-nama-home/akreditacija/akreditacija.component";
import {ONamaHomeComponent} from "./o-nama-home/o-nama-home.component";

const routes: Routes = [
  {
    path: '',
    component: ONamaHomeComponent,
    children: [
      {
        path: 'istorijat', component: IstorijatComponent,
      },
      {
        path: 'rektorUniverziteta', component: RektorUniverzitetaComponent,
      },
      {
        path: 'senatSavetUniverziteta', component: SenatSavetUniverzitetaComponent,
      },
      {
        path: 'akreditacija', component: AkreditacijaComponent,
      },
      {
        path: '**', redirectTo: 'istorijat'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ONamaRoutingModule {
}
