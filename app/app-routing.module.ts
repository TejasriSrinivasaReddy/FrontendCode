import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OtpComponent } from './otp/otp.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';





const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signin',component:SignInComponent},
    {path:'otp',component:OtpComponent},
    {path:'admin',component:AdminComponent},
    {path:'addProduct',component:AddProductComponent},
    {path:'getProducts',component:GetAllProductsComponent},
    {path:'getUsers',component:GetAllUsersComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
