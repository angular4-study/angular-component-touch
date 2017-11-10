import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode = 'IBM';

  price = 1.0;

  /**
   * 输出属性。向组件外发射事件，并通过事件携带数据。
   * EventEmitter<T>: 属于angular/core, 往外面发射数据类型是T的数据。
   * @type {EventEmitter<any>}
   */
  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
  }

  ngOnInit() {
  }

  // 往外发射事件
  buyStock(event: PriceQuote) {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }

  /*buyQuoteHandler(event: PriceQuote) {

  }*/

}

export class PriceQuote {

  constructor(public stockCode: string,
              public lastPrice: number) {

  }

}
