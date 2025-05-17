import React, { useState, useRef, useEffect } from 'react';
import DirectContactLinks from './DirectContactLinks';

/**
 * FullPageChatBot component
 * A full-page version of the PocketFlowChatBot
 * Shares the same functionality but takes up the entire screen
 */
const FullPageChatBot = ({
  messages,
  inputValue,
  setInputValue,
  isLoading,
  handleSubmit,
  language,
  t,
  aiConnected,
  showQuickReplies,
  handleFeedback,
  clearChat,
  toggleLanguage,
  onClose
}) => {
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black-100 flex flex-col overflow-hidden"
      style={{
        animation: 'fadeIn 0.3s ease-out',
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}
    >
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-black-200 to-black-100 border-b border-secondary">
        <div className="flex items-center">
          {/* Luxury car icon with AI connection indicator */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 mr-2 text-secondary ${aiConnected ? 'ai-connected' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
          <h3 className="font-medium text-secondary">{t.chatTitle}</h3>

        </div>
        <div className="flex space-x-2">
          {/* Language toggle button */}
          <button
            onClick={toggleLanguage}
            className="p-1 hover:bg-black-200 rounded transition-colors duration-300"
            aria-label="Switch language"
            title="Switch language"
          >
            <span className="text-secondary text-sm font-medium">{t.switchLanguage}</span>
          </button>

          {/* Clear chat button */}
          <button
            onClick={clearChat}
            className="p-1 hover:bg-black-200 rounded transition-colors duration-300"
            aria-label="Clear chat"
            title={t.clearChat}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>

          {/* Close full-page chat button */}
          <button
            onClick={onClose}
            className="p-1 hover:bg-black-200 rounded transition-colors duration-300"
            aria-label="Close full-page chat"
            title="Close full-page chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat messages - reduced bottom padding to make room for input */}
      <div className="flex-1 p-4 pb-0 overflow-y-auto bg-black-100" ref={messagesContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.role === 'user' ?
              (language === 'ar' ? 'text-left' : 'text-right') :
              (language === 'ar' ? 'text-right' : 'text-left')}`}
          >
            <div className="relative">
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? language === 'ar'
                      ? 'bg-tertiary border border-secondary text-white-100 rounded-bl-none'
                      : 'bg-tertiary border border-secondary text-white-100 rounded-br-none'
                    : language === 'ar'
                      ? 'bg-black-200 border border-gold-200 text-white-100 rounded-br-none'
                      : 'bg-black-200 border border-gold-200 text-white-100 rounded-bl-none'
                }`}
                style={{
                  animation: 'slideIn 0.3s ease-out',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {message.content}
              </div>

              {/* Read receipt for user messages */}
              {message.role === 'user' && (
                <div className="text-xs text-gold-200 mt-1 mr-1 text-right">
                  {index < messages.length - 1 && messages[index + 1].role === 'assistant' ? (
                    <span className="flex items-center justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.readReceipt}
                    </span>
                  ) : (
                    <span className="flex items-center justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                      {t.sentReceipt}
                    </span>
                  )}
                </div>
              )}

              {/* Feedback UI for assistant messages */}
              {message.role === 'assistant' && message.showFeedback && (
                <div className="mt-2 flex justify-start space-x-2">
                  <button
                    onClick={() => handleFeedback(true)}
                    className="flex items-center px-2 py-1 bg-black-200 border border-gold-200 text-gold-200 rounded-lg hover:bg-black-300 transition-colors duration-300 text-xs"
                    aria-label="Helpful"
                    title="This was helpful"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {t.helpful}
                  </button>
                  <button
                    onClick={() => handleFeedback(false)}
                    className="flex items-center px-2 py-1 bg-black-200 border border-gold-200 text-gold-200 rounded-lg hover:bg-black-300 transition-colors duration-300 text-xs"
                    aria-label="Not helpful"
                    title="This was not helpful"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
                    </svg>
                    {t.notHelpful}
                  </button>
                </div>
              )}

              {/* Direct Contact Links */}
              {message.role === 'assistant' && message.showDirectContact && (
                <div className="mt-3">
                  <div className="text-gold-200 text-sm mb-2">
                    {language === 'en'
                      ? "For direct assistance, you can contact us via:"
                      : "للمساعدة المباشرة، يمكنك التواصل معنا عبر:"}
                  </div>
                  <DirectContactLinks language={language} />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator with improved animation */}
        {isLoading && (
          <div className="text-left mb-4">
            <div
              className="inline-block p-3 rounded-lg max-w-[80%] bg-black-200 border border-gold-200 text-white-100 rounded-bl-none"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              <div className="flex items-center">
                <span className="text-sm text-gold-200 mr-2">{t.typingIndicator}</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-typing"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat input - moved up with bottom padding to avoid social media bubble */}
      <div className="pb-20 bg-black-100">
        <form onSubmit={handleSubmit} className="p-4 border-t border-secondary bg-black-200">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.inputPlaceholder}
              className="flex-1 p-2 bg-tertiary border border-gold-200 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              style={{ animation: 'borderPulse 3s infinite' }}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="p-2 bg-black-100 border border-secondary text-secondary rounded-lg hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50 transition-colors duration-300"
              disabled={!inputValue.trim() || isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>

        {/* Quick reply buttons - always shown in full-page mode */}
        {(
          <div className="px-4 pb-4 bg-black-200" style={{ animation: 'fadeIn 0.5s ease-out' }}>

            {/* Suggestion buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
            {/* Original buttons */}
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "I'd like to book a chauffeur service" : "أرغب في حجز خدمة سائق");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {t.bookChauffeur}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "I need contact information" : "أحتاج معلومات الاتصال");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {t.contactUs}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "What vehicles do you offer?" : "ما هي السيارات التي تقدمونها؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {t.ourVehicles}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "Tell me about your services" : "أخبرني عن خدماتكم");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {t.ourServices}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "What tourism packages do you offer?" : "ما هي باقات السياحة التي تقدمونها؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {t.tourPackages}
            </button>

            {/* Additional suggestion buttons */}
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "What are your rates?" : "ما هي أسعاركم؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "Pricing" : "الأسعار"}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "Do you offer airport transfers?" : "هل تقدمون خدمة النقل من وإلى المطار؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "Airport Transfers" : "النقل من المطار"}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "What areas do you serve?" : "ما هي المناطق التي تخدمونها؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "Service Areas" : "مناطق الخدمة"}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "How do I make a reservation?" : "كيف يمكنني إجراء حجز؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "Reservation Process" : "عملية الحجز"}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "Do you offer VIP services?" : "هل تقدمون خدمات كبار الشخصيات؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "VIP Services" : "خدمات كبار الشخصيات"}
            </button>
            <button
              onClick={() => {
                setInputValue(language === 'en' ? "What payment methods do you accept?" : "ما هي طرق الدفع التي تقبلونها؟");
                handleSubmit({ preventDefault: () => {} });
              }}
              className="px-3 py-2 bg-black-200 border border-secondary text-secondary rounded-lg hover:bg-black-300 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? "Payment Methods" : "طرق الدفع"}
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullPageChatBot;
