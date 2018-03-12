import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';
import {QuoteDetailComponent} from './quote-detail/quote-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/quote', pathMatch: 'full' },
  { path: 'quote', component: QuoteDetailComponent },
  { path: 'quotes', component: QuotesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
