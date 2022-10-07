## 创建一个Vue应用
# 应用实例
  createApp(根组件)
# 根组件
  子组件，组件树
# 应用配置
  应用实例的config对象，配置一些应用级的选项、注册应用范围内可用的资源
# 挂载组件
  mount(容器) 在应用配置和资源注册完成后调用，渲染应用实例
  返回根组件实例、而非应用实例
  DOM中的根组件模板：
    template 或 容器的innerHTML
# 多个应用实例
  创建多个小的应用实例，分别挂载到容器元素

## 模板语法
  基于HTML的模板语法，
  Vue将模板编译成高度优化的JavaScript代码，结合响应式系统，实现最少重新渲染和DOM操作
  虚拟DOM，JSX手写渲染函数、而不采用模板
# 文本插值
  {{ }} 纯文本
# 原始HTML
  v-html指令，将元素的innerHTML与rawHtml同步，纯HTML、不能使用数据绑定
  XSS漏洞，不能使用用户提供的HTML内容
# Attribute绑定
  v-bind，简写 以:开头
  布尔型attribute 真就包含，假就忽略
  动态绑定多个值，对象，变为attribute
# 使用JavaScript表达式
  以组件为作用域解析执行，{{ }} v-开头
  仅支持单一表达式
  调用函数，使用组件暴露的方法
  仅能访问受限的全局对象列表，或在app.config.globalProperties中添加
# 指令Directive
  在表达式的值变化时，响应式的更新DOM
  参数Argument，简写 :属性 @事件
  动态参数，简写 :[属性] @[事件] ，应当是字符串小写，使用计算属性替换复杂的表达式
# 修饰符Modifier
  以.开头的后缀，以特殊的方式被绑定
完整形态 Name:Argument.Modifier=value  例如 v-on:submit.prevent="onSubmit"

## 响应式基础
声明响应式状态
  Vue.reactive() 创建响应式对象，JavaScript Proxy
  setup 是一个专门用于组合式API的特殊钩子函数


## 单文件组件
  Single-File Component
  <script setup></script>是SFC中使用组合式API的编译时语法糖
  更少的样板内容、更简洁的代码；使用纯TS声明props和自定义事件；更好的运行时性能；更好的类型推导性能

# 基本语法
  script setup 代码会在每次组件实例被创建时执行
  顶层的绑定会被暴露给模板template，变量、函数声明、import导入的内容
# 响应式

# 响应式API
  ref


## 应用规模化

# 单文件组件
  SFC，将一个Vue组件的模板template、逻辑script和样式style封装在单个文件中
  为何要使用SFC？
  SFC是如何工作的？
    编译为一个标准的ESM
  如何看待关注点分离？
    更好的维护代码，松散耦合

# SFC工具链
  项目脚手架：
    Vite 构建工具
    Vue CLI 
  浏览器内模板编译注意事项
    将模板编译器运行在浏览器中
  IDE支持：VSCode + Volar插件



