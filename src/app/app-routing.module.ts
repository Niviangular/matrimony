import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestureComponent } from './gesture/gesture.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "gesture",
    component: GestureComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
