import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserViewModelInterface } from '../../interfaces/authInterfaces/userVIewModelInterface';
import { ApiResponseInterface } from '../../interfaces/apiResponseInterfaces/apiResponseAuthInterface';

@Injectable({
  providedIn: 'root',
})
export class CalledServices {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public createCalled(title: string, description: string): Observable<ApiResponseInterface<object>>{
    const userString = localStorage.getItem('user');
    if(!userString)
      return throwError(() => new Error("Usuário não encontrado."));

    const user: UserViewModelInterface = JSON.parse(userString);
    return this.http.post<ApiResponseInterface<object>>(`${this.API}/called`, {
      userId: user.id,
      title: title,
      description: description,
      status: 0
    });
  }
}
