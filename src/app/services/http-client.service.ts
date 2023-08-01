import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient:HttpClient) { }
  baseUrl="https://localhost:7230/api";
  url(requestParameters: Partial<RequestParameters>):string{
    return `${requestParameters.parameterBaseUrl ? requestParameters.parameterBaseUrl : this.baseUrl}/${requestParameters.controller ? requestParameters.controller : ""}${requestParameters.action ? `/${requestParameters.action}` : ""}`
  }
   
  get<T>(requestParameters: Partial<RequestParameters>,id?:string):Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint){
      url = requestParameters.fullEndPoint;
    }
    else{
      url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.queryString ? `?${requestParameters.queryString}`: "" }`;
    }
    return this.httpClient.get<T>(url)
  }
  

  post<T>(requestParameters: Partial<RequestParameters>,body:Partial<T>):Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint){
      url = requestParameters.fullEndPoint;
    }
    else{
      url = `${this.url(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}`: "" }`;
    }
    return this.httpClient.post<T>(url,body);
  }
  put<T>(requestParameters:Partial<RequestParameters>,body: Partial<T>): Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint){
      url = requestParameters.fullEndPoint;
    }
    else{
      url = `${this.url(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}`: "" }`;
    }
    return this.httpClient.put<T>(url,body);
  }
  delete<T>(requestParameters: Partial<RequestParameters>,id?:string):Observable<T>{
    let url:string = "";
    if(requestParameters.fullEndPoint){
      url = requestParameters.fullEndPoint;
    }
    else{
      url = `${this.url(requestParameters)}${id ? `/${id}`: ""}${requestParameters.queryString ? `?${requestParameters.queryString}`: "" }`;
    }
    return this.httpClient.delete<T>(url)
  }
}
 

export class RequestParameters{
  controller: string
  action?:string
  queryString?:string
  parameterBaseUrl:string
  fullEndPoint:string
}


