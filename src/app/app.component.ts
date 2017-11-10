import {Component} from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // stock = '';

  // 声明一个准备接收emit发送的数据的变量
  priceQ: PriceQuote = new PriceQuote('', 0);

  buyHandler(event: PriceQuote) {
    this.priceQ = event;
  }

}
