import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { AuthenticationService } from '../authentication.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (!localStorage.getItem('token')) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}