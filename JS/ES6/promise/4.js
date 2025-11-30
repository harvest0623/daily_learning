// 第一步：订高铁票（3秒后完成，结果是“票已售罄”）
function train() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('查询车次成功');
        //resolve('购票成功');
        reject('票已售罄'); 
        }, 3000)
    });
}
// 第二步：订酒店（2秒后完成，结果是“酒店满房”）
function hotel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('筛选酒店成功');
        resolve('预定酒店成功');
        // reject('酒店满房');
        }, 2000)
    })
}
// 第三步：出发旅行（1秒后完成）
function travel() {
    setTimeout(() => {
        console.log('收拾行李，快乐出发！');
    }, 1000)
}
// 订高铁票→订酒店→出发旅行
train()
    .then(() => {
        return hotel(); // 高铁票订好后，才执行订酒店
    })
    .then(() => {
        travel(); // 酒店订好后，才执行出发
    })
    .catch((err) => {
        console.log('旅行计划泡汤：', err); // 只要中间有失败，就会跳到这里
})

// 回调地狱写法（不推荐）
// train((trainRes) => {
//     console.log('查询车次成功');
//     if (trainRes === '购票成功') {
//         hotel((hotelRes) => {
//         console.log('筛选酒店成功');
//         if (hotelRes === '预定酒店成功') {
//             travel();
//         }
//         });
//     }
// }, 
// (err) => {
//     console.log('旅行计划泡汤：', err);
// });

train()
.then((trainResult) => {
    console.log('第一步结果：', trainResult); // 输出“第一步结果：购票成功”
    return hotel();
})
.then((hotelResult) => {
    console.log('第二步结果：', hotelResult); // 输出“第二步结果：预定酒店成功”
    travel();
})
.catch((err) => {
    console.log('旅行计划泡汤：', err);
});