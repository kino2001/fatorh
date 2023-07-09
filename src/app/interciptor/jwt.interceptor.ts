import { Router } from '@angular/router';
//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  loaderToShow: any;
  constructor(
    private _Router:Router
    ) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
      //handle your auth error or rethrow
      if(err.status === 403) {
          this._Router.navigateByUrl(`/page-login`);
          return of(err); // or EMPTY may be appropriate here
      }
      return throwError(err);
  }



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    const companyId =  localStorage.getItem("companyId");
    const userId = localStorage.getItem("user_id");

    //Authentication by setting header with token value
    if(token) {
      request = request.clone({
        setHeaders: {
          'Authorization':'Bearer '+ token,
          'companyId': companyId,
          'user_id': userId,
          // 'Content-Type': 'application/json'
        }
      });
    }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     setHeaders: {
    //       'content-type': 'application/json'
    //     }
    //   });
    // }

    // request = request.clone({
    //   headers: request.headers.set('Accept', 'application/json')
    // });
      // this.ngxLoader.start();
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if(event instanceof HttpResponse) {

          }
          // this.ngxLoader.stop();
          return event;
        }),
        catchError((error: HttpErrorResponse) => {

       //  this.ngxLoader.stop();
       this.handleAuthError(error);

       return throwError(error);
      }));

  }





}
