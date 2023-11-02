import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string = "http://localhost:3005/products"

  getproducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.baseUrl);
  }
  getbyid(id:number):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.baseUrl}/${id}`);
  }
  add(prod:Iproduct ){
    return this.http.post(this.baseUrl,prod);
  }
  edit(id:number,prod:Iproduct){
    return this.http.put(`${this.baseUrl}/${id}`,prod);
  }
  delete(id:number){
     return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
