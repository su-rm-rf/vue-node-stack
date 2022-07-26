vue3

Vue可以自底向上逐层应用，Vue的核心库只关注视图层

Vue的核心，是一个允许采用简洁的模板语法、声明式的将数据渲染进DOM的系统

响应式的

## 应用实例与组件实例
# 创建一个应用实例
  App Vue.createApp 
  应用实例，注册全局组件、根组件，链式调用、返回该同一实例
挂载App App.mount(dom)
  一个应用需要被挂载到一个DOM元素中，用作渲染的起点
  mount返回根组件实例，没有完全遵循MVVM模型
  组件树，所有的组件实例，共享同一个应用实例

# 组件实例property
createApp的属性
data
methods
computed
mounted
components
directives
组件实例的所有property，都可以在组件的模板中访问
属性内部的方法，this指向当前实例

内置property
  $attrs $emit

# 生命周期钩子
组件初始化过程，设置数据监听、编译模板、将实例挂载到DOM、在数据变化时更新DOM等，以及运行生命周期钩子函数
生命周期图示
beforeCreated created
beforeMount mounted
beforeUpdate updated
beforeUnmount unmounted
不要在property或回调上使用箭头函数，因为它没有this，会沿着作用域向上查找


## 模板语法
基于HTML的模板语法，声明式绑定
虚拟DOM渲染函数，计算出最少重新渲染的组件数量、DOM操作次数

# 插值
  双大括号 {{cab}} 输出纯文本
  v-once指令 一次插值、不更新
  v-html 输出真正的HTML (容易导致XSS攻击)，改用组件
属性绑定
  指令 v-bind:src=cab
  bool属性 truthy falsey
使用JS表达式
  当前活动实例的数据作用域下作为JS被解析，只能是单个表达式

# 指令
v- 前缀
参数 v-bind:属性
  v-on:方法
动态参数  v-bind:[attrName] v-on:[eventName]
修饰符 v-on:event.prevent

# 缩写
v-bind:attr -> :attr :[attr]
v-on:event -> @event @[event]

处理用户输入
  事件监听器 v-on:click=handle
  表单和状态双向绑定 v-model=cab
条件与循环
  条件 v-if=cab
  循环 v-for  for li in List

可以把数据绑定到DOM的文本、attribute、结构上

过渡效果

# 组件化应用构建
组件系统，组件树
  组件，是一个具有预定义选项的实例，将子组件定义在父组件的components选项中，template
  解耦，将数据从父组件传入子组件，props，v-bind

# 与自定义元素的关系
  Web Components

## Data Property和方法
property仅在实例首次创建时被添加，字段初始化
自定义property 直接暴露或$data，内部property _

方法，this指向组件实例，不用箭头函数，模板中的事件监听

防抖和节流
lodash _.debounce() 可复用组件 在created方法中添加防抖函数
throttle

## 计算属性和侦听器
对于任何包含响应式数据的复杂逻辑，都应该使用计算属性 computed
计算属性缓存VS方法
  计算属性，基于它们的响应式依赖关系进行缓存，一次计算、可缓存
计算属性的setter方法
  默认只有getter方法，可手动设置setter方法

侦听器watch
  当需要在数据变化时，执行异步或开销较大的操作时，使用watch
  更通用的方式来观察和响应当前活动的实例上的数据变动 watch property 执行 method
  但要少用watch，多用计算属性computed

