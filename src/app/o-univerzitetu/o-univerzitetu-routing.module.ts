import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstorijatComponent } from './o-univerzitetu-home/istorijat/istorijat.component';
import { RektorUniverzitetaComponent } from './o-univerzitetu-home/rektor-univerziteta/rektor-univerziteta.component';
import { SenatSavetUniverzitetaComponent } from './o-univerzitetu-home/senat-savet-univerziteta/senat-savet-univerziteta.component';
import { AkreditacijaComponent } from './o-univerzitetu-home/akreditacija/akreditacija.component';
import { OUniverzitetuHomeComponent } from './o-univerzitetu-home/o-univerzitetu-home.component';

const routes: Routes = [
  {
    path: '',
    component: OUniverzitetuHomeComponent,
    children: [
      {
        path: 'istorijat',
        component: IstorijatComponent,
      },
      {
        path: 'rektorUniverziteta',
        component: RektorUniverzitetaComponent,
      },
      {
        path: 'senatSavetUniverziteta',
        component: SenatSavetUniverzitetaComponent,
      },
      {
        path: 'akreditacija',
        component: AkreditacijaComponent,
      },
      {
        path: '**',
        redirectTo: 'istorijat',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OUniverzitetuRoutingModule {}
