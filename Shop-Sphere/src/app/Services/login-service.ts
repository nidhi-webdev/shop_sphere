import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN } from '../Models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }

  userLogin(loginuser: LOGIN): Observable<LOGIN[]> {
    return this.http.post<LOGIN[]>(this.apiUrl, loginuser)
  }

}
