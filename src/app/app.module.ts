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
import { FormulaireComponent } from './dynamic/signUp-logIn/formulaire/formulaire.component';
import { LoginComponent } from './dynamic/signUp-logIn/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './dynamic/signUp-logIn/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ProfileInfoComponent } from './dynamic/profile/profile-info/profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeComponent,
    WelcomeComponent,
    HomeComponent,
    SideComponent,
    ContentComponent,
    MainFocusComponent,
    FormulaireComponent,
    LoginComponent,
    SignupComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
