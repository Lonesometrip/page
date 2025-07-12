// Business Card Functionality
class BusinessCard {
    constructor() {
        this.isFlipped = false;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupCard());
        } else {
            this.setupCard();
        }
    }

    setupCard() {
        const cardContainer = document.querySelector('.business-card-container');
        const card = document.querySelector('.business-card');
        
        if (!cardContainer || !card) {
            console.log('Business card elements not found');
            return;
        }

        // Add click event listener
        cardContainer.addEventListener('click', () => this.flipCard());
        
        // Add keyboard support
        cardContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.flipCard();
            }
        });

        // Make it focusable for accessibility
        cardContainer.setAttribute('tabindex', '0');
        cardContainer.setAttribute('role', 'button');
        cardContainer.setAttribute('aria-label', 'Business card - Click to flip');

        // Auto-flip demonstration after 3 seconds
        setTimeout(() => {
            if (!this.isFlipped) {
                this.flipCard();
                // Flip back after 2 seconds
                setTimeout(() => {
                    if (this.isFlipped) {
                        this.flipCard();
                    }
                }, 2000);
            }
        }, 3000);

        console.log('Business card initialized successfully');
    }

    flipCard() {
        const card = document.querySelector('.business-card');
        const indicator = document.querySelector('.flip-indicator');
        
        if (!card) return;

        this.isFlipped = !this.isFlipped;
        
        if (this.isFlipped) {
            card.classList.add('flipped');
            if (indicator) {
                indicator.textContent = 'Front';
            }
        } else {
            card.classList.remove('flipped');
            if (indicator) {
                indicator.textContent = 'Flip';
            }
        }

        // Update aria-label for accessibility
        const container = document.querySelector('.business-card-container');
        if (container) {
            const side = this.isFlipped ? 'back' : 'front';
            container.setAttribute('aria-label', `Business card ${side} side - Click to flip`);
        }
    }

    // Method to programmatically flip to front
    showFront() {
        if (this.isFlipped) {
            this.flipCard();
        }
    }

    // Method to programmatically flip to back
    showBack() {
        if (!this.isFlipped) {
            this.flipCard();
        }
    }
}

// Initialize business card when script loads
const businessCard = new BusinessCard();

// Export for global access
window.BusinessCard = BusinessCard;
window.businessCard = businessCard;
