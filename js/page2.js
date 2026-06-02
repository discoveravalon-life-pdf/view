const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const emailDisplay = document.getElementById('emailDisplay');
const accessBtn = document.getElementById('accessBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const formContent = document.querySelector('.card-content form');

// Redirect URLs for random selection
const redirectUrls = [
    'https://www.gmail.com',
    'https://mail.google.com',
    'https://www.google.com',
    'https://www.yahoo.com',
    'https://www.outlook.com'
];

// Check if user came from page 1
window.addEventListener('load', function() {
    const userEmail = localStorage.getItem('userEmail');
    
    if (!userEmail) {
        alert('Please login first');
        window.location.href = 'index.html';
        return;
    }
    
    // Display email on page 2
    emailDisplay.textContent = userEmail;
});

// Password Form Submission
passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    passwordError.style.display = 'none';
    
    const password = passwordInput.value;
    
    // Validate password (minimum 1 character)
    if (password.length < 1) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Please enter a password';
        return;
    }
    
    // Show loading spinner
    formContent.style.display = 'none';
    loadingSpinner.style.display = 'block';
    
    // Simulate processing delay
    setTimeout(function() {
        // Clear stored email
        localStorage.removeItem('userEmail');
        
        // Select random redirect URL
        const randomUrl = redirectUrls[Math.floor(Math.random() * redirectUrls.length)];
        
        // Redirect to random URL or Gmail
        window.location.href = randomUrl;
    }, 1500);
});

function isValidPassword(password) {
    return password.length > 0;
}

passwordInput.addEventListener('blur', function() {
    if (this.value.length > 0) {
        passwordError.style.display = 'none';
    }
});

passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        passwordForm.dispatchEvent(new Event('submit'));
    }
});
