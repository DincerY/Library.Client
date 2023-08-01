import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Book } from 'src/app/contracts/list_book';
import { Create_Book } from 'src/app/contracts/create_book';
import { Api_Response } from 'src/app/contracts/api_response';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClientService:HttpClientService) { }

  getBooks(successCallBack?:()=>void,errorCallBack?:(error)=>void):Promise<List_Book[]>{
    const observable: Observable<List_Book[]> = this.httpClientService.get<List_Book[]>({
      controller:"books"
    });
    const promiseData = firstValueFrom(observable);
    promiseData.then(value => successCallBack())
    .catch(error=> errorCallBack(error));
    return promiseData
  }
  
  createBook(createBook:Create_Book,successCallBack?:()=>void,errorCallBack?:(error)=> void){
    const observable: Observable<Create_Book> = this.httpClientService.post<Create_Book>({
      controller:"books"
    },createBook)

    const promiseData = firstValueFrom(observable);
    promiseData.then(
      value => successCallBack()
    ).catch(error => errorCallBack(error))
  }
}
