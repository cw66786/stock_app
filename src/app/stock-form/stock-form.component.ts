import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss'],
})
export class StockFormComponent implements OnInit {
  dollarsVsShares: boolean = true;
  transaction: string = '';
  format: string = 'Shares';
  amount!: string;
  symbol!: string;
  finalForm: boolean = false;
  summary: string = '';

  constructor() {}

  ngOnInit(): void {}

  switchFormat(format: string, bool: boolean) {
    this.format = format;
    this.dollarsVsShares = bool;
  }

  onSelect(transaction: string) {
    this.transaction = transaction;
    this.finalForm = true;
    

    
  }
}
