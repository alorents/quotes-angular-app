import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotesFromMasterList = QUOTES;
  quotesFromUser: Quote[] = JSON.parse(localStorage.getItem('LSQuotes')) || [];
  quoteFromBrowser = new Quote();

  constructor() { }

  ngOnInit() {
  }

  addQuoteToList() {
    const quoteToAdd = new Quote();
    quoteToAdd.quote = this.quoteFromBrowser.quote;
    quoteToAdd.author = this.quoteFromBrowser.author;
    this.quotesFromUser.push(quoteToAdd);
    localStorage.setItem('LSQuotes', JSON.stringify(this.quotesFromUser));
  }
}
