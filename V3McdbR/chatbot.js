// Simple chatbot placeholder to prevent console errors
// This prevents the HTML script tags from failing

// Placeholder chatbot object
const chatbot = {
    init: function() {
        console.log('Chatbot placeholder initialized');
        // Add basic chatbot functionality here if needed
    }
};

// Make chatbot available globally
if (typeof window !== 'undefined') {
    window.chatbot = chatbot;
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', chatbot.init);
} else {
    chatbot.init();
}