import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {MaterialModule} from "./material-module.module";
import {HeaderComponent} from "./navigation/header/header.component";
import {SidenavListComponent} from "./navigation/sidenav-list/sidenav-list.component";
import {NavigationBaseComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {UnionLogoComponent} from './union-logo/union-logo.component';
import {OverlayImageComponent} from './navigation/overlay-image/overlay-image.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    NavigationBaseComponent,
    FooterComponent,
    UnionLogoComponent,
    OverlayImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    SidenavListComponent,
    NavigationBaseComponent,
    FooterComponent,
    UnionLogoComponent,
    OverlayImageComponent
  ]
})
export class SharedModule {
}
