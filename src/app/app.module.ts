import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

import { LoginComponent } from '../app/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
