import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { SliderComponent } from './Shared/slider/slider.component';
import { HomeComponent } from './Shared/home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ProductComponent } from './Core/product/product.component';
import { ProductDetailsComponent } from './Core/product-details/product-details.component';
import { ProductFormComponent } from './Core/product-form/product-form.component';
import { LoginComponent } from './Shared/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
