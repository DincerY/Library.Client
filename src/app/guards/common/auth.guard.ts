import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService, _isAuthenticated } from 'src/app/services/common/auth.service';
import { CustomToastrService, MessageTypeFunc, Position } from 'src/app/services/common/custom-toastr.service';
import { UserAuthService } from 'src/app/services/models/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService,private router:Router,private authService:AuthService,
    private userAuthService:UserAuthService,private toastrService:CustomToastrService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){ 
    // this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken"),(callBackFunctionState:boolean)=>{
    //   this.authService.idendityCheck();
    //   if(!callBackFunctionState){
    //     this.router.navigate(["login"],{ queryParams:{returnUrl: state.url}})
    //     this.toastrService.message("Yetkiniz bulunmamakta","Hata",{
    //       position:Position.TopRight,
    //       messageTypeFunc:MessageTypeFunc.error
          
    //     });
        
    //   }
    // });
    this.authService.idendityCheck();
    if(!_isAuthenticated){

      this.userAuthService.refreshTokenLogin(localStorage.getItem("refreshToken"),(callBackFunctionState:boolean)=>{
      this.authService.idendityCheck();
      if(!callBackFunctionState){
        this.router.navigate(["login"],{ queryParams:{returnUrl: state.url}})
      debugger

        this.toastrService.message("Yetkiniz bulunmamakta","Hata",{
          position:Position.TopRight,
          messageTypeFunc:MessageTypeFunc.error
          
        });
      }
    });
    }
    return true;
  }
  
}


// if(!_isAuthenticated){
//   this.router.navigate(["login"],{ queryParams:{returnUrl: state.url}})
//   this.toastrService.message("Yetkiniz bulunmamakta","Hata",{
//     position:Position.TopRight,
//     messageTypeFunc:MessageTypeFunc.error
//   })
// }
// return true;