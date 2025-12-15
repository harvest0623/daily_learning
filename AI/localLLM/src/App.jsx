import { useState } from 'react';
import './App.css'

export default function App() {
    const [question, setQuestion] = useState('请讲一个狼来了的故事');
    const [thinkContent, setThinkContent] = useState('等待您的输入...');
    const [replyContent, setReplyContent] = useState('');
    const handlerChange = (e) => {
        // console.log(e.target.value);
        setQuestion(e.target.value);
    }
    const update = async() => {
        // 拿到用户在 input 输入的值，传给 LLM ，并将大模型返回的内容展示在页面上
        if(!question) return;
        setThinkContent('思考中...');

        // 跟 LLM 交互
        const OLLAMA_API = 'http://localhost:11434';
        const MODEL_NAME = 'deepseek-r1:1.5b';
        const endpoint = `${OLLAMA_API}/api/generate`;
        const headers = {
            'Content-Type': 'application/json'
        }
        const respose = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: question,
                stream: true
            })
        })
        // console.log(respose);
        const reader = respose.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let buffer = '';
        setThinkContent('');
        while(!done) {
            const {value, done: doneReading} = await(reader.read());
            done = doneReading;
            const chunkValue = buffer + decoder.decode(value);
            // buffer = '';

            // 将字符中的换行 \n 干掉
            const lines = chunkValue.split('\n').filter(Boolean);
            for (let line of lines) {
                try {
                    const data = JSON.parse(line);
                    const delta = data.response;
                    if (delta) {
                        console.log(delta);
                        
                        setThinkContent((prev) => {
                            return prev + delta;
                        })
                    }
                } catch (error) {
                    buffer += line;
                }
            }
        }
        // console.log(reader);
    }
    return (
        <div className="container">
            <header className="app-header">
                <h1>Ollama 本地对话助手</h1>
                <p className="subtitle">简单、高效的本地 AI 对话体验</p>
            </header>
            <main className="chat-container">
                <div className="input-section">
                    <label htmlFor="question-input" className='input-label'>输入问题：</label>
                    <div className="input-group">
                        <input value={question} onChange={handlerChange} type="text" id="question-input" className="input" placeholder="请输入您的问题..." />
                        <button className="submit-btn" onClick={update}>
                            <span className="btn-test">发送</span>
                        </button>
                    </div>
                </div>
                <div className="settings-section">
                    <label className='setting-label'>
                        <input type="checkbox" />
                        <span>实时流式输出</span>
                    </label>
                </div>
                <div className="output-section">
                    <div className="output-header">
                        <h2>AI 回复</h2>
                    </div>
                    <div className="output-content">
                        <div>{thinkContent}</div>
                        <div>{replyContent}</div>
                    </div>
                </div>
            </main>
            <footer className='app-footer'>
                <p>连接本地 Ollama 服务</p>
            </footer>
        </div>
    )
}
