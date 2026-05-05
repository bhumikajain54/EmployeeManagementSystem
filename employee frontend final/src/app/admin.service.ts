import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = `${APP_CONFIG.baseUrl}/api/v1/admins/login`;

  constructor(private http: HttpClient) { }

  registerAdmin(admin: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, admin);
  }

  getAdmin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateAdmin(id: number, admin: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
