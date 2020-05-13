import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  firstName:string="";
  lastName:string="";
  phoneNumber:string="";
  email:string="";
  password:string="";
  gender:string="";
  city:string="";
  url:string="";
  responseBack:any;
  constructor(private httpRef:HttpClient) { }
 register(){
    let obs=this.httpRef.post("http://localhost:8080/register/users",
    {
      "firstName":this.firstName,
      "lastName":this.lastName,
      "phoneNumber":this.phoneNumber,
      "email":this.email,
      "password":this.password,
      "gender":this.gender,
      "city":this.city
    });
  
  obs.subscribe((data )=>{
     
      console.log("post success");
    }
   
  );
 
  }
 
 
}

