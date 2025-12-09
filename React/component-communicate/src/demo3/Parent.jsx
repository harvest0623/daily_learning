import { useState } from "react";
import Child1 from "./Child1"
import Child2 from "./Child2"

export default function Parent(pros) {
    let [message, setMessage] = useState();
    const getMeg = (msg) => {
        setMessage(msg);
    }
    return (
        <div>
            <h2>父组件三</h2>
            <Child1 getMeg = {getMeg} />
            <Child2 msg = {message}/>
        </div>
    )
}
