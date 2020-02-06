import { Component, OnInit } from '@angular/core';
import { CoinFlipServiceService } from '../coin-flip-service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {

  answer : String
  coin : Number

  constructor(private coinFlipServ : CoinFlipServiceService) { }

  ngOnInit() {
    
  }

  flip() {

      this.answer = "Flipping"
      setTimeout(() => {
            this.coinFlipServ.getCoin().subscribe(
              (data : Number) => { 
                  this.coinFlipServ.getAnswer(data).subscribe(
                      (data2 : String) => { console.log(data2); this.answer = data2 }
                  ) 
              }
          )
      }, 2100)

      
  }
}
