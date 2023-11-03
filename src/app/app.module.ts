import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandeComponent } from './repreatable/bande/bande.component';
import { WelcomeComponent } from './dynamic/home/welcome/welcome.component';
import { HomeComponent } from './dynamic/home/home.component';
import { SideComponent } from './repreatable/side/side.component';
import { ContentComponent } from './dynamic/home/content/content.component';
import { MainFocusComponent } from './dynamic/home/main-focus/main-focus.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeComponent,
    WelcomeComponent,
    HomeComponent,
    SideComponent,
    ContentComponent,
    MainFocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
