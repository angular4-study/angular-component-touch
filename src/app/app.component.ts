import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * @ViewChild()装饰器： 可以在父组件里获得一个子组件的引用。可以调用子组件的方法。
   */
  @ViewChild('child1')
  child1: ChildComponent;

  message: string;

  // stock = '';

  // 声明一个准备接收emit发送的数据的变量
  priceQ: PriceQuote = new PriceQuote('', 0);

  buyHandler(event: PriceQuote) {
    this.priceQ = event;
  }

  ngOnInit(): void {
    // this.child1.greeting('Tom');
    // setInterval( () => {
    //   this.child1.greeting('Tom');
    // }, 4000);
  }

  ngAfterViewInit(): void {
    // console.log('父组件的视图初始化完毕');
    // setTimeout( () => {
    //   this.message = 'Hell';
    // }, 0);
  }

  ngAfterViewChecked(): void {
    // console.log('父组件的视图变更检测完毕');
  }

}
