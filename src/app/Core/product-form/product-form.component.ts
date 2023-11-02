import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
constructor(private apiserve:ApiService,private activatedroute:ActivatedRoute,private router:Router){}
get nameControl(){return this.ProductForm.get('name')}
get descriptionControl(){return this.ProductForm.get('description')}
get priceControl(){return this.ProductForm.get('price')}
get quantityControl(){return this.ProductForm.get('quantity')}

ProductForm:FormGroup = new FormGroup({
  id:new FormControl(0,[Validators.required]),
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  description:new FormControl('',[Validators.required,Validators.minLength(3)]),
  price:new FormControl(0,[Validators.required]),
  quantity:new FormControl(0,[Validators.required])
})
productid :number = 0;
ngOnInit(): void {
  this.productid = this.activatedroute.snapshot.params['id'];
  if (this.productid > 0) {
    // edit
    this.apiserve.getbyid(this.productid).subscribe((data)=>{
      this.ProductForm.controls['name'].setValue(data.name),
      this.ProductForm.controls['description'].setValue(data.description),
      this.ProductForm.controls['price'].setValue(data.price),
      this.ProductForm.controls['quantity'].setValue(data.quantity)
    })}}

    GetData(e:Event){

      if (this.ProductForm.valid) {
        console.log("valid")
        if (this.productid > 0) {
          // edit
          this.apiserve.edit(this.productid,this.ProductForm.value).subscribe();
        }
        else{
          // add
          this.apiserve.add(this.ProductForm.value).subscribe();
        }
      this.router.navigate(['/product'])
      }
      else{
      this.router.navigate(['/product'])
    }
  }
    cancel() {
      this.ProductForm.reset(); // Reset form fields
    }

}
