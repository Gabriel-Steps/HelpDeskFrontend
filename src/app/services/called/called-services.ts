import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthViewModelInterface } from '../../interfaces/authInterfaces/authVIewModelInterface';
import { ApiResponseInterface } from '../../interfaces/apiResponseInterfaces/apiResponseAuthInterface';
import { CalledViewModelInterface } from '../../interfaces/calledInterfaces/calledViewModelInterface';

@Injectable({
  providedIn: 'root',
})
export class CalledServices{
  private API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public createCalled(title: string, description: string): Observable<ApiResponseInterface<object>>{
    const userString = localStorage.getItem('user');
    if(!userString)
      return throwError(() => new Error("Usuário não encontrado."));

    const user: AuthViewModelInterface = JSON.parse(userString);
    return this.http.post<ApiResponseInterface<object>>(`${this.API}/called`, {
      userId: user.id,
      title: title,
      description: description,
      status: 0
    });
  }

  public getAllCalledsByUserId(): Observable<ApiResponseInterface<CalledViewModelInterface[]>>{
    const userString = localStorage.getItem('user');
    if(!userString)
      return throwError(() => new Error("Usuário não encontrado."));

    const user: AuthViewModelInterface = JSON.parse(userString);
    return this.http.get<ApiResponseInterface<CalledViewModelInterface[]>>(`${this.API}/called/${user.id}/user`);
  }

  public getCalledById(id: string): Observable<ApiResponseInterface<CalledViewModelInterface>>{
    return this.http.get<ApiResponseInterface<CalledViewModelInterface>>(`${this.http}/called/${id}`);
  }

  public deleteCalled(id: string): Observable<ApiResponseInterface<object>>{
    return this.http.delete<ApiResponseInterface<object>>(`${this.API}/called/${id}`);
  }

  public updateCalled(called: CalledViewModelInterface): Observable<ApiResponseInterface<object>>{
    return this.http.put<ApiResponseInterface<object>>(`${this.API}/called/`, {
      id: called.id,
      title: called.title,
      description: called.description
    });
  }
}
