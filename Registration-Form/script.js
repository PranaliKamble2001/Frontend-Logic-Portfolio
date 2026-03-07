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
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;

    // Reset styles
    resetErrors();

    // Email Check
    if (!email.includes('@')) {
        showError('email', emailError, 'Enter a valid email address');
        isValid = false;
    }

    // Password Check
    if (password.length < 8) {
        showError('password', passwordError, 'Password must be at least 8 characters');
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        console.log("Form Submitted Successfully");
    }
});

function showError(inputId, errorElement, message) {
    document.getElementById(inputId).style.borderColor = 'var(--error-color)';
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function resetErrors() {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error-msg');
    inputs.forEach(input => input.style.borderColor = '#eee');
    errors.forEach(err => err.style.display = 'none');
}
