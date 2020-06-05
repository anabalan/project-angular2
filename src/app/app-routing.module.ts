import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { IndexComponent } from './index/index.component';
import { MercadoComponent } from './mercado/mercado.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin', component: BitcoinComponent},
  {path: 'mercado', component: MercadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
