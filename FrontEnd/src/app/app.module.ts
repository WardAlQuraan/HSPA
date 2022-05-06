import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { PropertyCardComponent } from './Property/Property-Card/Property-Card.Component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavComponent } from './Nav/Nav.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './Property/Add-Property/Add-Property.component';
import { PropertyDetailComponent } from './Property/Property-Detail/Property-Detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './User/Register/Register.component';
import { LoginComponent } from './User/Login/Login.component';
import { UserService } from './Services/user.service';
import { AlertifyService } from './Services/alertify.service';
import { AuthService } from './Services/auth.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    RegisterComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
