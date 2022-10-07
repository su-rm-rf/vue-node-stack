# 类型注解
  TS提供了静态代码分析，用以分析代码结构和提供的类型注解
# 接口
  interface，结构兼容就是类型兼容，实现接口不必显式的implements，调用方法时传参应>=定义时接收的参数
# 类
  class，构造函数的参数使用public即成员变量
  转译后，基于原型面向对象编程

# 配置
  tsconfig.json
    include, outDir, target, allowJs
    noEmitOnError, noImplicitAny
# 与构建工具集成
  ts-loader
  由模块导入
    import XX = require('xx')
  获取声明文件
  由模块导出
    export = XX
  过多或过少的参数
    TS的函数重载
  连续添加属性
    类型断言 Options
    any可以做任何事情，但也会失去TS的错误检测和编译器支持
    使用{}而非Object
# 启用严格检查
    没有隐式的any noImplicitAny
    严格的null与undefined检查 strictNullChecks，依赖文件也启用了
    declare var XX: number
    declare function XX(yy: YY): any
    this没有隐式的any
      在类的外部使用this默认获得any类型，需要指定this


