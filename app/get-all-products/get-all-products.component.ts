import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {
  products:any;
 constructor(private httpRef:HttpClient){}
 
 public deleteProduct(id:number){
   let obs=this.httpRef.delete("http://localhost:8080/products/"+id);
   obs.subscribe((data)=>this.products=data);
 }
ngOnInit(): void {
    let obs=this.httpRef.get("http://localhost:8080/products");
    obs.subscribe((data)=>this.products=data);
  }
}
