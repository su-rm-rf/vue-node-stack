# vue-node-stack

超越语言
JavaScript将成为一门严谨的语言，而浏览器只是其运行环境之一
JS解析引擎：Webkit、V8

# Vue全家桶

vue、vuex、vue-router

babel, webpack5, es6, ts, sass, vue3, vue-router4, vuex, axios, karam, jasmine, jest

模块化：JS代码的逻辑隔离模式，内部私有、向外暴露接口
  全局function: 将不同的功能封装成不同的函数；容易引起命名冲突
  namespace: 操作原型对象、简单对象封装，减少了全局变量、解决命名冲突；但外部可以修改内部
  闭包: 立即调用函数表达式IIFE，隔离模块之间的影响，可以引入依赖
  AMD: 
  CMD: 
  CommonJS: 在服务端，模块同步加载；在浏览器端，提前转译合并处理
    Nodejs运行时动态加载，Browserify在转译时就加载合并require的模块
    模块的原理：
      1.根据相对路径获取绝对路径，从缓存中加载；
      2.new一个模块，将模块缓存，然后加载模块：读文件字符串，用函数包装器进行包装，字符串eval转成函数，执行函数
      保证了顶层变量作用在模块范围内，而不是全局对象
      提供了一些看似全局但实际上是模块特定的变量，5个变量
    暴露的模块到底是什么？ 
    module等5个变量是怎么定义的？
    require到底做了什么？ 
  ESM: 对外接口是一种静态定义

组件化：UI层面的复用

工程化：

主流方案：babel

# 构建
代码转换：编译TS、ES6、SCSS
文件优化：压缩JS、CSS、HTML，压缩合并图片
代码分割：提取公共，懒加载
模块合并：合并
自动刷新：HMR
代码校验：提交规范、单元测试
自动发布：


编译：
babel
polyfill
runtime

打包：
webpack

flex布局
postcss

调试抓包、性能分析

typescript

