var Flippers = (function() {
    function Flippers(node, currentTime, nextTime) {
        this.isFlipping = false;
        this.duration = 600
        this.flipNode = node
        this.frontNode = node.querySelector('.front')
        this.backNode = node.querySelector('.back')
        // 设置要展示的值
        this.setFrontTime(currentTime)
        this.setBackTime(nextTime)
    }
    Flippers.prototype.setFrontTime = function(time) {
        this.frontNode.dataset.number = time
    }
    Flippers.prototype.setBackTime = function(time) {
        this.backNode.dataset.number = time
    }
    // 控制卡片翻转并更新时间
    Flippers.prototype.flipDown = function (currentTime, nextTime) {
        var _this = this;
        if (this.isFlipping) {
            return false;
        }
        this.isFlipping = true;
        this.setFrontTime(currentTime);
        this.setBackTime(nextTime);
        this.flipNode.classList.add("running");
        setTimeout(function () {
            _this.flipNode.classList.remove("running");
            _this.isFlipping = false;
            _this.setFrontTime(nextTime);
        }, this.duration);
    };
    return Flippers;
}())
function getTimeFromDate(date) { // 把这个字符串切出来
    return date.toTimeString().slice(0, 8).split(':').join(''); // '21:06:54 GMT+0800 (中国标准时间)'
}
const flips = document.querySelectorAll('.flip')
const now = new Date()
// 上一秒
const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000))
// 下一秒
const nextTimeStr = getTimeFromDate(now)
// 便利每个卡片，为每个卡片打造控制它翻转的函数
const flippers = Array.from(flips).map((flip, i) => {
    const flipper = new Flippers(flip, nowTimeStr[i], nextTimeStr[i]);
    // 确保初始显示正确的时间
    flipper.setFrontTime(nextTimeStr[i]);
    return flipper;
})
console.log(flippers);
setInterval(() => {
    const now = new Date()
    const nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000))
    const nextTimeStr = getTimeFromDate(now)
    for (let i = 0; i < flippers.length; i++) {
        if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
        }
        flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i])
    }
}, 1000)