import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthViewModelInterface } from '../../interfaces/authInterfaces/authVIewModelInterface';
import { ApiResponseInterface } from '../../interfaces/apiResponseInterfaces/apiResponseAuthInterface';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string){
    return this.http.post<ApiResponseInterface<AuthViewModelInterface>>(`${this.API}/auth/login`, { email, password })
    .pipe(response => {
      return response;
    });
  }

  public register(name: string, email: string, password: string, role: string){
    return this.http.post<ApiResponseInterface<AuthViewModelInterface>>(`${this.API}/auth/register`, { name, email, password, role})
    .pipe(response => {
      return response;
    });
  }
}
