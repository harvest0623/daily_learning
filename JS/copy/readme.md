# 拷贝
- 只针对引用类型
- 基于原对象，拷贝得到一个新对象

# 浅拷贝
- 新对象受原对象的影响(只拷贝了原对象的第一层，里面的子对象拷贝的还是引用地址)
1. [].slice(0)
2. [...arr]
3. [].concat(arr)
4. arr.toReversed()
5. Object.assign({}, obj)

# 深拷贝
- 层层拷贝，新对象不受原对象修改的引用
1. structuredClone -- 无法拷贝函数
2. JSON.parse(JSON.stringify(obj)) -- 无法处理 bigint, undefined, NaN, Infinity, function