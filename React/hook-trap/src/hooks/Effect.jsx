import { useState, useEffect } from "react";

async function getData() {
    const data = new Promise((resolve) => {
        setTimeout(() => {
            resolve(100);
        }, 1000)
    })
    return data;
}

export default function Effect() {
    const [num, setNum] = useState(() => {
        return 1;
    });
    const [age, setAge] = useState(18);

    // useEffect(() => {
    //     getData().then((data) => {
    //         console.log(data);
    //         setNum(data);
    //     }, [age])
    // })

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log(num);
            // setNum(num + 1);
        }, 1000)
        return () => {  // 组件卸载前
            clearInterval(timer);
        }
    })
    
    function add() {
        setNum((prev) => {
            // console.log(prev); // num 被修改前的状态
            return prev + 1;
        })
        // setAge((prev) => {
        //     return prev + 1;
        // })
    }
    return (
        <div onClick={add}>{num}--{age}</div>
    )
}
