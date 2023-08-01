import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { List_Book } from 'src/app/contracts/list_book';
import { HttpClientService } from 'src/app/services/http-client.service';


@Injectable({
  providedIn: 'root'
})
export class WaitGuard implements Resolve<any>  {
  constructor(private httpClientService:HttpClientService){}
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpClientService.get<List_Book>({
      controller:"books"
    })
  }
  
}

