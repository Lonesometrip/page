// Fleet Gallery Intelligent System
class FleetGallery {
    constructor() {
        this.galleries = new Map();
        this.preloadedImages = new Map();
        this.init();
    }

    init() {
        // Initialize all galleries on the page
        document.querySelectorAll('.car-gallery').forEach(gallery => {
            const carType = gallery.dataset.car;
            this.setupGallery(carType, gallery);
        });

        // Preload all images for smooth transitions
        this.preloadImages();
    }

    setupGallery(carType, galleryElement) {
        const mainImage = galleryElement.querySelector(`#${carType}-main-image`);
        const viewLabel = galleryElement.querySelector(`#${carType}-view-label`);
        const buttons = galleryElement.querySelectorAll('.gallery-btn');

        // Store gallery data
        this.galleries.set(carType, {
            element: galleryElement,
            mainImage: mainImage,
            viewLabel: viewLabel,
            buttons: buttons,
            currentView: 'front'
        });

        // Setup button event listeners
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView(carType, button);
            });

            // Add keyboard support
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.switchView(carType, button);
                }
            });
        });

        // Add keyboard navigation
        galleryElement.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(carType, e);
        });

        // Add touch/swipe support for mobile
        this.addTouchSupport(carType, mainImage);
    }

    switchView(carType, button) {
        const gallery = this.galleries.get(carType);
        if (!gallery) return;

        const newImage = button.dataset.image;
        const newLabel = button.dataset.label;
        const newView = button.dataset.view;

        // Don't switch if already active
        if (button.classList.contains('active')) return;

        // Update active button
        gallery.buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Add loading state
        gallery.mainImage.classList.add('loading');

        // Preload new image if not already loaded
        this.preloadImage(newImage).then(() => {
            // Update image with smooth transition
            setTimeout(() => {
                gallery.mainImage.src = newImage;
                gallery.mainImage.alt = `${this.getCarDisplayName(carType)} - ${newLabel}`;
                gallery.viewLabel.textContent = newLabel;
                gallery.currentView = newView;

                // Remove loading state and add fade-in animation
                gallery.mainImage.classList.remove('loading');
                gallery.mainImage.classList.add('fade-in');
                gallery.viewLabel.classList.add('fade-in');

                // Remove fade-in class after animation
                setTimeout(() => {
                    gallery.mainImage.classList.remove('fade-in');
                    gallery.viewLabel.classList.remove('fade-in');
                }, 500);
            }, 150);
        });

        // Analytics tracking (if needed)
        this.trackViewChange(carType, newView);
    }

    preloadImages() {
        // Get all image sources from gallery buttons
        document.querySelectorAll('.gallery-btn[data-image]').forEach(button => {
            const imageSrc = button.dataset.image;
            this.preloadImage(imageSrc);
        });
    }

    preloadImage(src) {
        return new Promise((resolve, reject) => {
            if (this.preloadedImages.has(src)) {
                resolve();
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.preloadedImages.set(src, img);
                resolve();
            };
            img.onerror = reject;
            img.src = src;
        });
    }

    handleKeyboardNavigation(carType, event) {
        const gallery = this.galleries.get(carType);
        if (!gallery) return;

        const buttons = Array.from(gallery.buttons);
        const currentIndex = buttons.findIndex(btn => btn.classList.contains('active'));

        let newIndex = currentIndex;

        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
                break;
            case 'ArrowRight':
                event.preventDefault();
                newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
                break;
            case 'Home':
                event.preventDefault();
                newIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                newIndex = buttons.length - 1;
                break;
        }

        if (newIndex !== currentIndex) {
            this.switchView(carType, buttons[newIndex]);
            buttons[newIndex].focus();
        }
    }

    addTouchSupport(carType, imageElement) {
        let startX = 0;
        let startY = 0;
        const threshold = 50; // Minimum swipe distance

        imageElement.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        imageElement.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
                const gallery = this.galleries.get(carType);
                const buttons = Array.from(gallery.buttons);
                const currentIndex = buttons.findIndex(btn => btn.classList.contains('active'));

                let newIndex;
                if (deltaX > 0) {
                    // Swipe right - previous image
                    newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
                } else {
                    // Swipe left - next image
                    newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
                }

                this.switchView(carType, buttons[newIndex]);
            }

            startX = 0;
            startY = 0;
        }, { passive: true });
    }

    getCarDisplayName(carType) {
        const names = {
            'sclass': 'Mercedes S-Class',
            'bmw7': 'BMW 7 Series',
            'vclass': 'Mercedes V-Class'
        };
        return names[carType] || carType;
    }

    trackViewChange(carType, view) {
        // Analytics tracking - can be integrated with Google Analytics, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', 'fleet_gallery_view', {
                'car_type': carType,
                'view_type': view
            });
        }

        // Console log for debugging
        console.log(`Fleet Gallery: ${carType} - ${view} view selected`);
    }

    // Public method to programmatically switch views
    switchToView(carType, viewType) {
        const gallery = this.galleries.get(carType);
        if (!gallery) return;

        const button = Array.from(gallery.buttons).find(btn => btn.dataset.view === viewType);
        if (button) {
            this.switchView(carType, button);
        }
    }

    // Public method to get current view
    getCurrentView(carType) {
        const gallery = this.galleries.get(carType);
        return gallery ? gallery.currentView : null;
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.fleetGallery = new FleetGallery();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FleetGallery;
}
