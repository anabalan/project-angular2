import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { StorageService } from '../storage.service';

// Tipagem
type PayloadJSON = {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  bpi: {
    [key in 'USD' | 'BRL']: {
      code: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
};

// Colocando o serviço por toda aplicação
@Injectable({
  providedIn: 'root',
})


export class BitcoinService {

  // // Cotação mais atual Dólar
  // private currentCurrency_usd;

  // // Cotações passadas Dólar
  // private pastCurrencies_usd = [];
  // private oldCurrencies_usd = [
  //   {
  //     date: '',
  //     currency: '',
  //   },
  // ];

  // // Cotação mais atual Real
  // private currentCurrency_brl;

  // // Cotações passadas Real
  // private pastCurrencies_brl = [];
  // private oldCurrencies_brl = [
  //   {
  //     date: '',
  //     currency: '',
  //   },
  // ];

  public indexCurrency;

  private bitcoinData: PayloadJSON;
  private bitcoinHistory: PayloadJSON[] = [];

  
  constructor(private http: HttpClient, private storage: StorageService) {
    this.bitcoinHistory = this.storage.get('@app:bitcoinHistory') ?? [];

    this.requestCurrencyBitcoin();
    // Repete a função no tempo determinado
    setInterval(() => {
      this.requestCurrencyBitcoin();
    }, 60000);
  }

  // Cotação atual
  private requestCurrencyBitcoin() {
    this.http
      .get<PayloadJSON>(
        'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'
      )
      .subscribe((data) => {
        this.bitcoinData = data;
        this.bitcoinHistory.push(data);

        // Salvando os dados no navegador
        this.storage.set('@app:bitcoinHistory', this.bitcoinHistory);
      });
  }
  
  // USD - Retornando valor
  getCurrentCurrency_usd() {
    return this.bitcoinData.bpi.USD.rate_float;
    
  }

  // BRL - Retornando valor
  getCurrentCurrency_brl() {
    return this.bitcoinData.bpi.BRL.rate_float;
    
  }

  // Retornando histórico das cotações
  getBitcoinHistory() {
    return this.bitcoinHistory;
  }

}
