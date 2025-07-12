// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    console.log('Mobile menu elements:', {
        button: !!mobileMenuBtn,
        menu: !!mobileMenu
    });

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            console.log('Mobile menu button clicked');
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between menu and x
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                const isOpen = !mobileMenu.classList.contains('hidden');
                icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                
                // Re-initialize Lucide icons
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    
                    // Reset icon to menu
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.setAttribute('data-lucide', 'menu');
                        if (window.lucide) {
                            window.lucide.createIcons();
                        }
                    }
                }
            }
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                
                // Reset icon to menu
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (window.lucide) {
                        window.lucide.createIcons();
                    }
                }
            });
        });
    } else {
        console.warn('Mobile menu elements not found');
    }
});
