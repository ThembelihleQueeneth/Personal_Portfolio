  // Update your JavaScript
const greetings = [
  "Hello (English)",
  "Sawubona (Zulu)",
  "Dumela (Sesotho/Setswana)",
  "Molo (Xhosa)",
  "Avuxeni (Xitsonga)",
  "Ndaa / Aa (Venda)",
  "Thobela (Sepedi)",
  "Hallo (Afrikaans)",
  "Sanibonani (Zulu - plural)",
  "Abusheni (Xitsonga - informal)",
  "Lotjhani (Ndebele)"
];

const greetingElement = document.getElementById('animated-greeting');
let currentIndex = 0;

function changeGreeting() {
  // Add color change animation
  greetingElement.style.color = '#FEBE10'; // Your accent color
  greetingElement.style.animation = 'none';
  
  setTimeout(() => {
    greetingElement.textContent = greetings[currentIndex];
    greetingElement.style.color = ''; // Reset to default
    greetingElement.style.animation = '';
    
    currentIndex = (currentIndex + 1) % greetings.length;
  }, 300);
}

// Change greeting every 3 seconds
setInterval(changeGreeting, 3000);

// Initial bounce effect
greetingElement.addEventListener('mouseover', () => {
  greetingElement.style.animation = 'bounce 0.5s ease infinite alternate';
});

greetingElement.addEventListener('mouseout', () => {
  greetingElement.style.animation = 'bounce 0.5s ease infinite alternate';
});
  
  document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const navButtons = document.querySelector('.nav-buttons');
            
            if (navLinks && navButtons) {
                navLinks.classList.toggle('active');
                navButtons.classList.toggle('active');
                
                // Change icon based on menu state
                const icon = this.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('bi-list');
                    icon.classList.add('bi-x');
                } else {
                    icon.classList.remove('bi-x');
                    icon.classList.add('bi-list');
                }
            }
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Scroll reveal animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .stack-category, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.timeline-item, .stack-category, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('#slideshow img');
  images.forEach(img => {
    // Random vertical offset between -10px and 10px
    const randomOffset = Math.floor(Math.random() * 20) - 10;
    img.style.top = `calc(15px + ${randomOffset}px)`;
    
    // Random animation duration between 18s and 22s
    const randomDuration = 18 + Math.random() * 4;
    img.style.animationDuration = `${randomDuration}s`;
  });
});

    