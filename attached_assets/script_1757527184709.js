// Navigation between pages
function goToQuoteForm() {
    window.location.href = 'quote.html';
}

// Form step navigation
let currentStep = 1;
const totalSteps = 3;

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStepElement = document.getElementById(`step${stepNumber}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index + 1 <= stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Scroll to top of form
    document.querySelector('.quote-form').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function nextStep(stepNumber) {
    if (validateCurrentStep()) {
        currentStep = stepNumber;
        showStep(stepNumber);
    }
}

function previousStep(stepNumber) {
    currentStep = stepNumber;
    showStep(stepNumber);
}

function validateCurrentStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    
    if (currentStep === 1) {
        // Validate shipping from location
        const shipFrom = document.querySelector('input[name="ship_from"]:checked');
        const shipTo = document.querySelector('input[name="ship_to"]:checked');
        
        if (!shipFrom) {
            alert('Please select where you want to ship from.');
            return false;
        }
        
        if (!shipTo) {
            alert('Please select at least one destination to ship to.');
            return false;
        }
    }
    
    if (currentStep === 2) {
        // Validate platform selection
        const platform = document.querySelector('input[name="platform"]:checked');
        const products = document.querySelector('input[name="products"]:checked');
        
        if (!platform) {
            alert('Please select at least one platform to integrate with.');
            return false;
        }
        
        if (!products) {
            alert('Please select what type of products you are selling.');
            return false;
        }
    }
    
    return true;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate final step
            const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company'];
            let isValid = true;
            
            requiredFields.forEach(fieldName => {
                const field = document.getElementById(fieldName);
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '#e2e8f0';
                }
            });
            
            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Collect form data
            const formData = new FormData(quoteForm);
            const data = {};
            
            // Get all form data
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    // Handle multiple values (checkboxes)
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            
            // Get selected shipping destinations
            const shipToCheckboxes = document.querySelectorAll('input[name="ship_to"]:checked');
            data.ship_to = Array.from(shipToCheckboxes).map(cb => cb.value);
            
            // Get selected platforms
            const platformCheckboxes = document.querySelectorAll('input[name="platform"]:checked');
            data.platform = Array.from(platformCheckboxes).map(cb => cb.value);
            
            // Get selected product categories
            const productCheckboxes = document.querySelectorAll('input[name="products"]:checked');
            data.products = Array.from(productCheckboxes).map(cb => cb.value);
            
            // Show success message
            showSuccessMessage(data);
        });
    }
});

function showSuccessMessage(data) {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const successBox = document.createElement('div');
    successBox.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 2rem;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    `;
    
    successBox.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
        <h2 style="color: #111111; margin-bottom: 1rem; font-size: 2rem;">Quote Request Submitted!</h2>
        <p style="color: #4b5563; margin-bottom: 2rem; line-height: 1.6;">
            Thank you, ${data.firstName}! We've received your quote request and will get back to you within 24 hours with a customized fulfillment solution.
        </p>
        <button onclick="closeSuccessMessage()" style="
            background: #000000;
            color: #ffffff;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
        ">
            Close
        </button>
    `;
    
    overlay.appendChild(successBox);
    document.body.appendChild(overlay);
    
    // Log the data (in a real app, this would be sent to a server)
    console.log('Quote Request Data:', data);
}

function closeSuccessMessage() {
    const overlay = document.querySelector('div[style*="position: fixed"]');
    if (overlay) {
        overlay.remove();
    }
    
    // Redirect to home page after a short delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .next-btn, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle loading effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Initialize form when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quoteForm')) {
        showStep(1);
    }
    
    // Initialize parallax effect
    initParallax();

    // Initialize interactive logo dots
    initLogoDotsInteraction();
});

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Use requestAnimationFrame for smooth animation
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', function() {
        requestTick();
        ticking = false;
    });
}

// Interactive mouse-follow for logo dots
function initLogoDotsInteraction() {
    const dotsContainer = document.querySelector('.logo-dots');
    if (!dotsContainer) return;
    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

    const strength = 12; // pixels max offset
    function handleMove(e) {
        const rect = dotsContainer.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;  // -0.5..0.5
        const dy = (e.clientY - cy) / rect.height; // -0.5..0.5
        dots.forEach((dot, i) => {
            const factor = (i % 3) + 1; // 1..3 slight variance
            const tx = Math.max(Math.min(dx * strength * factor, strength), -strength);
            const ty = Math.max(Math.min(dy * strength * factor, strength), -strength);
            dot.style.transform = `translate(${tx}px, ${ty}px)`;
        });
    }

    window.addEventListener('mousemove', handleMove);
}

// Add keyboard navigation for form steps
document.addEventListener('keydown', function(e) {
    if (document.getElementById('quoteForm')) {
        if (e.key === 'ArrowRight' && currentStep < totalSteps) {
            if (validateCurrentStep()) {
                nextStep(currentStep + 1);
            }
        } else if (e.key === 'ArrowLeft' && currentStep > 1) {
            previousStep(currentStep - 1);
        }
    }
});

// Add visual feedback for form interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to option cards
    const optionCards = document.querySelectorAll('.location-card, .platform-card, .category-card');
    
    optionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Form field validation with real-time feedback
document.addEventListener('DOMContentLoaded', function() {
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    
    if (emailField) {
        emailField.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
                showFieldError(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '#e2e8f0';
                hideFieldError(this);
            }
        });
    }
    
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (this.value && !phoneRegex.test(this.value.replace(/\s/g, ''))) {
                this.style.borderColor = '#ef4444';
                showFieldError(this, 'Please enter a valid phone number');
            } else {
                this.style.borderColor = '#e2e8f0';
                hideFieldError(this);
            }
        });
    }
});

function showFieldError(field, message) {
    // Remove existing error message
    hideFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}
