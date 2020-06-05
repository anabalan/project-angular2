import { Component, OnInit } from '@angular/core';

import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'app-currency',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
export class BitcoinComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit(): void {}
}
















// import { Component, OnInit } from '@angular/core';
// // Importando HTTP Client
// import { HttpClient } from '@angular/common/http';

// // Fazendo a tipagem
// interface Bit {
//   time: {
//     updated: string;
//   };
//   bpi: {
//     [key in "USD" | "BRL"]: {
//       code: string;
//       rate: string;
//       rate_float: number;
//     };   
//   };
// };


// @Component({
//   selector: 'app-bitcoin',
//   templateUrl: './bitcoin.component.html',
//   styleUrls: ['./bitcoin.component.css']
// })

// export class BitcoinComponent implements OnInit {

//   bitcoins: Bit = null;

//   constructor(private http: HttpClient) { }

//   ngOnInit()  {
//     this.update();
//   }

//  
//   update() {
//     this.http.get<Bit>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
//     .subscribe(data => {
//         this.bitcoins = data;
//       })
//     };

// }
