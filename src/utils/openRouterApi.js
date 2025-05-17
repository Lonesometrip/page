/**
 * Utility functions for interacting with the OpenRouter API
 */

// Function to get the API key from environment variables
const getApiKey = () => {
  return import.meta.env.VITE_OPENROUTER_API_KEY;
};

// Base URL for OpenRouter API
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1';

/**
 * Send a chat completion request to OpenRouter API
 * @param {Array} messages - Array of message objects with role and content
 * @param {Object} options - Additional options for the API request
 * @returns {Promise} - Promise that resolves to the API response
 */
export const getChatCompletion = async (messages, options = {}) => {
  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error('OpenRouter API key is not set. Please add VITE_OPENROUTER_API_KEY to your .env file.');
  }

  const defaultOptions = {
    model: 'openai/gpt-3.5-turbo', // Default model
    temperature: 0.7,
    max_tokens: 1000,
  };

  const requestOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(`${OPENROUTER_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin, // Required by OpenRouter
        'X-Title': 'Website Chat Bot', // Optional - name of your app
      },
      body: JSON.stringify({
        model: requestOptions.model,
        messages: messages,
        temperature: requestOptions.temperature,
        max_tokens: requestOptions.max_tokens,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenRouter API error: ${errorData.error?.message || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    throw error;
  }
};

/**
 * Simple function to get a response from the knowledge base
 * @param {string} query - User's question
 * @param {Array} knowledgeBase - Array of knowledge base entries
 * @returns {Promise} - Promise that resolves to the AI response
 */
export const getKnowledgeBaseResponse = async (query, knowledgeBase) => {
  try {
    // Create a system message with the knowledge base content
    const knowledgeBaseContent = knowledgeBase.map(entry =>
      `${entry.title || 'Content'}: ${entry.content}`
    ).join('\n\n');

    const messages = [
      {
        role: 'system',
        content: `You are a helpful assistant for a transportation and chauffeur service website.
        Use the following information to answer user questions. If you don't know the answer based on
        this information, say so politely and offer to connect them with a human representative.

        Knowledge Base:
        ${knowledgeBaseContent}`
      },
      {
        role: 'user',
        content: query
      }
    ];

    // For testing purposes, if the API key is not available, return a mock response
    const apiKey = getApiKey();
    if (!apiKey) {
      console.warn('OpenRouter API key not found. Using mock response.');
      return "I'm sorry, but I'm currently in demo mode without API access. In a real implementation, I would provide information about our transportation and chauffeur services based on your question. Please contact our support team for assistance.";
    }

    const response = await getChatCompletion(messages, {
      temperature: 0.5, // Lower temperature for more factual responses
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error in getKnowledgeBaseResponse:', error);
    return "I apologize, but I encountered an error while processing your request. Please try again later or contact our support team for assistance.";
  }
};
