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
-  ![image](https://github.com/angular4-study/angular-component-touch/blob/master/lifeCycle.png)
- 在组件中implements钩子接口，然后重写方法，如：
```ts
export class LifeComponent implements OnInit {
  // 钩子函数
  ngOnInit() {
  
  }
}
```
- **1. constructor**：【实例化对象】
- **2. ngOnChanges** : 【初始化输入属性】。只有在输入属性改变时才会被调用，并且，只能监控到不可变对象(引用不变必定内容不变)的引用的改变。
- **3. *ngOnInit*：【初始化除了输入属性外其它的所有属性】
只检测，不操作值。
- zone.js: （package.json中配置）当angular应用运行时，其实就是一颗组件树。每个组件都会生成一个属于它自己的变更检测器，当任何一个变更
检测器检测到变化，zone就会根据组件的变更检查策略来检查组件，以判断组件是否需要更新它的模板。
- angular实现了两个变更**检查(调用DoCheck钩子，从根往下)**策略：
  - **Default策略**： 不管变更发生在哪层组件，zone都会检查整颗组件树。(会避开OnPush策略的部分)
  - **OnPush策略**： 只有当某个组件的输入属性发生变化时，zone才会检测这个组件及其子组件。
- **4. ngDoCheck**：【做一个变更检查】在写带有‘check’钩子的时候，一定要非常小心，因为这种钩子只要有一个地方被触发，所有组件树上

- 【截止上面4步，整个组件所有的属性都应该被赋予了需要被赋予的值。下面，组件开始渲染视图。首先
渲染**投影**进来的内容，如果有子组件，则会在ngAfterContentChecked里去执行整个子组件的完整生命周期，完毕则返回，继续往下初始化视图，
当视图完全加载后，整个一套就完了。然后变更检测机制会一直监听angular应用与用户的交互，一旦有变更，在当前
组件树上所有活动组件上implements xxCheck的这些方法，都会被调用。如果变化导致某个组件的输入属性也改变了，那么
那个组件的onChanges也会被调用。最后是组件销毁时会调用】

的这个钩子都会被触发，会影响性能问题。
- **5. ngAfterViewInit，6. ngAfterViewChecked**：当子组件的这两个钩子都完毕后，父组件的这两个钩子才开始被调用，
但init方法只走一次，checked方法被调用(父组件checked也会被调用)。在变更检测周期中，angular禁止在一个视图已经被组装好之后，再去更新这个视图
- **ngAfterViewInit，ngAfterViewChecked总结**：
  - 视图组装完成  --> ngAfterViewInit --> ngAfterViewChecked
  - 如果组件有子组件，只有当所有子组件的视图都组装完毕以后，父组件的这俩方法，才会被调用
  - 不要在这俩方法里面去改变一个组件所绑定的属性，如果非改不可，可以写在一个timeout里，相当于另起一个线程
- **7. ngAfterContentInit,8. ngAfterContentChecked**：被投影进来的内容组装完，再调用的。ngAfterContentInit里面可以改变视图内容，因
为在ngAfterContentInit完毕的时候，整个视图其实并没有组装完。
  - **ngContent指令**：投影(父 -> 子)。将父组件模板中的任意片段投影到其子组件上。在子组件中，使用```<ngContent></ngContent>```指令，用来
  标记一个投影点。然后在父组件中写子组件，然后把子组件需要投影的片段，写在父页面的子组件中。如果有多个，可以通过双向加class属性区分。
  但是投影上的插值表达式，只能绑定父组件的属性值，因为它只是把视图copy一份在子组件上。（还有另一种投影实现：[innerHtml]，但是这是浏览器支持
  的，app上无法使用，不推荐。）
- **9. ngOnDestroy**。【当路由改变时，前一个路由地址对应的组件会被destroy，后一个路由对应的组件会被init】













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
