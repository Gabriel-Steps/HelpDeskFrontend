import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private API = "SUA-ROTA-API";

  constructor(private http: HttpClient) { }

  public login(email: string, password: string){
    return this.http.post<any>(`${this.API}/login`, { email, password })
    .pipe(response => {
      return response;
    });
  }

  public register(name: string, email: string, password: string, role: string){
    return this.http.post<any>(`${this.API}/register`, { name, email, password, role})
    .pipe(response => {
      return response;
    });
  }
}
