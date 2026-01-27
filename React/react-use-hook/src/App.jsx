import React, { useState, useEffect, useRef } from 'react'
// import { useMountedState } from 'react-use'
import useMountedState from './hooks/useMountedState'

export default function App() {
    const isMounted = useMountedState();
    const [num, setNum] = useState(0);
    const divRef = useRef(null);
    // console.log(divRef.current);
    console.log(isMounted());

    useEffect(() => {
        setTimeout(() => {
            setNum(1);
            // console.log(isMounted());
        }, 1000);
    }, []);
    return (
        <div ref={divRef}>
            {isMounted() ? '组件挂载完成' : '组件还在编译'}
        </div>
    )
}