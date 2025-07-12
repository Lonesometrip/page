// Footer Loader Script
// This script dynamically loads the footer HTML into all pages

class FooterLoader {
    constructor() {
        this.footerLoaded = false;
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadFooter());
        } else {
            await this.loadFooter();
        }
    }

    async loadFooter() {
        try {
            // Check if footer container exists
            let footerContainer = document.getElementById('footer-container');
            
            // If no container exists, create one at the end of the body
            if (!footerContainer) {
                footerContainer = document.createElement('div');
                footerContainer.id = 'footer-container';
                document.body.appendChild(footerContainer);
            }

            // Fetch footer HTML
            const response = await fetch('footer.html');
            if (!response.ok) {
                throw new Error(`Failed to load footer: ${response.status}`);
            }

            const footerHTML = await response.text();
            footerContainer.innerHTML = footerHTML;

            // Initialize Lucide icons for the footer
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }

            this.footerLoaded = true;
            
            // Dispatch custom event to notify that footer is loaded
            document.dispatchEvent(new CustomEvent('footerLoaded'));
            
        } catch (error) {
            console.error('Error loading footer:', error);
            // Fallback: create a simple footer
            this.createFallbackFooter();
        }
    }

    createFallbackFooter() {
        const footerContainer = document.getElementById('footer-container') || document.createElement('div');
        footerContainer.id = 'footer-container';
        
        footerContainer.innerHTML = `
            <footer class="bg-brand-dark py-8 border-t border-gray-800">
                <div class="container mx-auto px-6 text-center">
                    <p class="text-gray-400 text-sm">
                        &copy; ${new Date().getFullYear()} Premium Chauffeur. All Rights Reserved.
                    </p>
                    <div class="flex justify-center space-x-6 mt-4">
                        <a href="#" class="text-gray-400 text-sm hover:text-brand-gold transition-colors">Privacy Policy</a>
                        <a href="#" class="text-gray-400 text-sm hover:text-brand-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        `;
        
        if (!document.getElementById('footer-container')) {
            document.body.appendChild(footerContainer);
        }
    }

    // Method to check if footer is loaded
    isLoaded() {
        return this.footerLoaded;
    }
}

// Auto-initialize footer loader
const footerLoader = new FooterLoader();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FooterLoader;
} else if (typeof window !== 'undefined') {
    window.FooterLoader = FooterLoader;
}