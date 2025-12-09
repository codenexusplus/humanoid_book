import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedText, setSelectedText] = useState(''); // New state for selected text

  const handleSendMessage = async () => {
    if (input.trim() === '' && selectedText.trim() === '') return;

    const newMessage = { sender: 'user', text: input + (selectedText ? ` (selected: "${selectedText}")` : '') };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');
    setSelectedText(''); // Clear selected text after sending

    // Determine endpoint based on whether selectedText is present
    const endpoint = selectedText.trim() ? '/chatbot/query-selection' : '/chatbot/query';
    const body = selectedText.trim()
      ? JSON.stringify({ text: input, selected_text: selectedText })
      : JSON.stringify({ text: input });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.answer }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error: Could not connect to chatbot.' }]);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', height: '400px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <textarea
        value={selectedText}
        onChange={(e) => setSelectedText(e.target.value)}
        placeholder="Simulate selected text here (optional)"
        rows="2"
        style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
      ></textarea>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          style={{ flexGrow: 1, padding: '5px' }}
          placeholder="Ask about the book content..."
        />
        <button onClick={handleSendMessage} style={{ marginLeft: '5px', padding: '5px 10px' }}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;