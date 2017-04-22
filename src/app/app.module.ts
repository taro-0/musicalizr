import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SpotifyLoginButton } from './spotify/login-button/login-button.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = []

@NgModule({
  declarations: [
    AppComponent,
    SpotifyLoginButton,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
