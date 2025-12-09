import React, { useState, useEffect, useRef } from 'react';

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState(''); // State for selected text
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Effect to capture text selection
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (text && text.length > 0) {
        setSelectedText(text);
      } else {
        setSelectedText('');
      }
    };
    document.addEventListener('mouseup', handleSelectionChange);
    document.addEventListener('keyup', handleSelectionChange); // For keyboard selection
    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
      document.removeEventListener('keyup', handleSelectionChange);
    };
  }, []);

  const handleSendMessage = async () => {
    const messageToSend = input.trim();
    if (messageToSend === '' && selectedText === '') return;

    const userMessageContent = messageToSend + (selectedText ? ` (Context: "${selectedText.substring(0, 50)}...")` : '');
    const userMessage = { sender: 'user', text: userMessageContent };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const endpoint = selectedText ? '/api/chat-with-selection' : '/api/chat'; // New endpoint for selected text
      const body = selectedText
        ? JSON.stringify({ text: messageToSend, selected_text: selectedText })
        : JSON.stringify({ text: messageToSend });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponseText = '';
      let botCitations = [];

      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: '', citations: [] }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        chunk.split('\n\n').forEach(part => {
          if (part.startsWith('data: ')) {
            try {
              const data = JSON.parse(part.substring(6));
              if (data.type === 'text') {
                botResponseText += data.content;
                setMessages((prevMessages) => {
                  const lastMessage = prevMessages[prevMessages.length - 1];
                  return [
                    ...prevMessages.slice(0, -1),
                    { ...lastMessage, text: botResponseText },
                  ];
                });
              } else if (data.type === 'citations') {
                botCitations = data.content;
                setMessages((prevMessages) => {
                  const lastMessage = prevMessages[prevMessages.length - 1];
                  return [
                    ...prevMessages.slice(0, -1),
                    { ...lastMessage, citations: botCitations },
                  ];
                });
              }
            } catch (error) {
              console.error('Error parsing SSE data:', error);
            }
          }
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error: Could not connect to chatbot.' }]);
    } finally {
      setIsLoading(false);
      setSelectedText(''); // Clear selected text after sending
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '350px',
      height: '450px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      zIndex: 1000,
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}>
        RAG Chatbot
      </div>
      <div style={{ flexGrow: 1, overflowY: 'auto', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            marginBottom: '10px',
            textAlign: msg.sender === 'user' ? 'right' : 'left',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '18px',
              backgroundColor: msg.sender === 'user' ? '#007bff' : '#e0e0e0',
              color: msg.sender === 'user' ? 'white' : 'black',
              maxWidth: '80%',
              wordBreak: 'break-word',
            }}>
              {msg.text}
            </div>
            {msg.citations && msg.citations.length > 0 && (
              <div style={{ fontSize: '0.7em', color: '#666', marginTop: '5px' }}>
                <strong>Sources:</strong>
                <ul>
                  {msg.citations.map((cite, idx) => (
                    <li key={idx}><a href={cite.source_url} target="_blank" rel="noopener noreferrer">{cite.chapter_title}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div style={{ textAlign: 'left', marginBottom: '10px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: '18px',
              backgroundColor: '#e0e0e0',
              color: 'black',
              maxWidth: '80%',
              wordBreak: 'break-word',
            }}>
              ...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {selectedText && (
        <div style={{ background: '#fffbe6', padding: '5px 10px', borderTop: '1px solid #ffd700', fontSize: '0.8em' }}>
          Selected Text: "{selectedText.substring(0, 50)}..."
          <button onClick={() => setSelectedText('')} style={{ marginLeft: '10px', background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>x</button>
        </div>
      )}
      <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #e0e0e0' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !isLoading) {
              handleSendMessage();
            }
          }}
          placeholder="Ask about the book..."
          style={{ flexGrow: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          style={{ marginLeft: '10px', padding: '8px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: isLoading ? 'not-allowed' : 'pointer' }}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;
