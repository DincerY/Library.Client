import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { All_Authors } from 'src/app/contracts/all_authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private httpClientService:HttpClientService) { }


  getAllAuthors(successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<All_Authors[]>{
    const observable:Observable<All_Authors[]> = this.httpClientService.get<All_Authors[]>({
      controller:"authors"
    })
    const promiseData = firstValueFrom(observable);
    promiseData.then(value=>successCallBack()).catch(error=>errorCallBack(error));
    return promiseData;
  }

}
