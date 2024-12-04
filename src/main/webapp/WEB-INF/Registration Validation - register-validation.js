document.getElementById('registerForm').addEventListener('submit', function (event) {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    let isValid = true;

    // Validate username
    if (!username.value) {
        username.classList.add('is-invalid');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    // Validate password
    if (!password.value) {
        password.classList.add('is-invalid');
        isValid = false;
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});