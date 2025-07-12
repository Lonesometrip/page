// Environment Variable Loader for API Testing
// This script simulates loading .env variables for client-side testing

class EnvLoader {
    constructor() {
        this.envVars = {};
        this.loadEnvironmentVariables();
    }

    // Simulate loading .env file (in production, these would be injected at build time)
    loadEnvironmentVariables() {
        // These values should match your .env file
        this.envVars = {
            VITE_OPENROUTER_API_KEY: '', // Empty in .env - will be loaded from localStorage
            VITE_CLOUDFLARE_WORKER_URL: 'https://mouhcine.benmotrade.workers.dev/',
            VITE_EMAILJS_SERVICE_ID: '',
            VITE_EMAILJS_TEMPLATE_ID: '',
            VITE_EMAILJS_PUBLIC_KEY: '',
            VITE_GA_MEASUREMENT_ID: '',
            VITE_ENABLE_CHAT_BOT: 'true',
            VITE_ENABLE_3D_MODELS: 'true',
            VITE_APP_ENV: 'production',
            VITE_BASE_URL: 'https://www.premium-chauffeur.com'
        };

        // Load runtime configuration from localStorage
        const runtimeConfig = this.loadRuntimeConfig();
        Object.assign(this.envVars, runtimeConfig);

        // Make variables available globally
        window.ENV = this.envVars;
        
        console.log('Environment variables loaded:', this.envVars);
    }

    loadRuntimeConfig() {
        const config = {};
        
        // Load API keys from localStorage (set by chatbot-setup.html)
        const openrouterKey = localStorage.getItem('OPENROUTER_API_KEY');
        const workerUrl = localStorage.getItem('CLOUDFLARE_WORKER_URL');
        
        if (openrouterKey) {
            config.VITE_OPENROUTER_API_KEY = openrouterKey;
        }
        
        if (workerUrl) {
            config.VITE_CLOUDFLARE_WORKER_URL = workerUrl;
        }

        return config;
    }

    // Get environment variable
    get(key) {
        return this.envVars[key] || '';
    }

    // Check if variable is set
    has(key) {
        return !!this.envVars[key];
    }

    // Get all variables
    getAll() {
        return { ...this.envVars };
    }

    // Check if API is configured
    isApiConfigured() {
        return this.has('VITE_OPENROUTER_API_KEY') || this.has('VITE_CLOUDFLARE_WORKER_URL');
    }

    // Get the preferred API endpoint
    getApiEndpoint() {
        if (this.has('VITE_CLOUDFLARE_WORKER_URL')) {
            return {
                type: 'cloudflare',
                url: this.get('VITE_CLOUDFLARE_WORKER_URL')
            };
        } else if (this.has('VITE_OPENROUTER_API_KEY')) {
            return {
                type: 'openrouter',
                url: 'https://openrouter.ai/api/v1/chat/completions',
                key: this.get('VITE_OPENROUTER_API_KEY')
            };
        }
        return null;
    }

    // Test API configuration
    async testConfiguration() {
        const results = {
            cloudflareWorker: false,
            openrouterDirect: false,
            emailjs: false,
            analytics: false
        };

        // Test Cloudflare Worker
        if (this.has('VITE_CLOUDFLARE_WORKER_URL')) {
            try {
                const response = await fetch(this.get('VITE_CLOUDFLARE_WORKER_URL'), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: 'qwen/qwen-2.5-72b-instruct',
                        messages: [{ role: 'user', content: 'test' }],
                        max_tokens: 10
                    })
                });
                results.cloudflareWorker = response.ok;
            } catch (error) {
                console.error('Cloudflare Worker test failed:', error);
            }
        }

        // Test OpenRouter Direct
        if (this.has('VITE_OPENROUTER_API_KEY')) {
            try {
                const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.get('VITE_OPENROUTER_API_KEY')}`
                    },
                    body: JSON.stringify({
                        model: 'qwen/qwen-2.5-72b-instruct',
                        messages: [{ role: 'user', content: 'test' }],
                        max_tokens: 10
                    })
                });
                results.openrouterDirect = response.ok;
            } catch (error) {
                console.error('OpenRouter test failed:', error);
            }
        }

        // Check EmailJS configuration
        results.emailjs = this.has('VITE_EMAILJS_SERVICE_ID') && 
                          this.has('VITE_EMAILJS_TEMPLATE_ID') && 
                          this.has('VITE_EMAILJS_PUBLIC_KEY');

        // Check Analytics configuration
        results.analytics = this.has('VITE_GA_MEASUREMENT_ID');

        return results;
    }

    // Display configuration status
    displayStatus() {
        console.group('🔧 Environment Configuration Status');
        
        console.log('📡 API Configuration:');
        console.log(`  Cloudflare Worker: ${this.has('VITE_CLOUDFLARE_WORKER_URL') ? '✅' : '❌'}`);
        console.log(`  OpenRouter API: ${this.has('VITE_OPENROUTER_API_KEY') ? '✅' : '❌'}`);
        
        console.log('📧 Email Configuration:');
        console.log(`  EmailJS Service: ${this.has('VITE_EMAILJS_SERVICE_ID') ? '✅' : '❌'}`);
        console.log(`  EmailJS Template: ${this.has('VITE_EMAILJS_TEMPLATE_ID') ? '✅' : '❌'}`);
        console.log(`  EmailJS Public Key: ${this.has('VITE_EMAILJS_PUBLIC_KEY') ? '✅' : '❌'}`);
        
        console.log('📊 Analytics Configuration:');
        console.log(`  Google Analytics: ${this.has('VITE_GA_MEASUREMENT_ID') ? '✅' : '❌'}`);
        
        console.log('🎛️ Feature Flags:');
        console.log(`  Chatbot Enabled: ${this.get('VITE_ENABLE_CHAT_BOT')}`);
        console.log(`  3D Models Enabled: ${this.get('VITE_ENABLE_3D_MODELS')}`);
        
        console.log('🌐 Environment:');
        console.log(`  Environment: ${this.get('VITE_APP_ENV')}`);
        console.log(`  Base URL: ${this.get('VITE_BASE_URL')}`);
        
        console.groupEnd();
    }
}

// Auto-initialize environment loader
const envLoader = new EnvLoader();

// Display status in console
envLoader.displayStatus();

// Export for global use
if (typeof window !== 'undefined') {
    window.EnvLoader = EnvLoader;
    window.envLoader = envLoader;
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnvLoader;
}
