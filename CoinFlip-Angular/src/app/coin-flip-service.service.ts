import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get('http://localhost:8761/api/condition/condition/answer/'+coin)
  }
}
