【
  8:00~12:00
  14:00~18:00
  20:00~22:00
  4+4+2=10小时
  10*5*4=200小时
】

在代码运行前就预测代码执行结果

# 静态数据类型
  在代码运行之前，就预测需要什么样的代码
# 静态类型检查 Static type-checking
  静态类型检查器：在代码运行之前，就找到错误
  描述了值应有的结构和行为
# 非异常失败 Non-exception失败
  非运行时错误
# 类型工具 Types for Tooling
  类型检查器：提供代码补全、错误信息、快速修复、导航
# 编译器 the Typescript compiler
  转换为ES5或ES3的js代码
# 报错时仍产出文件 noEmitOnError
# 显示类型 explicit Types
  类型注解 type annotation，签名
  类型系统自动推断出类型，最好不用手动添加类型注解
# 类型抹除 Erased Types
  ts转换为js后，大部分ts独有的代码会被抹除
# 降级 Downleveling
  将ES6+语法转为低版本，target: es2015或更早的
# 严格模式 Strictness
  检查代码、享受TS的工具功能，strict, 
  noImplicitAny: 当类型被隐式推断为any时，会抛出错误
  strictNullChecks: 更明确的处理null和undefined，以防忘记处理

## 常见类型：
# 原始类型：The primitives
  string
  number: 只有number，没有int或float
  boolean
# 数组：
  string[], Array<number>
# any：
  不希望一个值导致类型检查错误
  noImplicitAny：避免any
# 变量上的类型注解 Type Annotations on Variables
  显示指定变量的类型，写在被声明类型的后面
  少用类型注解
# 函数 Function
  传递数据，指定输入值输出值的类型
  参数类型注解 Parameter Type Annotations
    跟在参数名字后面，检查函数的实参，至少会检查传入参数的数量
  返回值类型注解 Return Type Annotations
    跟在参数列表后面，会自动推断，少写
    显示指定，可能是因为要编写文档，或阻止意外修改，或风格偏好
  匿名函数 Anonymous Functions
    上下文推断
# 对象类型 Object Types
  列出它的属性和对应的类型
  可选属性
    ? 使用之前先检查是否undefined
# 联合类型 Union Types
  组合构建新的类型
  定义一个联合类型： id: number|string
  使用联合类型： 类型收窄，if else，若都有，则不必收窄
# 类型别名 Type Aliases
  一个可以指代任意类型的名字，type 比如命名一个对象类型或联合类型
# 接口 Interfaces
  接口声明，命名对象类型的一种方式
  结构化的类型系统：只关心类型的结构和能力
  VS类型别名：接口的几乎所有特性都可以在type中使用
    区别：类型别名无法添加新的字段，接口可以扩展
      拓展类型：interface通过接口继承extends，type通过交集&
# 类型断言 Type Assertions
  指定为一个更具体的类型，而非强制转换, xx as XX, <XX>xx
    双重断言，先any或unknown类型、后期望类型
  会被编译器移除，不会影响运行时的行为，类似于类型注解
# 字面量类型 Literal Types
  与联合类型结合使用，限定参数值
  字面量推断 Literal Inference
    as 类型； as const
# null和undefined
  strictNullChecks 建议开启
# 非空断言操作符 Non-null Assertion Operator
  后缀! 表示值不可能是null或undefined
# 枚举
  一个值可能是多个常量中的一个
# 不常见的原始类型 Less Common Primitives
  bigInt
  symbol


