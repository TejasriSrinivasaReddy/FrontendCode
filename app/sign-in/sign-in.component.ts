import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email:string="";
  password:string="";
  url:string="";
  responseBack:any;
  constructor(private httpRef:HttpClient) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  login(){
    if(this.email=="admin@gmail.com" && this.password=="admin"){
      window.location.href='http://localhost:4200/admin';
    }
    let obs=this.httpRef.post("http://localhost:8080/login/"+this.email+"/"+this.password,{

    })
  
  .subscribe(
    data =>{
      alert("login successfull");
      console.log("post success");
    }
  );
 
  }
}
