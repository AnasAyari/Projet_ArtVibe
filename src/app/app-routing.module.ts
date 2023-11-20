import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dynamic/signUp-logIn/login/login.component';
import { HomeComponent } from './dynamic/home/home.component';
import { SignupComponent } from './dynamic/signUp-logIn/signup/signup.component';
import { FormulaireComponent } from './dynamic/signUp-logIn/formulaire/formulaire.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ActivitiesListComponent } from './admin/activities-list/activities-list.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LikepostsComponent } from './user/likeposts/likeposts.component';
import { SavedpostsComponent } from './user/savedposts/savedposts.component';
import { UserapplicationsComponent } from './user/userapplications/userapplications.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin/:id",component:DashboardComponent,
  children:[
    {path:"home",component:DashboardHomeComponent},
    {path:"activitieslist",component:ActivitiesListComponent},
    {path:"userslist",component:UsersListComponent},
    {path:"requests",component:RequestsComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    ]
  },
  {path:"form",component:FormulaireComponent,
  children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    ],
  },
  {path:"userProfile/:id",component:UserProfileComponent},
  {path:"likedPosts/:id",component:LikepostsComponent},
  {path:"savedPosts/:id",component:SavedpostsComponent},
  {path:"userApplications/:id",component:UserapplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }