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
  displayedQuoteIndex = Math.floor(Math.random() * this.quotes.length);
  quote: Quote = this.randomQuoteIndex();

  constructor() { }

  ngOnInit() {
  }

  randomQuoteIndex() {
    this.displayedQuoteIndex = Math.floor(Math.random() * this.quotes.length);
    console.log('random index: ' + this.quotes[this.displayedQuoteIndex].quote);
    return this.quotes[this.displayedQuoteIndex];
  }
}
