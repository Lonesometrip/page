// Header Loader and Navigation Functionality

// Function to load header into all pages
function loadHeader() {
    // Create a temporary container to avoid flash
    const tempContainer = document.createElement('div');
    tempContainer.style.visibility = 'hidden';
    document.body.appendChild(tempContainer);

    // Add cache busting parameter
    const cacheBuster = '?v=' + Date.now();
    fetch('header.html' + cacheBuster)
        .then(response => response.text())
        .then(data => {
            // Load into temp container first
            tempContainer.innerHTML = data;

            // Apply saved language immediately before showing
            const savedLanguage = localStorage.getItem('language');
            if (savedLanguage && window.languageManager) {
                console.log('🚀 Pre-applying saved language:', savedLanguage);
                // Translate the header content in the temp container
                const elementsToTranslate = tempContainer.querySelectorAll('[data-translate]');
                elementsToTranslate.forEach(element => {
                    const key = element.getAttribute('data-translate');
                    const translation = window.languageManager.translate(key);
                    if (translation) {
                        element.textContent = translation;
                    }
                });
            }

            // Now move to the actual position and make visible
            document.body.insertAdjacentHTML('afterbegin', tempContainer.innerHTML);
            document.body.removeChild(tempContainer);

            // Initialize header functionality after loading
            initializeHeader();
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.body.removeChild(tempContainer);
        });
}

// Initialize header functionality
function initializeHeader() {
    // Initialize Lucide icons for the header
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Setup mobile menu toggle
    setupMobileMenu();

    // Setup header scroll effects
    setupHeaderScroll();

    // Highlight active page
    highlightActivePage();

    // Apply saved language preference for button states
    applyLanguagePreference();

    // Setup language dropdown with delay to ensure DOM is ready
    setTimeout(() => {
        setupLanguageDropdown();
    }, 200);

    // Also try immediate setup
    setupLanguageDropdown();

    // Use MutationObserver to detect when dropdown elements are added
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const toggleButton = document.querySelector('.language-toggle');
                if (toggleButton && !toggleButton.hasAttribute('data-listener-added')) {
                    console.log('🔍 MutationObserver detected dropdown elements, setting up...');
                    setupLanguageDropdown();
                }
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Apply the saved language preference for dropdown state
function applyLanguagePreference() {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    console.log('Saved language preference:', savedLanguage);

    if (savedLanguage) {
        setTimeout(() => {
            // Update desktop current language display
            const currentLang = document.querySelector('.current-lang');
            if (currentLang) {
                currentLang.textContent = savedLanguage.toUpperCase();
            }

            // Update mobile current language display
            const currentLangMobile = document.querySelector('.current-lang-mobile');
            if (currentLangMobile) {
                currentLangMobile.textContent = savedLanguage.toUpperCase();
            }

            // Update active state in desktop dropdown
            document.querySelectorAll('.lang-option').forEach(option => {
                const checkMark = option.querySelector('.check-mark');
                if (option.dataset.lang === savedLanguage) {
                    if (checkMark) checkMark.style.opacity = '1';
                } else {
                    if (checkMark) checkMark.style.opacity = '0';
                }
            });

            // Update active state in mobile dropdown
            document.querySelectorAll('.lang-option-mobile').forEach(option => {
                const checkMark = option.querySelector('.check-mark-mobile');
                if (option.dataset.lang === savedLanguage) {
                    if (checkMark) checkMark.style.opacity = '1';
                } else {
                    if (checkMark) checkMark.style.opacity = '0';
                }
            });

            console.log('Language dropdowns initialized with:', savedLanguage);
        }, 100);
    }
}







// Function to switch language using unified system
function switchLanguageAndReload(lang) {
    console.log('🌐 Switching language to:', lang);

    // Use the unified translation system
    if (window.switchLanguage && typeof window.switchLanguage === 'function') {
        console.log('✅ Using unified switchLanguage function');
        window.switchLanguage(lang);
    } else if (window.languageManager && typeof window.languageManager.setLanguage === 'function') {
        console.log('✅ Using LanguageManager setLanguage');
        window.languageManager.setLanguage(lang);
    } else {
        console.log('⚠️ Translation system not ready, saving preference and reloading');
        localStorage.setItem('language', lang);
        window.location.reload();
    }
}



// Make the function globally available
window.switchLanguageAndReload = switchLanguageAndReload;

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
            
            // Toggle menu icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
            }
            
            // Recreate icons after changing
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenu.classList.add('hidden');
                
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                }
                
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }
}

// Setup header scroll effects
function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Highlight active page in navigation
function highlightActivePage() {
    const currentPage = document.body.getAttribute('data-page');
    
    if (currentPage) {
        // Desktop navigation
        const desktopLinks = document.querySelectorAll('.nav-link[data-page]');
        desktopLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
        
        // Mobile navigation
        const mobileLinks = document.querySelectorAll('.mobile-nav-link[data-page]');
        mobileLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}



// Language dropdown functions
function toggleLanguageDropdown() {
    console.log('🔄 Toggle language dropdown called');
    const menu = document.getElementById('languageMenu');
    const arrow = document.querySelector('.dropdown-arrow');

    console.log('Menu element:', menu);
    console.log('Arrow element:', arrow);

    if (menu && menu.classList.contains('opacity-0')) {
        console.log('📂 Opening dropdown');
        // Show dropdown using inline styles for better control
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateX(-50%) scale(1)';
        menu.classList.remove('opacity-0', 'invisible', 'scale-95');
        menu.classList.add('opacity-100', 'visible', 'scale-100');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else if (menu) {
        console.log('📁 Closing dropdown');
        // Hide dropdown using inline styles
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateX(-50%) scale(0.95)';
        menu.classList.add('opacity-0', 'invisible', 'scale-95');
        menu.classList.remove('opacity-100', 'visible', 'scale-100');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
        console.log('❌ Menu element not found');
    }
}

function selectLanguage(lang) {
    console.log('🌐 Select language called with:', lang);

    // Update current language display
    const currentLang = document.querySelector('.current-lang');
    if (currentLang) {
        currentLang.textContent = lang.toUpperCase();
        console.log('✅ Updated current language display to:', lang.toUpperCase());
    }

    // Update active state
    document.querySelectorAll('.lang-option').forEach(option => {
        const checkMark = option.querySelector('.check-mark');
        if (option.dataset.lang === lang) {
            if (checkMark) checkMark.style.opacity = '1';
        } else {
            if (checkMark) checkMark.style.opacity = '0';
        }
    });

    // Close dropdown
    toggleLanguageDropdown();

    // Switch language using the unified system
    if (window.switchLanguage && typeof window.switchLanguage === 'function') {
        console.log('✅ Using unified switchLanguage function');
        window.switchLanguage(lang);
    } else if (window.languageManager && typeof window.languageManager.setLanguage === 'function') {
        console.log('✅ Using LanguageManager setLanguage');
        window.languageManager.setLanguage(lang);
    } else {
        console.log('⚠️ Translation system not ready, saving preference and reloading');
        localStorage.setItem('language', lang);
        window.location.reload();
    }
}

// Setup language dropdown event listeners
function setupLanguageDropdown() {
    console.log('🔧 Setting up language dropdown');
    console.log('🔍 DOM ready state:', document.readyState);
    console.log('🔍 All elements in document:', document.querySelectorAll('*').length);

    // Desktop dropdown
    const toggleButton = document.querySelector('.language-toggle');
    console.log('🔍 Toggle button search result:', toggleButton);

    if (toggleButton && !toggleButton.hasAttribute('data-listener-added')) {
        console.log('✅ Found desktop toggle button, adding event listener');
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Desktop toggle button clicked');
            toggleLanguageDropdown();
        });
        toggleButton.setAttribute('data-listener-added', 'true');
    } else if (toggleButton) {
        console.log('ℹ️ Desktop toggle button already has listener');
    } else {
        console.log('❌ Desktop toggle button not found');
        console.log('🔍 Available elements with class containing "language":',
            Array.from(document.querySelectorAll('[class*="language"]')).map(el => el.className));
    }

    // Mobile dropdown
    const toggleButtonMobile = document.querySelector('.language-toggle-mobile');
    if (toggleButtonMobile) {
        console.log('✅ Found mobile toggle button, adding event listener');
        toggleButtonMobile.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Mobile toggle button clicked');
            toggleLanguageDropdownMobile();
        });
    } else {
        console.log('❌ Mobile toggle button not found');
    }

    // Desktop language options
    const langOptions = document.querySelectorAll('.lang-option');
    console.log('Found desktop language options:', langOptions.length);

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.dataset.lang;
            console.log('🖱️ Desktop language option clicked:', lang);
            selectLanguage(lang);
        });
    });

    // Mobile language options
    const langOptionsMobile = document.querySelectorAll('.lang-option-mobile');
    console.log('Found mobile language options:', langOptionsMobile.length);

    langOptionsMobile.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.dataset.lang;
            console.log('🖱️ Mobile language option clicked:', lang);
            selectLanguageMobile(lang);
        });
    });
}

// Mobile dropdown functions
function toggleLanguageDropdownMobile() {
    console.log('🔄 Toggle mobile language dropdown called');
    const menu = document.getElementById('languageMenuMobile');
    const arrow = document.querySelector('.dropdown-arrow-mobile');

    console.log('Mobile menu element:', menu);
    console.log('Mobile arrow element:', arrow);

    if (menu && menu.classList.contains('opacity-0')) {
        console.log('📂 Opening mobile dropdown');
        // Show dropdown using inline styles for better control
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateX(-50%) scale(1)';
        menu.classList.remove('opacity-0', 'invisible', 'scale-95');
        menu.classList.add('opacity-100', 'visible', 'scale-100');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else if (menu) {
        console.log('📁 Closing mobile dropdown');
        // Hide dropdown using inline styles
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateX(-50%) scale(0.95)';
        menu.classList.add('opacity-0', 'invisible', 'scale-95');
        menu.classList.remove('opacity-100', 'visible', 'scale-100');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
        console.log('❌ Mobile menu element not found');
    }
}

function selectLanguageMobile(lang) {
    console.log('🌐 Select mobile language called with:', lang);

    // Update current language display
    const currentLang = document.querySelector('.current-lang-mobile');
    if (currentLang) {
        currentLang.textContent = lang.toUpperCase();
        console.log('✅ Updated mobile current language display to:', lang.toUpperCase());
    }

    // Update active state
    document.querySelectorAll('.lang-option-mobile').forEach(option => {
        const checkMark = option.querySelector('.check-mark-mobile');
        if (option.dataset.lang === lang) {
            if (checkMark) checkMark.style.opacity = '1';
        } else {
            if (checkMark) checkMark.style.opacity = '0';
        }
    });

    // Close dropdown
    toggleLanguageDropdownMobile();

    // Switch language using the unified system
    if (window.switchLanguage && typeof window.switchLanguage === 'function') {
        console.log('✅ Using unified switchLanguage function');
        window.switchLanguage(lang);
    } else if (window.languageManager && typeof window.languageManager.setLanguage === 'function') {
        console.log('✅ Using LanguageManager setLanguage');
        window.languageManager.setLanguage(lang);
    } else {
        console.log('⚠️ Translation system not ready, saving preference and reloading');
        localStorage.setItem('language', lang);
        window.location.reload();
    }
}

// Simple test function
function toggleDropdown() {
    console.log('🔄 Simple toggle function called');
    const menu = document.getElementById('languageMenu');
    console.log('Menu found:', menu);

    if (menu) {
        if (menu.classList.contains('opacity-0')) {
            console.log('📂 Opening dropdown');
            menu.classList.remove('opacity-0', 'invisible', 'scale-95');
            menu.classList.add('opacity-100', 'visible', 'scale-100');
        } else {
            console.log('📁 Closing dropdown');
            menu.classList.add('opacity-0', 'invisible', 'scale-95');
            menu.classList.remove('opacity-100', 'visible', 'scale-100');
        }
    } else {
        console.log('❌ Menu not found');
    }
}

// Make functions globally available
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.selectLanguage = selectLanguage;
window.toggleLanguageDropdownMobile = toggleLanguageDropdownMobile;
window.selectLanguageMobile = selectLanguageMobile;
window.setupLanguageDropdown = setupLanguageDropdown;
window.toggleDropdown = toggleDropdown;

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    const menu = document.getElementById('languageMenu');

    if (dropdown && !dropdown.contains(event.target)) {
        if (menu && !menu.classList.contains('opacity-0')) {
            toggleLanguageDropdown();
        }
    }
});

// Load header immediately - don't wait for DOM
loadHeader();