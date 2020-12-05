import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutUsHomeComponent} from "./about-us-home/about-us-home.component";
import {UkratkoComponent} from "./about-us-home/ukratko/ukratko.component";
import {RektorUniverzitetaComponent} from "./about-us-home/rektor-univerziteta/rektor-univerziteta.component";
import {SenatSavetUniverzitetaComponent} from "./about-us-home/senat-savet-univerziteta/senat-savet-univerziteta.component";

const routes: Routes = [
  {
    path: '',
    component: AboutUsHomeComponent,
    children: [
      {
        path: 'ukratko', component: UkratkoComponent,
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
