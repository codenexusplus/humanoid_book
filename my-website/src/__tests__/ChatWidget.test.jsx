import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatWidget from '../components/ChatWidget/ChatWidget';
import '@testing-library/jest-dom';

// Mock the fetch API for streaming
const mockStream = (chunks) => {
  let index = 0;
  return new ReadableStream({
    start(controller) {
      function push() {
        if (index < chunks.length) {
          controller.enqueue(new TextEncoder().encode(chunks[index]));
          index++;
          setTimeout(push, 50); // Simulate some delay
        } else {
          controller.close();
        }
      }
      push();
    }
  });
};

global.fetch = jest.fn((url, options) => {
  if (url.includes('/chat')) {
    const text = JSON.parse(options.body).text;
    const selected_text = JSON.parse(options.body).selected_text;
    const responseChunks = [
      `data: ${JSON.stringify({ type: 'text', content: 'Mocked' })}\n\n`,
      `data: ${JSON.stringify({ type: 'text', content: ' response' })}\n\n`,
      `data: ${JSON.stringify({ type: 'text', content: ' for' })}\n\n`,
      `data: ${JSON.stringify({ type: 'text', content: ` your query "${text}"` })}\n\n`,
      selected_text ? `data: ${JSON.stringify({ type: 'text', content: ` with selected text "${selected_text}"` })}\n\n` : '',
      `data: ${JSON.stringify({ type: 'citations', content: [{ source_url: 'http://example.com/source', chapter_title: 'Example Chapter' }] })}\n\n`
    ];
    return Promise.resolve({
      ok: true,
      body: mockStream(responseChunks),
    });
  }
  return Promise.reject(new Error('not mocked'));
});


describe('ChatWidget', () => {
  beforeEach(() => {
    fetch.mockClear();
    // Mock window.getSelection for text selection tests
    Object.defineProperty(window, 'getSelection', {
      value: jest.fn(() => ({
        toString: jest.fn(() => ''),
      })),
      writable: true
    });
  });

  test('renders chat input and send button', () => {
    render(<ChatWidget />);
    expect(screen.getByPlaceholderText('Ask about the book...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('sends a message and displays bot response', async () => {
    render(<ChatWidget />);
    const inputElement = screen.getByPlaceholderText('Ask about the book...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'What is RAG?' } });
    fireEvent.click(sendButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/chat/chat', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ text: 'What is RAG?' }),
    }));

    await waitFor(() => {
      expect(screen.getByText(/Mocked response for your query "What is RAG?"/i)).toBeInTheDocument();
    });
    expect(screen.getByText('Example Chapter')).toBeInTheDocument();
  });

  test('captures selected text and sends with query', async () => {
    // Mock selection
    window.getSelection.mockReturnValue({ toString: jest.fn(() => 'selected part') });
    
    render(<ChatWidget />);
    fireEvent.mouseUp(document.body); // Trigger selection update

    const inputElement = screen.getByPlaceholderText('Ask about the book...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'Explain this' } });
    fireEvent.click(sendButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/chat/chat-with-selection', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ text: 'Explain this', selected_text: 'selected part' }),
    }));

    await waitFor(() => {
      expect(screen.getByText(/Mocked response for your query "Explain this" with selected text "selected part"/i)).toBeInTheDocument();
    });
  });

  test('displays loading indicator', async () => {
    // Mock fetch to be pending
    global.fetch.mockImplementationOnce(() => new Promise(() => {})); 

    render(<ChatWidget />);
    const inputElement = screen.getByPlaceholderText('Ask about the book...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'Test' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('...')).toBeInTheDocument();
    expect(sendButton).toBeDisabled();
  });
});
