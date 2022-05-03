import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { PropertyCardComponent } from './Property/Property-Card/Property-Card.Component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavComponent } from './Nav/Nav.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './Property/Add-Property/Add-Property.component';
import { PropertyDetailComponent } from './Property/Property-Detail/Property-Detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavComponent,
    AddPropertyComponent,
    PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
