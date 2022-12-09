import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'customer', component:CustomerListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  // {path: '', redirectTo: 'create-componet', pathMatch: 'full'},
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path:'create-customer', component:HomeComponent},
  {path:'view-details',component:ViewDetailsComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
