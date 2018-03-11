import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = QUOTES;
  quote: Quote;

  constructor() { }

  ngOnInit() {
    this.quote = this.randomQuoteIndex();
  }

  randomQuoteIndex() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
