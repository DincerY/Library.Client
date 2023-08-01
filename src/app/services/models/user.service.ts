import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from 'src/app/entities/user';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_User } from 'src/app/contracts/create_user';
import { Login_User } from 'src/app/contracts/login_user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService:HttpClientService) { }

  async createUser(user:User,successCallBack?:()=>void,errorCallBack?:(error)=>void): Promise<Create_User>{
    const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller: "users"
    },user);

    const promiseData :Promise<Create_User | User> = firstValueFrom(observable)


    return await promiseData as Create_User;
  }

 
}
