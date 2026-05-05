import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../models/register-request";
import {AuthenticationResponse} from "../models/authentication-response";
import {VerificationRequest} from "../models/verification-request";
import {AuthenticationRequest} from "../models/authentication-request";

import { APP_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private permissions: string[] = [];
  
  [x: string]: any;
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = `${APP_CONFIG.baseUrl}/api/v1/auth`;

  constructor(
    private http: HttpClient
  ) { }

  register(
    registerRequest: RegisterRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/verify`, verificationRequest);
  }
  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('token');
    // Check if the authentication token exists and is not expired
    return !!authToken;
  }
  
  getToken(){
    return localStorage.getItem('token');
  } 
  logout(): void {
    // Implement logout logic if needed
  }
}
