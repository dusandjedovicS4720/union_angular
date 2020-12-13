import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {SharedModule} from "./shared/shared.module";

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PocetnaComponent} from './pocetna/pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {
}
