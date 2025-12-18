# hooks
1. useState() 可以接收一个值，也可以接收一个函数，函数只能执行同步的代码，不支持异步，提供的 setNum() 方法，可以接收一个值，也可以接收一个函数

2. useEffect()
useEffect(() => {}) 会在组件初次加载和每次重新渲染时触发
useEffect(() => {}, []) 只在组件初次加载时触发
useEffect(() => {}, [x]) 初次加载，和 x 值变更时触发
useEffect 中返回一个函数，该函数会在组件卸载前触发

3. const [count, dispatch] = useReducer(reducer, 0);
返回一个初始0，和一个函数体 dispatch
dispatch每次调用就会导致传入的 reducer 函数触发