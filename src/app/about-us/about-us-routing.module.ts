import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutUsHomeComponent} from "./about-us-home/about-us-home.component";
import {IstorijatComponent} from './about-us-home/istorijat/istorijat.component';
import {RektorUniverzitetaComponent} from "./about-us-home/rektor-univerziteta/rektor-univerziteta.component";
import {SenatSavetUniverzitetaComponent} from "./about-us-home/senat-savet-univerziteta/senat-savet-univerziteta.component";

const routes: Routes = [
  {
    path: '',
    component: AboutUsHomeComponent,
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
        path: '**', redirectTo: 'ukratko'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
