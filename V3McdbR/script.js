document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    setupScrollAnimations();
    setupSmoothScroll();
    initializeSlideshow();

    // Initialize language manager after a short delay to ensure all scripts are loaded
    setTimeout(() => {
        initializeLanguageManager();
    }, 500);
});



function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#') && href.length > 1) {
                const targetElement = document.querySelector(href);
                if(targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Slideshow functionality
function initializeSlideshow() {
    // Make slideshow data globally available for language manager
    window.slideshowData = [
        {
            image: 'assets/slideshow/Frankfurt.jpg',
            title: 'Frankfurt',
            description: 'Financial metropolis with impressive skyline and rich cultural heritage.'
        },
        {
            image: 'assets/slideshow/paris.jpg',
            title: 'Paris',
            description: 'The city of love with the iconic Eiffel Tower and charming cafés.'
        },
        {
            image: 'assets/slideshow/amsterdam.jpg',
            title: 'Amsterdam',
            description: 'Picturesque canal city with unique flair and historic architecture.'
        },
        {
            image: 'assets/slideshow/hamburg.jpg',
            title: 'Hamburg',
            description: 'Hanseatic metropolis with maritime charm and the impressive Elbphilharmonie.'
        },
        {
            image: 'assets/slideshow/heidelberg.jpg',
            title: 'Heidelberg',
            description: 'Romantic university town with picturesque old town and famous castle.'
        },
        {
            image: 'assets/slideshow/genf.jpg',
            title: 'Geneva',
            description: 'International city on Lake Geneva with the famous Jet d\'Eau.'
        },
        {
            image: 'assets/slideshow/genf1.jpg',
            title: 'Geneva',
            description: 'Home of the United Nations and the Red Cross with views of Mont Blanc.'
        },
        {
            image: 'assets/slideshow/interlaken.jpg',
            title: 'Interlaken',
            description: 'Picturesquely situated between Lake Thun and Lake Brienz with views of the Alps.'
        },
        {
            image: 'assets/slideshow/interlaken1.jpg',
            title: 'Interlaken',
            description: 'The gateway to the Bernese Oberland with spectacular Alpine panorama.'
        },
        {
            image: 'assets/slideshow/luxemburg.jpg',
            title: 'Luxembourg',
            description: 'Small grand duchy with picturesque capital and historic fortifications.'
        },
        {
            image: 'assets/slideshow/nrdsee.jpg',
            title: 'North Sea',
            description: 'Popular holiday region with wide beaches and unique mudflats.'
        },
        {
            image: 'assets/slideshow/wagrain.jpg',
            title: 'Wagrain',
            description: 'Idyllic Alpine village with breathtaking mountain panoramas and winter sports.'
        }
    ];

    let currentSlideIndex = 0;
    const slideshowContainer = document.getElementById('slideshow-container');
    const dotsContainer = document.getElementById('slideshow-dots');
    const slideTitle = document.getElementById('slide-title');
    const slideDescription = document.getElementById('slide-description');

    if (!slideshowContainer || !dotsContainer || !slideTitle || !slideDescription) {
        return; // Exit if elements don't exist
    }

    // Make current slide index globally available
    window.currentSlide = currentSlideIndex;

    // Create slideshow images
    function createSlideImages() {
        window.slideshowData.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === 0 ? 'opacity-100' : 'opacity-0'
            }`;
            slideDiv.style.backgroundImage = `url('${slide.image}')`;
            slideDiv.style.backgroundSize = 'cover';
            slideDiv.style.backgroundPosition = 'center';
            slideDiv.style.backgroundRepeat = 'no-repeat';
            slideDiv.setAttribute('data-slide-index', index);
            slideshowContainer.appendChild(slideDiv);
        });
    }

    // Create navigation dots
    function createNavigationDots() {
        window.slideshowData.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full transition-all duration-200 ${
                index === 0 ? 'bg-brand-gold scale-125' : 'bg-white opacity-50 hover:opacity-90 hover:scale-110'
            }`;
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    // Update slide content
    function updateSlideContent(index) {
        const slide = window.slideshowData[index];
        slideTitle.textContent = slide.title;
        slideDescription.textContent = slide.description;
    }

    // Go to specific slide
    function goToSlide(index) {
        if (index === currentSlideIndex) return;

        // Update slide images
        const slides = slideshowContainer.querySelectorAll('[data-slide-index]');
        slides[currentSlideIndex].classList.remove('opacity-100');
        slides[currentSlideIndex].classList.add('opacity-0');
        slides[index].classList.remove('opacity-0');
        slides[index].classList.add('opacity-100');

        // Update navigation dots
        const dots = dotsContainer.children;
        dots[currentSlideIndex].className = 'w-3 h-3 rounded-full transition-all duration-200 bg-white opacity-50 hover:opacity-90 hover:scale-110';
        dots[index].className = 'w-3 h-3 rounded-full transition-all duration-200 bg-brand-gold scale-125';

        // Update content
        updateSlideContent(index);
        currentSlideIndex = index;
        window.currentSlide = currentSlideIndex;
    }

    // Auto-advance slides
    function startAutoSlide() {
        setInterval(() => {
            const nextIndex = (currentSlideIndex + 1) % window.slideshowData.length;
            goToSlide(nextIndex);
        }, 5000); // Change slide every 5 seconds
    }

    // Make updateSlideContent globally available for language manager
    window.updateSlideContent = updateSlideContent;

    // Initialize slideshow
    createSlideImages();
    createNavigationDots();
    updateSlideContent(0);
    startAutoSlide();

    // Preload images for better performance
    slideshowData.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
    });
}

// Initialize Language Manager
function initializeLanguageManager() {
    console.log('Initializing Language Manager...');

    // Check if LanguageManager is available
    if (typeof window.LanguageManager !== 'undefined') {
        console.log('LanguageManager found, creating instance...');
        window.languageManager = new window.LanguageManager();
        console.log('LanguageManager initialized successfully');
    } else {
        console.error('LanguageManager not found! Make sure translations.js is loaded.');

        // Retry after a short delay
        setTimeout(() => {
            console.log('Retrying LanguageManager initialization...');
            if (typeof window.LanguageManager !== 'undefined') {
                window.languageManager = new window.LanguageManager();
                console.log('LanguageManager initialized successfully on retry');
            } else {
                console.error('LanguageManager still not available after retry');
            }
        }, 1000);
    }
}
