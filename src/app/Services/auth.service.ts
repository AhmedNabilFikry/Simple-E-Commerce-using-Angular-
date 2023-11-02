import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { if(localStorage.getItem("UserToken")){this.savedata()} }
  userUrl:string = "http://localhost:3226/api/User/login";
  userdata = new BehaviorSubject(null);
savedata(){
   let encoded = JSON.stringify(localStorage.getItem("UserToken"))
   let decoded : any = jwtDecode(encoded);
   this.userdata.next(decoded);
}

  login(FormData:object): Observable<any> {
    return this.http.post(this.userUrl,FormData );
  }
  logout(){localStorage.clear() ; this.userdata.next(null)}
  }


