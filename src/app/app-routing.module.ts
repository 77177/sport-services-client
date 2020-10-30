import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProfileComponent } from './components/profile/profile.component';
import {RegisterComponent} from './components/register/register.component';



const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
