import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';
import { ProductComponent } from './Core/product/product.component';
import { ProductDetailsComponent } from './Core/product-details/product-details.component';
import { ProductFormComponent } from './Core/product-form/product-form.component';
import { LoginComponent } from './Shared/login/login.component';
import { emailGuard } from './Guards/email.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'product/details/:id',component:ProductDetailsComponent ,canActivate: [emailGuard]},
  {path:'product/edit/:id',component:ProductFormComponent, canActivate: [emailGuard]},
  {path:'product/new',component:ProductFormComponent, canActivate:[emailGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
