import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from '../components/Chatbot/Chatbot';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ answer: 'Mocked response from chatbot.' }),
  })
);

describe('Chatbot', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders chat input and send button', () => {
    render(<Chatbot />);
    expect(screen.getByPlaceholderText('Ask about the book content...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('sends a message when send button is clicked', async () => {
    render(<Chatbot />);
    const inputElement = screen.getByPlaceholderText('Ask about the book content...');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'Hello chatbot' } });
    fireEvent.click(sendButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/chatbot/query', expect.any(Object));

    expect(await screen.findByText(/mocked response from chatbot/i)).toBeInTheDocument();
  });

  test('sends a message with selected text when send button is clicked', async () => {
    render(<Chatbot />);
    const inputElement = screen.getByPlaceholderText('Ask about the book content...');
    const selectedTextarea = screen.getByPlaceholderText('Simulate selected text here (optional)');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(inputElement, { target: { value: 'Explain this' } });
    fireEvent.change(selectedTextarea, { target: { value: 'Selected portion' } });
    fireEvent.click(sendButton);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/chatbot/query-selection', expect.any(Object));

    expect(await screen.findByText(/mocked response from chatbot/i)).toBeInTheDocument();
  });
});