import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp:string="";
  url:string="";
  responseBack:any;
  constructor(private httpRef:HttpClient) { }

  ngOnInit(): void {
  }
  otpNumber(){
    let obs=this.httpRef.post("http://localhost:8081/validateOtp/"+this.otp,{

    })
  
  .subscribe(
    data =>{
      alert("successfull");
      console.log("post success");
    }
  );
 
  }
}
