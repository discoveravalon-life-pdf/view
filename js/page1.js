const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const continueBtn = document.getElementById('continueBtn');

// Load saved email if exists
window.addEventListener('load', function() {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        emailInput.value = savedEmail;
    }
});

// Email Form Submission
emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailError.style.display = 'none';
    
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
        emailError.style.display = 'block';
        return;
    }
    
    // Save email
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('userEmail', email);
    
    // Show loading state
    continueBtn.disabled = true;
    continueBtn.textContent = 'Loading...';
    
    // Redirect to page 2
    setTimeout(function() {
        window.location.href = 'page2.html';
    }, 800);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailInput.addEventListener('blur', function() {
    if (this.value.trim().length > 0 && isValidEmail(this.value.trim())) {
        emailError.style.display = 'none';
    }
});

emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        emailForm.dispatchEvent(new Event('submit'));
    }
});
