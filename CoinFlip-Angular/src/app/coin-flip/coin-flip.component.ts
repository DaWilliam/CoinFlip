import { Component, OnInit } from '@angular/core';
import { CoinFlipServiceService } from '../coin-flip-service.service';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {

  answer : String

  constructor(private coinFlipServ : CoinFlipServiceService) { }

  ngOnInit() {
    
  }

  flip() {
    let coin : Number
    this.coinFlipServ.getCoin().subscribe(
        (data) => { return data }, 
        (complete) => {coin = complete}
    )
    console.log(coin)
    //this.answer = this.coinFlipServ.getAnswer(coin) 
  }

}
