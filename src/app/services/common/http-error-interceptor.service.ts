import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {
  CustomToastrService,
  MessageTypeFunc,
  Position,
} from './custom-toastr.service';
import { UserAuthService } from '../models/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(
    private toastr: CustomToastrService,
    private userAuthService: UserAuthService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        console.log(error);
        
        switch (error.status) {
          case 500:
            this.toastr.message("Server Hatası", 'Hata', {
              position: Position.BottomFullWidth,
              messageTypeFunc: MessageTypeFunc.error,
            });
            break;
          case 401:
            this.userAuthService
              .refreshTokenLogin(
                localStorage.getItem('refreshToken'),
                (state: boolean) => {
                  const url = this.router.url;
                  if (state) {
                    console.log("bulunan sayfaya refresh işlemi yapıldı");
                    
                    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
                    {
                      this.router.navigate([url])
                      //buraya uğradıktan sonra nereye rota alacağını bulmam gerekli yoksa son istek yapılan yere gidip durucak
                      
                    })
                  } else {
                    this.toastr.message('Yetkisiz işlem', 'Uyarı', {
                      position: Position.BottomFullWidth,
                      messageTypeFunc: MessageTypeFunc.warning,
                    });
                    this.authService.idendityCheck();
                    localStorage.clear();
                  }
                }
              )
              .then((data) => {});
            break;
        }

        return of(error);
      })
    );
  }
}
