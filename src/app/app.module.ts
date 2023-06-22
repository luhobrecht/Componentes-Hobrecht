import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
