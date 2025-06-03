import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const ws = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (open) {
            // اتصال به WebSocket هنگام باز شدن چت
            ws.current = new WebSocket('wss://your-llm-websocket-endpoint.com/chat');
            ws.current.onopen = () => setLoading(false);
            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setMessages((msgs) => [...msgs, { sender: 'bot', text: data.response || 'no response' }]);
                setLoading(false);
            };
            ws.current.onerror = () => {
                setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error connecting to server.' }]);
                setLoading(false);
            };
            ws.current.onclose = () => {};
        }
        // قطع اتصال هنگام بستن چت
        return () => {
            if (ws.current) ws.current.close();
        };
    }, [open]);

    const handleSend = () => {
        if (!input.trim()) return;
        const userMessage = { sender: 'user', text: input };
        setMessages((msgs) => [...msgs, userMessage]);
        setInput('');
        setLoading(true);
        if (ws.current && ws.current.readyState === 1) {
            ws.current.send(JSON.stringify({ message: userMessage.text }));
        } else {
            setTimeout(() => {
                setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error connecting to server.' }]);
                setLoading(false);
            }, 500);
        }
    };

    useEffect(() => {
        if (open && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {open ? (
                <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200">
                    <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2 rounded-t-xl">
                        <span className="font-bold">Online Support</span>
                        <button onClick={() => setOpen(false)}><FaTimes /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 bg-blue-50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`px-3 py-2 rounded-lg max-w-[80%] text-sm 
                                    ${msg.sender === 'user' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>{msg.text}</div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="flex items-center border-t border-gray-200 p-2 bg-blue-100">
                        <input
                            className="flex-1 rounded px-2 py-1 border border-gray-300 focus:outline-none text-sm bg-white text-black"
                            type="text"
                            placeholder="write your message..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSend()}
                            disabled={loading}
                        />
                        <button
                            className="ml-2 text-blue-600 hover:text-blue-800 disabled:opacity-50"
                            onClick={handleSend}
                            disabled={loading}
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl text-3xl transition-colors duration-500"
                    onClick={() => setOpen(true)}
                >
                    <FaComments />
                </button>
            )}
        </div>
    );
}