import React from 'react';
import { useChat } from '../../contexts/ChatContext';

const ChatBubble = () => {
  const { toggleChat, isChatOpen } = useChat();

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 
                 rounded-full bg-blue-600 text-white shadow-lg cursor-pointer
                 hover:bg-blue-700 transition-all duration-300 transform
                 ${isChatOpen ? 'rotate-45' : 'rotate-0'}`}
      onClick={toggleChat}
      aria-label={isChatOpen ? "Close chat" : "Open chat"}
    >
      {isChatOpen ? (
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
      
      {/* Notification dot for new messages (can be implemented later) */}
      {/* <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></div> */}
    </div>
  );
};

export default ChatBubble;
