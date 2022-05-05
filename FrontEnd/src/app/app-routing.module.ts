import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathRoutes } from './PathRoutes';
import { AddPropertyComponent } from './Property/Add-Property/Add-Property.component';
import { PropertyDetailComponent } from './Property/Property-Detail/Property-Detail.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { LoginComponent } from './User/Login/Login.component';
import { RegisterComponent } from './User/Register/Register.component';


const routes : Routes = [
  {path: PathRoutes.listProperty , component: PropertyListComponent},
  {path:PathRoutes.addProperty , component: AddPropertyComponent},
  {path:PathRoutes.rentProperty , component: PropertyListComponent},
  {path:PathRoutes.detailProperty+"/:id" , component: PropertyDetailComponent},
  {path:PathRoutes.userLogin , component:LoginComponent},
  {path:PathRoutes.userRegister, component:RegisterComponent},
  {path:"**" , component: PropertyListComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
