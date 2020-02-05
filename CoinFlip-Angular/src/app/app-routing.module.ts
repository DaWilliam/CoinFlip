import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinFlipComponent } from './coin-flip/coin-flip.component';


const routes: Routes = [
  {path: '', redirectTo: 'coin', pathMatch: 'full' },
  {path: 'coin', component: CoinFlipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
