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
import {MatDialogModule} from '@angular/material/dialog';
import { ActivitiesListComponent } from './admin/activities-list/activities-list.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContentListComponent } from './user/content-list/content-list.component';
import { ContentDetailsComponent } from './user/content-details/content-details.component';
import { UserContentComponent } from './user/user-content/user-content.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddActivityComponent } from './admin/popupforms/add-activity/add-activity.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LikepostsComponent } from './user/likeposts/likeposts.component';
import { SavedpostsComponent } from './user/savedposts/savedposts.component';
import { UserapplicationsComponent } from './user/userapplications/userapplications.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

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
    SidenavComponent,
    DashboardComponent,
    ActivitiesListComponent,
    DashboardHomeComponent,
    UsersListComponent,
    RequestsComponent,
    ContentListComponent,
    ContentDetailsComponent,
    UserContentComponent,
    AddActivityComponent,
    UserProfileComponent,
    LikepostsComponent,
    SavedpostsComponent,
    UserapplicationsComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
