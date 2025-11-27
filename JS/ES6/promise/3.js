function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('相亲成功');
            reject('不满意');  // 返回一个成功状态
        }, 3000)
    });
}
function marry() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('结婚');
            reject('不愉快');
        }, 2000)
    })
}
function baby() {
    setTimeout(() => {
        console.log('小宝宝出生');
    }, 1000)
}
// 1. xq() 立即返回了一个 promise 对象，状态为等待
// 2. 3秒后 xq() 得到的 promise 对象状态变为成功
// 3. then 里面的回调函数才执行

// xq()
// .then(() => {  // then源码默认也返回了一个 promise 对象，状态继承了前面的 xq()
//     return marry(); // return让then返回的promise状态根据marry返回的promise状态而改变
// })
// .then(() => {
//     baby();
// })

// xq().then(() => {
//     marry().then(() => {
//         baby();
//     })
// });

xq()
.then(() => {
    return marry();
})
.then(() => {
    baby();
})
.catch((err) => {
    console.log('catch',err);
})