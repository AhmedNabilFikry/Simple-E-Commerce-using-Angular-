import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice:AuthService,private router:Router){}
  users:{email:string, password:string} = {email:'',password:''};
LoginForm:FormGroup = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required])
})
get emailControl(){return this.LoginForm.get('email')}
get passwordControl(){return this.LoginForm.get('password')}

login(FormData: FormGroup) {
  if (this.LoginForm.valid) {
    this.authservice.login(FormData.value).subscribe({
      next:(res)=>{
        if (res.Msg != "") {
          localStorage.setItem("UserToken",res.token);
          this.authservice.savedata();
          this.router.navigate(['/product']);
                }
        else{
          console.log("Invalid Login  ");
        }
      }
    })
  }
}

  }


