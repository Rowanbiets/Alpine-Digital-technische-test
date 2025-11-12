import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/api'; // Laravel API URL
  private token: string | null = null;

  constructor(private http: HttpClient) { }

  // ---------------- AUTH ----------------
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  logout(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers });
  }

  // ---------------- MOUNTAINS CRUD ----------------
  getMountains(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mountains`, { headers: this.getAuthHeaders() });
  }

  getMountain(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/mountains/${id}`, { headers: this.getAuthHeaders() });
  }

  createMountain(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/mountains`, data, { headers: this.getAuthHeaders() });
  }

  updateMountain(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/mountains/${id}`, data, { headers: this.getAuthHeaders() });
  }

  deleteMountain(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/mountains/${id}`, { headers: this.getAuthHeaders() });
  }

  // ---------------- HELPERS ----------------
  setToken(token: string) {
    this.token = token;
  }

  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }
}
