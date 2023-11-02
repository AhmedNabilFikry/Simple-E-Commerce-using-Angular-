import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{
constructor(private apiserve:ApiService,private activatedroute:ActivatedRoute){}
productid:number = 0;
product:Iproduct|undefined;
ngOnInit(): void {
  this.productid = this.activatedroute.snapshot.params['id'];
  this.apiserve.getbyid(this.productid).subscribe((data) => {this.product = data})
}
}
