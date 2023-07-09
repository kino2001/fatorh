import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from 'src/app/Data/service/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  isLogin:BehaviorSubject<any> = new BehaviorSubject(true)
  constructor(private _HttpClient: HttpClient ,private Router:Router) 
  {
    if(localStorage.getItem('token')!=null)
    {
       this.saveCurrentUser();

    }
    this.isLogin.next(localStorage.getItem('token'))
 };
//   Bearer
currentUser = new BehaviorSubject(null) ;

saveCurrentUser()
{
  let token:any = localStorage.getItem('token');
  this.currentUser.next(jwtDecode(token));
  console.log(this.currentUser)
};

  Register(endPoint : string ,model: any ): Observable<any> {
    return this._HttpClient.post<any>(baseUrl + endPoint, model )
  };

  Login(endPoint : string ,model: any ): Observable<any> {
    return this._HttpClient.post<any>(baseUrl + endPoint, model )
  };

  Otp(endPoint : string ,model: any ): Observable<any> {
    return this._HttpClient.post<any>(baseUrl + endPoint, model )
  };

  ForgotPassword(endPoint : string ,model: any ): Observable<any> {
    return this._HttpClient.post<any>(baseUrl + endPoint, model )
  };


  logout() 
  {
      this.currentUser.next(null);
      localStorage.removeItem('token');
      this.Router.navigate(['/login'])
  };
}