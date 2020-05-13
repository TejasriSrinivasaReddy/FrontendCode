import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
  users:any;
  constructor(private httpRef:HttpClient) { }

  ngOnInit(): void {
    let obs=this.httpRef.get("http://localhost:8080/users");
    obs.subscribe((data)=>this.users=data);
  }
    

  }


