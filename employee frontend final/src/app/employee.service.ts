import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

import { APP_CONFIG } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeeByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
  checkDuplicateEmployee(email: string) {
    throw new Error('Method not implemented.');
  }

  private baseURL = `${APP_CONFIG.baseUrl}/api/v1/employees`;

  constructor(private httpClient: HttpClient) { }

  // Add security token to the headers
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage or wherever it's stored
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }
  // Get list of employees with authentication token
  getEmployeesList(): Observable<Employee[]> {
    //const headers = this.getHeaders();
    return this.httpClient.get(this.baseURL) as any;
  }
  

  // Add new employee with authentication token
  addEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseURL, employee);
  }

  // Get employee by ID with authentication token
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  // Update employee with authentication token
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  // Delete employee by ID with authentication token
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
