import { AuthService } from './../Services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const emailGuard: CanActivateFn = (route, state) => {
  let authsevice = inject(AuthService);
   let router = inject(Router)
   if (authsevice.userdata) { return true; }
else{return false}
};
