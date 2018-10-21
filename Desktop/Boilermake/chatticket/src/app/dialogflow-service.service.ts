import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DialogflowServiceService {

  private accessToken: string= "cf067d1bef7b471cbfd785e8154b026e";
  private baseUrl: string = "https://api.api.ai/v1/query?v=20150910";

  constructor(private http: Http) { }

  public getResponse(str: string){
    let data = {
      query: str, 
      lang: 'en', 
      sessionId: '12345'
    }
    return this.http
    .post(`${this.baseUrl}`, data, {headers: this.getHeaders()})
    .map(res=> {
      return res.json()
    })
  }

  

  public getHeaders(){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.accessToken}`);
    return headers;
  }
}
