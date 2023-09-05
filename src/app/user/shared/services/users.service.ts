import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel, UserCommonResponse } from '../models/user-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userBaseServerLink: string = 'https://localhost:7248/api/Users';

  constructor(
    private http: HttpClient
  ) { }

  LoginUser(login:LoginModel): Observable<UserCommonResponse>{
    return this.http.post<UserCommonResponse>(this.userBaseServerLink+'Login', login);
  }

  RegisterUser(request:RegisterModel): Observable<UserCommonResponse>{
    return this.http.post<UserCommonResponse>(this.userBaseServerLink+'Register', request);
  }


}
