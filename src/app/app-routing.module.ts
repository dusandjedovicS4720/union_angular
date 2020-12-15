import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import {NotFoundComponent} from './not-found/not-found.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

const routes: Routes = [
  {
    path: 'kontakt',
    loadChildren: () =>
      import('./kontakt/kontakt.module').then((m) => m.KontaktModule),
  },
  {
    path: 'o-univerzitetu',
    loadChildren: () =>
      import('./o-univerzitetu/o-univerzitetu.module').then(
        (m) => m.OUniverzitetuModule
      ),
  },
  {
    path: 'akti',
    loadChildren: () => import('./akti/akti.module').then((m) => m.AktiModule),
  },
  {
    path: 'repozitorijum',
    loadChildren: () =>
      import('./repozitorijum/repozitorijum.module').then(
        (m) => m.RepozitorijumModule
      ),
  },
  {
    path: 'clanice',
    loadChildren: () =>
      import('./clanice/clanice.module').then((m) => m.ClaniceModule),
  },
  { path: 'pocetna', component: PocetnaComponent },
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
  { path: '**', redirectTo: '/pocetna' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
// Preload for better performance
// Only needed to be defined on the root level 
{ preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
