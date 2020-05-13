import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    OtpComponent,
    AdminComponent,
    AddProductComponent,
    GetAllProductsComponent,
    GetAllUsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
