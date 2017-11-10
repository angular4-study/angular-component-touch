import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from '../price-quote/price-quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  /**
   * @Input(): 输入属性装饰器，父组件的值会影响子组件，但是子组件的值得改变不会反馈到父组件，是单向的
   */
  /*@Input()
  stockCode: string;

  @Input()
  amount: number;*/

  @Input()
  priceQuote: PriceQuote;

  constructor() {
    /*setInterval( () => {
      this.stockCode = 'Apple';
    }, 3000);*/
  }

  ngOnInit() {
  }

}
