import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './repreatable/sidenav/sidenav.component';

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
    ProfileInfoComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
