import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService, private router: Router) { }
   token: any = localStorage.getItem('token');
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenheadfer = req.clone({
      setHeaders: {
      'Authorization': "Bearer " + this.token,
      'Content-Type': 'application/json; charset=utf-8'
      }
    });

    return next.handle(tokenheadfer);
  }
}