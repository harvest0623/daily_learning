class Promise{
    constructor(fn){
        function resolve(){

        }
        function reject(){

        }
        fn(resolve,reject);
    }
}

class MyPromise {
    constructor(fn) {
        // 初始化状态：pending（等待）、fulfilled（成功）、rejected（失败）
        this.status = 'pending';
        // 成功时的值
        this.value = undefined;
        // 失败时的原因
        this.reason = undefined;
        // 成功回调的队列（可能多个.then）
        this.onFulfilledCallbacks = [];
        // 失败回调的队列
        this.onRejectedCallbacks = [];

        // 成功函数：把状态改成fulfilled，执行所有成功回调
        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                // 依次执行.then里的回调
                this.onFulfilledCallbacks.forEach(cb => cb(this.value));
            }
        }
        // 失败函数：把状态改成rejected，执行所有失败回调
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                // 依次执行.catch里的回调
                this.onRejectedCallbacks.forEach(cb => cb(this.reason));
            }
        }
        // 执行传入的异步函数
        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    // .then方法：注册成功/失败的回调
    then(onFulfilled, onRejected) {
        // 如果没传成功回调，默认透传value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        // 如果没传失败回调，默认透传reason
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
        // 返回新的Promise，实现链式调用
        return new MyPromise((resolve, reject) => {
        if (this.status === 'fulfilled') {
            // 成功状态：直接执行回调
            setTimeout(() => {
            try {
                const result = onFulfilled(this.value);
                // 回调的返回值传给下一个.then
                resolve(result);
            } catch (err) {
                reject(err);
            }
            }, 0);
        }
        if (this.status === 'rejected') {
            // 失败状态：直接执行回调
            setTimeout(() => {
            try {
                const result = onRejected(this.reason);
                resolve(result);
            } catch (err) {
                reject(err);
            }
            }, 0);
        }
        if (this.status === 'pending') {
            // 等待状态：把回调存到队列里
            this.onFulfilledCallbacks.push(() => {
            setTimeout(() => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }, 0);
            });
            this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }, 0);
            });
        }
        });
    }
    // .catch方法：就是.then的失败回调版
    catch(onRejected) {
        return this.then(null, onRejected);
    }
}