// 1. Password Visibility Toggle Logic
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

// 2. Form Validation Logic
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let isValid = true;

    // Reset styles before checking
    resetErrors();

    // Username Check
    if (username.trim().length < 3) {
        showError('username', 'usernameError', 'Username must be at least 3 characters');
        isValid = false;
    }

    // Email Check (Regex pattern for real-world validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Password Check
    if (password.length < 8) {
        showError('password', 'passwordError', 'Password must be at least 8 characters');
        isValid = false;
    }

    if (isValid) {
        alert(" Registration Successful!");
        console.log("Form Data:", { username, email });
        // You could clear the form here: this.reset();
    }
});

// 3. Helper Functions for Clean Logic
function showError(inputId, errorId, message) {
    const inputField = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    
    inputField.style.borderColor = 'var(--error-color)';
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function resetErrors() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error-msg');
    
    inputs.forEach(input => input.style.borderColor = '#eee');
    errors.forEach(err => err.style.display = 'none');
}
