import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendJoiningDateEmail(employeeEmail: string, joiningDate: Date) {
    const emailRequest = {
      to: employeeEmail,
      subject: 'Welcome to Our Company',
      body: `Dear Employee,\n\nWelcome to our company! Your joining date is: ${joiningDate.toDateString()}`
    };

    return this.http.post<any>(`${APP_CONFIG.baseUrl}/sendEmail`, emailRequest);
  }
}
