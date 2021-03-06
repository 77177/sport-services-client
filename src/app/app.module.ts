import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AppRoutingModule} from './app-routing.module';
import {RoomsComponent} from './components/rooms/rooms.component';
import {TrainersComponent} from './components/trainers/trainers.component';
import {ProfileComponent} from './components/profile/profile.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    RoomsComponent,
    TrainersComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
