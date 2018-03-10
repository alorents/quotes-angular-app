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
  index = Math.floor(Math.random() * this.quotes.length);
  quote: Quote = this.quotes[this.index];

  constructor() { }

  ngOnInit() {
  }

}
