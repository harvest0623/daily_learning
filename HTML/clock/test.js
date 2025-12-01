function getTimeFromDate(date) { return date.toTimeString().slice(0, 8).split(':').join(''); }

// 模拟页面初始化
const now = new Date()
console.log('当前时间:', now)

// 上一秒
const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000))
console.log('上一秒时间字符串:', nowTimeStr)

// 下一秒
const nextTimeStr = getTimeFromDate(now)
console.log('当前时间字符串:', nextTimeStr)

// 模拟时钟翻牌元素数量
const flipsCount = 6
console.log('翻牌元素数量:', flipsCount)
console.log('nowTimeStr长度:', nowTimeStr.length)
console.log('nextTimeStr长度:', nextTimeStr.length)

// 模拟初始化每个翻牌
for (let i = 0; i < flipsCount; i++) {
    console.log(`翻牌 ${i}: 当前数字=${nowTimeStr[i]}, 下一个数字=${nextTimeStr[i]}`)
}