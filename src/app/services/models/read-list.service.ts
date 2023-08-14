import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { identifierName } from '@angular/compiler';
import { Observable, firstValueFrom } from 'rxjs';
import { ReadList } from 'src/app/contracts/readList';

@Injectable({
  providedIn: 'root'
})
export class ReadListService {
  constructor(private httpClientService: HttpClientService) { }

  getReadList(userId:string,successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<ReadList>{
    const observable: Observable<ReadList> = this.httpClientService.get({
      controller:"readlists",
    },userId);

    const promiseData = firstValueFrom(observable);

    promiseData.then(()=>successCallBack())
    .catch((error)=>errorCallBack(error))


    return promiseData;

  }
}
