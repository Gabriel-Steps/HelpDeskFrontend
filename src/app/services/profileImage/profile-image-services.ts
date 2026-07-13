import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { AuthViewModelInterface } from '../../interfaces/authInterfaces/authVIewModelInterface';
import { ApiResponseInterface } from '../../interfaces/apiResponseInterfaces/apiResponseAuthInterface';

@Injectable({
  providedIn: 'root',
})
export class ProfileImageServices {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public uploadProfileImage(
    file: File
  ): Observable<ApiResponseInterface<object>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http
      .post<ApiResponseInterface<string>>(
        `${this.API}/profile-image/upload-image`,
        formData
      )
      .pipe(
        tap((response) => {
          if (response.status) {
            localStorage.setItem("imageUrl", response.data);
          }
        }),
        switchMap((response) => {
          if (!response.status) {
            return throwError(() => new Error('Falha ao enviar a imagem.'));
          }

          return this.createProfileImage(response.data);
        })
      );
  }

  public createProfileImage(
    imageUrl: string
  ): Observable<ApiResponseInterface<object>> {
    const userString = localStorage.getItem('user');

    if (!userString) {
      return throwError(() => new Error('Usuário não encontrado.'));
    }

    const user: AuthViewModelInterface = JSON.parse(userString);

    return this.http.post<ApiResponseInterface<object>>(
      `${this.API}/profile-image/register-image`,
      {
        userId: user.id,
        imageUrl,
      }
    );
  }
}