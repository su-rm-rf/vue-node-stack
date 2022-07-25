vue3

Vue可以自底向上逐层应用，Vue的核心库只关注视图层

Vue的核心，是一个允许采用简洁的模板语法、声明式的将数据渲染进DOM的系统

响应式的

声明式渲染
  JS表达式 {{cab}}
  指令 v-bind:src=cab
处理用户输入
  事件监听器 v-on:click=handle
  表单和状态双向绑定 v-model=cab
条件与循环
  条件 v-if=cab
  循环 v-for

可以把数据绑定到DOM的文本、attribute、结构

过渡效果

组件化应用构建
组件系统，组件树
  组件，是一个具有预定义选项的实例，将子组件定义在父组件的components选项中，template
  将数据从父组件传入子组件，props

创建App Vue.createApp 
挂载App App.mount(dom)
属性绑定 v-bind:attr

createApp传参的属性
data
methods
mounted
components
在方法内部，this可以直接调用data和methods内部的变量和方法名
<!-- 在mounted和methods中，this可以直接调用data和methods内部的变量和方法名 -->
