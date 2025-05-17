import React, { createContext, useContext, useState, useEffect } from 'react';
import { getKnowledgeBaseResponse } from '../utils/openRouterApi';
import { initialKnowledgeBase } from '../utils/knowledgeBase';

// Create the context
const ChatContext = createContext();

// Custom hook to use the chat context
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

// Chat provider component
export const ChatProvider = ({ children }) => {
  // State for chat visibility
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // State for chat messages
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! How can I help you with our transportation and chauffeur services today?'
    }
  ]);
  
  // State for loading status
  const [isLoading, setIsLoading] = useState(false);
  
  // State for knowledge base
  const [knowledgeBase, setKnowledgeBase] = useState(initialKnowledgeBase);
  
  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };
  
  // Function to send a message
  const sendMessage = async (message) => {
    // Add user message to the chat
    const userMessage = {
      role: 'user',
      content: message
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get response from the AI using the knowledge base
      const response = await getKnowledgeBaseResponse(message, knowledgeBase);
      
      // Add assistant response to the chat
      const assistantMessage = {
        role: 'assistant',
        content: response
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Add error message to the chat
      const errorMessage = {
        role: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again later or contact our support team for assistance.'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to clear chat history
  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hello! How can I help you with our transportation and chauffeur services today?'
      }
    ]);
  };
  
  // Function to update the knowledge base
  const updateKnowledgeBase = (newKnowledgeBase) => {
    setKnowledgeBase(newKnowledgeBase);
  };
  
  // Value object to be provided by the context
  const value = {
    isChatOpen,
    toggleChat,
    messages,
    sendMessage,
    isLoading,
    clearChat,
    knowledgeBase,
    updateKnowledgeBase
  };
  
  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
