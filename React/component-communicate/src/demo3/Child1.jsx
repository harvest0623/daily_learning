export default function Child1(pros) {
    const state = {
        msg: '3.1'
    };
    function send() {
        pros.getMeg(state.msg);
    }
    return (
        <div>
            <h3>子组件3.1</h3>
            <button onClick={send}>发送</button>
        </div>
    )
}
