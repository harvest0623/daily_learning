export default function Child(pros) {
    console.log(pros);
    const state = {
        num: 100
    };
    function send() {
        pros.getNum(state.num);
    }
    return (
        <div>
            <h3>子组件二</h3>
            <button onClick={send}>发送</button>
        </div>
    )
}
