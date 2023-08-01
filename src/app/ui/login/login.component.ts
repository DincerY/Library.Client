import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/base/base-component';
import { Login_User } from 'src/app/contracts/login_user';
import { User_Login_Data } from 'src/app/contracts/user_login_data';
import { AuthService } from 'src/app/services/common/auth.service';
import { CustomToastrService, MessageTypeFunc, Position } from 'src/app/services/common/custom-toastr.service';
import { UserAuthService } from 'src/app/services/models/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent{

  constructor(spinner: NgxSpinnerService,private userAuthService:UserAuthService
    ,private toastr: CustomToastrService,private authService:AuthService,
    private activatedRoute:ActivatedRoute,private router:Router){
    super(spinner)
  }
  @ViewChild("loginFrm",{static:true}) loginFrm: NgForm;
  

  
  async login(data:User_Login_Data){
    const response: Login_User = await this.userAuthService.login(data.emailOrUsername,data.password);
    console.log(response);
    if(!response.succeeded){
      this.toastr.message(response.message,"Başarısız",{
        messageTypeFunc: MessageTypeFunc.error,
        position: Position.TopRight 
      })
    }else{
      localStorage.setItem("accessToken",response.token.accessToken);
      localStorage.setItem("refreshToken",response.token.refreshToken)
      this.authService.idendityCheck();
      this.toastr.message(response.message,"Başarılı",{
        messageTypeFunc : MessageTypeFunc.success,
        position: Position.TopRight
      });
      let deneme = this.activatedRoute.queryParams.subscribe(params =>{
        const returnUrl : string = params["returnUrl"];
        if(returnUrl){
          this.router.navigate([returnUrl])
        }
        else
          this.router.navigate([""])
      })
    }  
    
  }
}
