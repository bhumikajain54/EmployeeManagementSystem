import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterComponent } from '../admin-register/admin-register.component';
import { BrowserModule } from '@angular/platform-browser';
import {AuthenticationRequest} from "../models/authentication-request";
import {AuthenticationResponse} from "../models/authentication-response";
import {AuthenticationService} from "../serives/authentication.service";
import {VerificationRequest} from "../models/verification-request";
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response: any) => {
          this.authResponse = response;
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.access_token as string);
           // this.router.navigate(['home']);
           this.router.navigateByUrl('/home')
          }
        }
      });
    }
}
