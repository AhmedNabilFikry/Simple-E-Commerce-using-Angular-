import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
constructor(private apiserve:ApiService,private activatedroute:ActivatedRoute){}

products:Iproduct[] = [];

ngOnInit(): void {
  this.apiserve.getproducts().subscribe({
    next:(data)=>{
      this.products = data;
  },
  error(err) {
    console.log('Error occured');
  },
  complete() {}
})
}
delete(id:number){
var res = confirm("Are You Want To delete This Product");
if (res) {this.apiserve.delete(id).subscribe(()=>{this.products = this.products.filter((prod)=> prod.id != id)})}
}
}
