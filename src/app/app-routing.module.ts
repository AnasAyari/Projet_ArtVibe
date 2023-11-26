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
import { ContentDetailsComponent } from './user/content-details/content-details.component';
import { ContentListComponent } from './user/content-list/content-list.component';
import { LikedPostsListComponent } from './user/liked-posts-list/liked-posts-list.component';
import { SavedPostsListComponent } from './user/saved-posts-list/saved-posts-list.component';
import { UserContentComponent } from './user/user-content/user-content.component';
import { PasswordChangerPageComponent } from './admin/password-changer-page/password-changer-page.component';
import { authGuard } from './guards/guard.guard';
import { UserMainComponent } from './user/user-main/user-main.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin/:id",component:DashboardComponent,
  children:[
    {path:"home/:id",component:DashboardHomeComponent},
    {path:"activitieslist/:id",component:ActivitiesListComponent},
    {path:"userslist/:id",component:UsersListComponent},
    {path:"requests/:id",component:RequestsComponent},
    {path:"PasswordChangingPage/:id",component:PasswordChangerPageComponent},
    {path:"",redirectTo:"home/:id",pathMatch:"full"}
    
    ]
  },
  {path:"form",component:FormulaireComponent,
  children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    ],
  },
  {path:"user/:id",component:UserMainComponent,
    children:[
      {path:"userProfile/:id",component:UserProfileComponent},
      {path:"likedPosts/:id",component:LikedPostsListComponent},
      {path:"savedPosts/:id",component:SavedpostsComponent},
      {path:"userApplications/:id",component:UserapplicationsComponent},
      {path:"contentList/:id",component:ContentListComponent},
      {path:"contentDetails/:userID/:activityID",component:ContentDetailsComponent},
      {path:"PasswordChangingPage/:id",component:PasswordChangerPageComponent},
      {path:"",redirectTo:"userProfile",pathMatch:"full"}, 
    ]
  },
  {path:"",redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }