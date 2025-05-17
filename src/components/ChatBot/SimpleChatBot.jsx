import React, { useState, useRef, useEffect } from 'react';
import { initialKnowledgeBase } from '../../utils/knowledgeBase';

// Simple chat bot that doesn't rely on external APIs
const SimpleChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! How can I help you with our transportation and chauffeur services today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Toggle chat open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Simple function to get a response based on the knowledge base
  const getSimpleResponse = (query) => {
    const normalizedQuery = query.toLowerCase();

    // Check for contact-related queries first
    if (
      normalizedQuery.includes('contact') ||
      normalizedQuery.includes('talk to someone') ||
      normalizedQuery.includes('speak to a representative') ||
      normalizedQuery.includes('get in touch') ||
      normalizedQuery.includes('send a message') ||
      normalizedQuery.includes('leave my details') ||
      normalizedQuery.includes('email you') ||
      normalizedQuery.includes('phone number') ||
      normalizedQuery.includes('call you') ||
      normalizedQuery.includes('need a contact') ||
      normalizedQuery.includes('contact information') ||
      normalizedQuery.includes('contact number') ||
      normalizedQuery.includes('contact info') ||
      normalizedQuery.includes('real person') ||
      normalizedQuery.includes('human assistant') ||
      normalizedQuery.includes('speak to human') ||
      normalizedQuery.includes('speak with human') ||
      normalizedQuery.includes('talk to human') ||
      normalizedQuery.includes('talk with human') ||
      normalizedQuery.includes('contact your team') ||
      normalizedQuery.includes('reach out')
    ) {
      return "Thank you for your interest in our premium transportation services. You can contact us directly via:\n\n" +
             "• Phone: +49 176 3145 4340\n" +
             "• Email: info@premium-chauffer.com\n" +
             "• WhatsApp: +49 176 3145 4340\n\n" +
             "If you'd like a human assistant to reach out to you personally, please share your name and contact information, and we'll get back to you promptly.";
    }

    // Search the knowledge base for relevant entries
    const relevantEntries = initialKnowledgeBase.filter(entry => {
      const normalizedTitle = entry.title.toLowerCase();
      const normalizedContent = entry.content.toLowerCase();

      return normalizedTitle.includes(normalizedQuery) ||
             normalizedContent.includes(normalizedQuery);
    });

    if (relevantEntries.length > 0) {
      // Return the content of the most relevant entry
      return `Based on our information: ${relevantEntries[0].content}`;
    } else {
      // Default response if no relevant entries found
      return "I don't have specific information about that. Would you like me to connect you with a human representative who can help you further?";
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      // Add user message to chat
      const userMessage = {
        role: 'user',
        content: inputValue.trim()
      };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      // Check for direct contact keywords
      const lowerMessage = userMessage.content.toLowerCase();
      const isContactRequest =
        lowerMessage.includes('contact information') ||
        lowerMessage.includes('contact info') ||
        lowerMessage.includes('need contact') ||
        lowerMessage.includes('want contact') ||
        lowerMessage.includes('real person') ||
        lowerMessage.includes('human assistant') ||
        lowerMessage.includes('speak to human') ||
        lowerMessage.includes('talk to human') ||
        lowerMessage.includes('contact number') ||
        lowerMessage.includes('phone number');

      // Simulate API delay
      setTimeout(() => {
        // Get response and add to chat
        const response = getSimpleResponse(userMessage.content);
        const assistantMessage = {
          role: 'assistant',
          content: response,
          // Add a special flag for contact requests to style them differently if needed
          isContactInfo: isContactRequest
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hello! How can I help you with our transportation and chauffeur services today?'
      }
    ]);
  };

  return (
    <>
      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 sm:w-[450px] md:w-[500px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <h3 className="font-medium">Chat Support</h3>
            <div className="flex space-x-2">
              <button
                onClick={clearChat}
                className="p-1 hover:bg-blue-700 rounded"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg max-w-[80%] bg-gray-200 text-gray-800 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                disabled={!inputValue.trim() || isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16
                  rounded-full bg-blue-600 text-white shadow-lg cursor-pointer
                  hover:bg-blue-700 transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          // X icon when chat is open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat icon when chat is closed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default SimpleChatBot;
