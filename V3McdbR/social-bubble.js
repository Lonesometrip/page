// Enhanced Social Bubble and Chatbot Implementation

class SocialBubble {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.createSocialBubble();
        this.attachEventListeners();
    }

    createSocialBubble() {
        const socialBubbleHTML = `
            <div class="social-bubble-container">
                <!-- Main bubble -->
                <div class="main-bubble" id="social-main-bubble" title="Contact Us">
                    <span class="bubble-icon">
                        <i data-lucide="message-square-more"></i>
                    </span>
                    <span class="bubble-tooltip">Contact Us</span>
                </div>

                <!-- Social media icons -->
                <div class="social-icons" id="social-icons">
                    <div class="social-icon" data-platform="whatsapp" title="WhatsApp">
                        <i data-lucide="message-circle"></i>
                    </div>
                    <div class="social-icon" data-platform="phone" title="Call Us">
                        <i data-lucide="phone"></i>
                    </div>
                    <div class="social-icon" data-platform="email" title="Email Us">
                        <i data-lucide="mail"></i>
                    </div>
                    <div class="social-icon" data-platform="instagram" title="Instagram">
                        <i data-lucide="instagram"></i>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', socialBubbleHTML);
    }

    attachEventListeners() {
        const mainBubble = document.getElementById('social-main-bubble');
        const socialIcons = document.getElementById('social-icons');
        const bubbleIcon = mainBubble.querySelector('.bubble-icon');
        const tooltip = mainBubble.querySelector('.bubble-tooltip');

        mainBubble.addEventListener('click', () => {
            this.isOpen = !this.isOpen;
            
            if (this.isOpen) {
                mainBubble.classList.add('open');
                socialIcons.classList.add('open');
                bubbleIcon.innerHTML = '<i data-lucide="x"></i>';
                tooltip.textContent = 'Close';
            } else {
                mainBubble.classList.remove('open');
                socialIcons.classList.remove('open');
                bubbleIcon.innerHTML = '<i data-lucide="message-square-more"></i>';
                tooltip.textContent = 'Contact Us';
            }
            
            // Re-initialize Lucide icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });

        // Add click handlers for social icons
        const socialIconElements = document.querySelectorAll('.social-icon');
        socialIconElements.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.stopPropagation();
                const platform = icon.getAttribute('data-platform');
                this.handleSocialClick(platform);
            });
        });
    }

    handleSocialClick(platform) {
        switch (platform) {
            case 'whatsapp':
                window.open('https://wa.me/4917631454340', '_blank');
                break;
            case 'phone':
                window.location.href = 'tel:+4917631454340';
                break;
            case 'email':
                window.location.href = 'mailto:info@premium-chauffeur.com';
                break;
            case 'instagram':
                window.open('https://instagram.com/premiumchauffeur', '_blank');
                break;
        }
    }
}

// Enhanced Chatbot Implementation with Form Integration
class EnhancedChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isLoading = false;
        this.currentForm = null; // 'contact' or 'booking'
        this.formStep = 0;
        this.formData = {};
        this.formspreeEndpoint = 'https://formspree.io/f/myzerqwz';
        this.init();
    }

    init() {
        this.createChatbotBubble();
        this.attachEventListeners();
        this.initializeFormSteps();
        this.addWelcomeMessage();
    }

    initializeFormSteps() {
        // Contact form steps
        this.contactSteps = [
            { field: 'name', prompt: 'What is your name?', type: 'text' },
            { field: 'email', prompt: 'What is your email address?', type: 'email' },
            { field: 'message', prompt: 'What would you like to tell us?', type: 'text' },
            { field: 'confirm', prompt: 'Should I send this contact request for you?', type: 'confirm' }
        ];

        // Booking form steps (matching your booking-form.html structure)
        this.bookingSteps = [
            { field: 'startLocation', prompt: 'Where would you like to be picked up?', type: 'text' },
            { field: 'destination', prompt: 'Where would you like to go?', type: 'text' },
            { field: 'service', prompt: 'What type of service do you need? (Airport Transfer, Executive, VIP, Tourism)', type: 'select' },
            { field: 'date', prompt: 'What date do you need the service? (YYYY-MM-DD)', type: 'date' },
            { field: 'time', prompt: 'What time do you need pickup? (HH:MM)', type: 'time' },
            { field: 'passengers', prompt: 'How many passengers?', type: 'number' },
            { field: 'vehicleType', prompt: 'What type of vehicle do you prefer? (Mercedes S-Class, BMW 7-Series, Mercedes V-Class)', type: 'select' },
            { field: 'name', prompt: 'What is your name?', type: 'text' },
            { field: 'email', prompt: 'What is your email address?', type: 'email' },
            { field: 'phone', prompt: 'What is your phone number?', type: 'tel' },
            { field: 'specialRequests', prompt: 'Any special requests or requirements? (Optional)', type: 'text', optional: true },
            { field: 'confirm', prompt: 'Should I submit this booking request for you?', type: 'confirm' }
        ];
    }

    createChatbotBubble() {
        // Check if bubble already exists
        const existingBubble = document.getElementById('chatbot-bubble');
        if (existingBubble) {
            return;
        }

        // Only create the chatbot bubble, use existing chatbot container
        const chatbotBubbleHTML = `
            <div class="chatbot-bubble" id="chatbot-bubble" title="Chat with us">
                <span class="chatbot-icon">
                    <i data-lucide="bot"></i>
                </span>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotBubbleHTML);
    }

    attachEventListeners() {
        const chatbotBubble = document.getElementById('chatbot-bubble');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatbotClose = document.getElementById('close-chatbot');
        const chatbotFullscreen = document.getElementById('fullscreen-chatbot');
        const sizeSmall = document.getElementById('size-small');
        const sizeMedium = document.getElementById('size-medium');
        const sizeLarge = document.getElementById('size-large');
        const chatbotForm = document.getElementById('chatbot-form');

        if (chatbotBubble) {
            chatbotBubble.addEventListener('click', () => {
                this.toggleChatbot();
            });
        }

        if (chatbotClose) {
            chatbotClose.addEventListener('click', () => {
                this.closeChatbot();
            });
        }

        if (chatbotFullscreen) {
            chatbotFullscreen.addEventListener('click', () => {
                this.toggleFullscreen();
            });
        }

        // Size controls
        if (sizeSmall) {
            sizeSmall.addEventListener('click', () => this.setChatbotSize('small'));
        }
        if (sizeMedium) {
            sizeMedium.addEventListener('click', () => this.setChatbotSize('medium'));
        }
        if (sizeLarge) {
            sizeLarge.addEventListener('click', () => this.setChatbotSize('large'));
        }

        if (chatbotForm) {
            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleUserMessage();
            });
        }

        // Make chatbot resizable
        this.makeResizable();
    }

    toggleChatbot() {
        const chatbotContainer = document.getElementById('chatbot-container');
        if (chatbotContainer) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                chatbotContainer.classList.add('active');
            } else {
                chatbotContainer.classList.remove('active');
            }
        }
    }

    closeChatbot() {
        const chatbotContainer = document.getElementById('chatbot-container');
        if (chatbotContainer) {
            this.isOpen = false;
            chatbotContainer.classList.remove('active');
        }
    }

    setChatbotSize(size) {
        const chatbotContainer = document.getElementById('chatbot-container');
        if (chatbotContainer) {
            chatbotContainer.classList.remove('size-small', 'size-medium', 'size-large');
            chatbotContainer.classList.add(`size-${size}`);
        }
    }

    toggleFullscreen() {
        const chatbotContainer = document.getElementById('chatbot-container');
        if (chatbotContainer) {
            chatbotContainer.classList.toggle('fullscreen');
        }
    }

    makeResizable() {
        const chatbotContainer = document.getElementById('chatbot-container');
        const resizeHandle = document.querySelector('.chatbot-resize-handle');
        
        if (resizeHandle && chatbotContainer) {
            let isResizing = false;
            
            resizeHandle.addEventListener('mousedown', (e) => {
                isResizing = true;
                document.addEventListener('mousemove', handleResize);
                document.addEventListener('mouseup', stopResize);
            });
            
            function handleResize(e) {
                if (!isResizing) return;
                
                const rect = chatbotContainer.getBoundingClientRect();
                const newWidth = e.clientX - rect.left;
                const newHeight = rect.bottom - e.clientY;
                
                if (newWidth > 250 && newWidth < 600) {
                    chatbotContainer.style.width = newWidth + 'px';
                }
                if (newHeight > 300 && newHeight < 800) {
                    chatbotContainer.style.height = newHeight + 'px';
                }
            }
            
            function stopResize() {
                isResizing = false;
                document.removeEventListener('mousemove', handleResize);
                document.removeEventListener('mouseup', stopResize);
            }
        }
    }

    addWelcomeMessage() {
        const welcomeMessage = "👋 Hello! I'm your Premium Chauffeur Assistant. I can help you with:\n\n🚗 **Book a ride** - Airport transfers, executive services, VIP transportation\n📞 **Contact us** - Get in touch with our team\n❓ **Ask questions** - About our services, fleet, or destinations\n\nHow can I assist you today?";
        this.addMessage(welcomeMessage, 'bot');
    }

    addMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = this.formatMessage(message);

        messageElement.appendChild(messageContent);
        messagesContainer.appendChild(messageElement);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.messages.push({ message, sender, timestamp: new Date() });
    }

    formatMessage(message) {
        // Convert markdown-like formatting to HTML
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    handleUserMessage() {
        const input = document.getElementById('chatbot-input');
        if (!input || !input.value.trim()) return;

        const userMessage = input.value.trim();
        this.addMessage(userMessage, 'user');
        input.value = '';

        // Handle the message
        setTimeout(() => {
            this.processUserMessage(userMessage);
        }, 500);
    }

    async processUserMessage(message) {
        const lowerMessage = message.toLowerCase();

        // Handle form flows
        if (this.currentForm) {
            this.handleFormStep(message);
            return;
        }

        // Intent detection
        if (lowerMessage.includes('book') || lowerMessage.includes('reservation') || lowerMessage.includes('ride')) {
            this.startBookingFlow();
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('email')) {
            this.startContactFlow();
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
            this.addMessage("Our pricing varies based on distance, service type, and duration. For accurate pricing, I'd be happy to help you book a service. Would you like me to start a booking for you?", 'bot');
        } else if (lowerMessage.includes('fleet') || lowerMessage.includes('car') || lowerMessage.includes('vehicle')) {
            this.addMessage("We offer a premium fleet including:\n\n🚗 **Mercedes S-Class** - Executive comfort\n🚙 **BMW 7-Series** - VIP luxury\n🚐 **Mercedes V-Class** - Group transportation\n\nEach vehicle comes with professional chauffeurs and premium amenities. Would you like to book a specific vehicle?", 'bot');
        } else if (lowerMessage.includes('airport')) {
            this.addMessage("Our airport transfer service includes:\n\n✈️ Real-time flight monitoring\n👋 Personalized welcome at arrivals\n🧳 Ample space for luggage\n⏰ 24/7 availability\n\nWould you like to book an airport transfer?", 'bot');
        } else {
            // Try AI response if API is available
            try {
                const aiResponse = await this.getAIResponse(message);
                this.addMessage(aiResponse, 'bot');
            } catch (error) {
                // Fallback response
                this.addMessage("I understand you're asking about our services. I can help you with:\n\n🚗 **Booking** - Say 'book a ride'\n📞 **Contact** - Say 'contact us'\n❓ **Information** - Ask about our fleet, services, or destinations\n\nWhat would you like to know more about?", 'bot');
            }
        }
    }

    startBookingFlow() {
        this.currentForm = 'booking';
        this.formStep = 0;
        this.formData = {};
        this.addMessage("Great! I'll help you book a premium chauffeur service. Let me gather some details.", 'bot');
        this.askNextFormQuestion();
    }

    startContactFlow() {
        this.currentForm = 'contact';
        this.formStep = 0;
        this.formData = {};
        this.addMessage("I'll help you get in touch with our team. Let me collect your information.", 'bot');
        this.askNextFormQuestion();
    }

    askNextFormQuestion() {
        const steps = this.currentForm === 'booking' ? this.bookingSteps : this.contactSteps;

        if (this.formStep >= steps.length) {
            this.completeForm();
            return;
        }

        const currentStep = steps[this.formStep];
        this.addMessage(currentStep.prompt, 'bot');
    }

    handleFormStep(userInput) {
        const steps = this.currentForm === 'booking' ? this.bookingSteps : this.contactSteps;
        const currentStep = steps[this.formStep];

        if (currentStep.type === 'confirm') {
            if (userInput.toLowerCase().includes('yes') || userInput.toLowerCase().includes('confirm') || userInput.toLowerCase().includes('send')) {
                this.submitForm();
            } else {
                this.addMessage("No problem! Feel free to ask me anything else or start over.", 'bot');
                this.resetForm();
            }
            return;
        }

        // Store the user input
        this.formData[currentStep.field] = userInput;
        this.formStep++;

        // Ask next question
        setTimeout(() => {
            this.askNextFormQuestion();
        }, 500);
    }

    async submitForm() {
        this.addMessage("Submitting your request...", 'bot');

        try {
            const formData = new FormData();

            // Add form type
            formData.append('form_type', this.currentForm);

            // Add all collected data
            Object.keys(this.formData).forEach(key => {
                formData.append(key, this.formData[key]);
            });

            const response = await fetch(this.formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.addMessage("✅ Perfect! Your request has been submitted successfully. Our team will contact you shortly.", 'bot');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            this.addMessage("❌ There was an issue submitting your request. Please try contacting us directly at +49 176 31454340 or info@premium-chauffeur.com", 'bot');
        }

        this.resetForm();
    }

    resetForm() {
        this.currentForm = null;
        this.formStep = 0;
        this.formData = {};
    }

    async getAIResponse(message) {
        // Try different API sources
        const apiKey = localStorage.getItem('OPENROUTER_API_KEY');
        const workerUrl = localStorage.getItem('CLOUDFLARE_WORKER_URL');

        if (workerUrl) {
            return await this.getCloudflareResponse(message, workerUrl);
        } else if (apiKey) {
            return await this.getOpenRouterResponse(message, apiKey);
        } else {
            throw new Error('No API configured');
        }
    }

    async getCloudflareResponse(message, workerUrl) {
        const response = await fetch(workerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error(`Cloudflare Worker error: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    }

    async getOpenRouterResponse(message, apiKey) {
        const systemPrompt = `You are a helpful assistant for Premium Chauffeur Services, a luxury transportation company in Germany.

Our services include:
- Executive Chauffeur Service (Mercedes S-Class)
- VIP Transportation (BMW 7-Series)
- Airport Transfer Service (Mercedes V-Class)
- Tourism packages to destinations like Munich, Frankfurt, Stuttgart

Keep responses concise, professional, and helpful. Always offer to help with bookings or contact information when relevant.`;

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Premium Chauffeur Chat Bot'
            },
            body: JSON.stringify({
                model: 'qwen/qwen-2.5-72b-instruct',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                temperature: 0.1,
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    clearChat() {
        this.messages = [];
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
        }
        this.addWelcomeMessage();
    }
}

// Function to initialize components
function initializeBubbles() {
    try {
        // Check if already initialized
        if (window.bubblesInitialized) {
            return;
        }

        // Initialize social bubble
        new SocialBubble();

        // Initialize enhanced chatbot
        new EnhancedChatbot();

        // Initialize Lucide icons
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Mark as initialized
        window.bubblesInitialized = true;
    } catch (error) {
        console.error('Error initializing components:', error);
    }
}

// Initialize components when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initializeBubbles, 100);
    });
} else {
    // DOM is already loaded
    setTimeout(initializeBubbles, 100);
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SocialBubble, EnhancedChatbot };
}
