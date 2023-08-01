import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Login_User } from 'src/app/contracts/login_user';
import { Observable, firstValueFrom } from 'rxjs';
import { AuthService } from '../common/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private httpClientService: HttpClientService,private authService:AuthService) { }

  async login(emailOrUsername: string,password:string): Promise<Login_User>{
    const observable:Observable<Login_User | any> = this.httpClientService.post<Login_User | any >({
      controller:"auth"
    },{emailOrUsername,password})

    const promiseData = firstValueFrom(observable);

    return promiseData as Promise<Login_User>
  }

  async refreshTokenLogin(refreshToken:string,callBackFunction?:(state: boolean)=>void): Promise<Login_User | any>{
    const observable : Observable<Login_User | any> = this.httpClientService.post<Login_User | any>({
      controller:"auth",
      action:"refreshtokenlogin"
    },{refreshToken: refreshToken});
    
    try{
      const tokenResponse : Login_User = await firstValueFrom(observable) as Login_User;
      if(tokenResponse.succeeded){
        localStorage.setItem("accessToken",tokenResponse.token.accessToken);
        localStorage.setItem("refreshToken", tokenResponse.token.refreshToken);
        this.authService.idendityCheck();
      }
      callBackFunction(tokenResponse.succeeded ? true : false)
    }
    catch{
      callBackFunction(false)
    }
  }
}
