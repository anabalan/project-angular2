import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HTTP Client
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { MercadoComponent } from './mercado/mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BitcoinComponent,
    MercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
