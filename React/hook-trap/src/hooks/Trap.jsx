import { useEffect, useReducer, useState } from "react"

function reducer(state, action) {
    switch(action.type) {
        case 'add':
            return state + action.num;
        case 'minus':
            return state - action.num;
    }
    return state;
}

export default function Trap() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);  // [0, fn]

    dispatch({type: 'add', num: 1});

    useEffect(() => {  // 默认存在 let count = count;
        setInterval(() => {
            // 永远打印 0
            // console.log(count);
            // setCount(count + 1);

            // setCount((prev) => prev + 1)


        }, 1000)
    }, [])
    return (
        <div>{count}</div>
    )
}
