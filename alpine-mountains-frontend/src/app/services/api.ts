import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8000/api'; // Laravel API

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private authHeaders() {
    const token = this.getToken();
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  getMountains(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mountains`, this.authHeaders());
  }

  createMountain(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mountains`, data, this.authHeaders());
  }

  updateMountain(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/mountains/${id}`, data, this.authHeaders());
  }

  deleteMountain(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/mountains/${id}`, this.authHeaders());
  }
}
