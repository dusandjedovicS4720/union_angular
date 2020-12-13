import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {NotFoundComponent} from './not-found/not-found.component';
import {PocetnaComponent} from "./pocetna/pocetna.component";

const routes: Routes = [
  {
    path: 'kontakt',
    loadChildren: () =>
      import('./kontakt/kontakt.module').then((m) => m.KontaktModule),
  },
  {
    path: 'o-nama',
    loadChildren: () =>
      import('./o-nama/o-nama.module').then((m) => m.ONamaModule),
  },
  {
    path: 'akti',
    loadChildren: () =>
      import('./akti/akti.module').then((m) => m.AktiModule),
  },
  {
    path: 'clanice',
    loadChildren: () =>
      import('./clanice/clanice.module').then((m) => m.ClaniceModule),
  },
  {path: 'pocetna', component: PocetnaComponent},
  {path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  {path: '**', redirectTo: '/pocetna'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
