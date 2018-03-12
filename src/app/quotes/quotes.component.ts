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
  quotesFromUser: Quote[] = [{quote: '', author: ''}];

  quoteFromBrowser = new Quote();

  constructor() { }

  ngOnInit() {
  }

  addQuoteToList() {
    console.log('Quote ' + this.quoteFromBrowser.quote + ' ' + this.quoteFromBrowser.author);
    const quoteToAdd = new Quote();
    quoteToAdd.quote = this.quoteFromBrowser.quote;
    quoteToAdd.author = this.quoteFromBrowser.author;
    this.quotesFromUser.push(quoteToAdd);
  }
}
