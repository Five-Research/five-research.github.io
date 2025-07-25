// Common JavaScript functions for all pages

// Smooth scroll function
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document
			.querySelector(this.getAttribute("href"))
			.scrollIntoView({
				behavior: "smooth",
			});
	});
});

// Mobile menu toggle function
function toggleMobileMenu() {
	const hamburger = document.querySelector('.hamburger');
	const mobileMenu = document.getElementById('mobileMenu');
	const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
	
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
	hamburger.setAttribute('aria-expanded', !isExpanded);
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
	link.addEventListener('click', () => {
		const hamburger = document.querySelector('.hamburger');
		const mobileMenu = document.getElementById('mobileMenu');
		
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
		hamburger.setAttribute('aria-expanded', 'false');
	});
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
	const hamburger = document.querySelector('.hamburger');
	const mobileMenu = document.getElementById('mobileMenu');
	const nav = document.querySelector('nav');
	
	if (!nav.contains(e.target) && mobileMenu.classList.contains('active')) {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
		hamburger.setAttribute('aria-expanded', 'false');
	}
});

// Close mobile menu with escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const hamburger = document.querySelector('.hamburger');
		const mobileMenu = document.getElementById('mobileMenu');
		
		if (mobileMenu.classList.contains('active')) {
			hamburger.classList.remove('active');
			mobileMenu.classList.remove('active');
			hamburger.setAttribute('aria-expanded', 'false');
			hamburger.focus();
		}
	}
});

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const heroSection = document.querySelector('.hero');
            const nextSection = heroSection.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Initialize scroll indicator when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollIndicator);

// Scroll to news section function
function scrollToNews() {
    const newsSection = document.querySelector('.news');
    if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth' });
    }
}