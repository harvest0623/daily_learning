# 类型
1. 原始类型 
number, string, boolean, undefined, null, Symbol, Bigint
2. 引用类型

# typeof
1. 可以准确的判断除了 null 以外的所有原始类型
2. 用 typeof 判断引用类型， 只有 function 能判断成功
- typeof 会通过将值转换为二进制来判断类型，对于二进制数据前三位是 0 的统一识别为对象，所有引用类型转为二进制前三位都是 0，而 null 转为二进制全是 0

# instanceof
1. x instanceof x 能判断引用类型，无法判断原始类型
- instanceof 通过隐式原型链的查找来判断 x 是否隶属于 X 这个类型

# Object.prototype.toString.call(x)
- Object.prototype.toString()
1. If the this value is undefined, return "[object Undefined]".
2. If the this value is null, return "[object Null]".
3. 将 toString 中 this 值作为参数传递给 ToObject，设 O 为调用 ToObject 的结果
4. 设一个变量 class 为 O 的 [[class]] 内部属性值
5. 返回一个字符串，这个字符串由 '[object ' + class + ']' 组成

- 一种结构它的内部属性 [[class]] 对应的值 就是 创建它的那个构造函数

# Array.isArray(x)
x.__proto__ == Array.prototype