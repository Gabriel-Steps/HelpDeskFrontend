import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseInterface } from '../../interfaces/apiResponseInterfaces/apiResponseAuthInterface';
import { UserViewModelInterface } from '../../interfaces/userInterfaces/userViewModelInterface';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getUserById(id: string): Observable<ApiResponseInterface<UserViewModelInterface>>{
    return this.http.get<ApiResponseInterface<UserViewModelInterface>>(`${this.API}/user/${id}`);
  }
}
