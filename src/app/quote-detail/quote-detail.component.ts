import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
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
