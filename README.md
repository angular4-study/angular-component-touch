# 组件间通讯
  ## 输入属性：@Input()
  - 父组件的值会影响子组件，但是子组件的值得改变不会反馈到父组件，是单向的。
  - 和另一种传递参数的手段（路由传参）相比，@Input()只能在父子组件间使用。
  ## 输出属性：@Output()
  - 1.在父子组件间传递：(耦合高)；实例化EventEmitter，在子组件中调用其emit方法，向组件外发送数据，
  在父组件中，将发送的绑定到父组件的方法上，然后在父组件中
  - 2.中间人传递方式：(耦合低)；中间人从一个组件接收数据，并将其传递给另一个组件;本例中：
    - 点击priceQuote组件的button，触发buyStock方法，此方法将EventEmitter<PriceQuote>数据buy通过emit方法发送出去
    - 此时，外部组件app.component.html中对```<app-price-quote></app-price-quote>```组件做了数据绑定并通过自己的buyHandler方法
    进行处理(赋值给自己的priceQ属性)
    - 此时页面开始渲染```<app-order></<app-order>```组件，在app.component.html中将上一步更新的priceQ的值，绑定在```<app-order></<app-order>```
    组件的priceQuote值上
    - ```<app-order></<app-order>```组件接收到值，然后在自己组件html中，展示出来

# angular生命周期
-  ![image](https://github.com/angular4-study/angular-component-touch/lifeCycle.jpg)














# AngularComponentTouch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
