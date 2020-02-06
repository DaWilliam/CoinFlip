import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinFlipServiceService {


  constructor(private httpClient : HttpClient) {
      
  }

  public getCoin()
  {
      return this.httpClient.get('http://localhost:8761/api/flips/flips/flip')
  }

  public getAnswer(coin : Number) 
  {
    //console.log("val of coin: " + coin.valueOf())
    //return this.httpClient.request('GET', 'http://localhost:8761/api/condition/conditions/answer/', {responseType:'text'});
    return this.httpClient.get('http://localhost:8761/api/condition/conditions/answer/'+coin.valueOf(), {responseType: 'text'})
  }
}
