import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react'; // Optional: For icons


const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you with your construction project?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: `You said: ${input}` };
    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chatbot Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-40">
          <h2 className="text-lg font-semibold mb-2">Chatbot Assistant</h2>
          <div className="bg-gray-100 p-2 rounded h-64 overflow-y-auto mb-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded text-sm ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded text-sm"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-3 rounded text-sm">Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
