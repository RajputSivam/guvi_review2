// Form validation for registration
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    
    // Get form field values
    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    // Validate Username
    if (regUsername === '') {
        valid = false;
        document.getElementById('regUsernameError').classList.remove('d-none');
    } else {
        document.getElementById('regUsernameError').classList.add('d-none');
    }

    // Validate Email with regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(regEmail)) {
        valid = false;
        document.getElementById('regEmailError').classList.remove('d-none');
    } else {
        document.getElementById('regEmailError').classList.add('d-none');
    }

    // Validate Password (minimum 8 characters)
    if (regPassword.length < 8) {
        valid = false;
        document.getElementById('regPasswordError').classList.remove('d-none');
    } else {
        document.getElementById('regPasswordError').classList.add('d-none');
    }

    // If valid, simulate successful registration and switch to login form
    if (valid) {
        alert('Registration successful!');
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    }
});

// Form validation for login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    
    // Get form field values
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Validate Email with regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(loginEmail)) {
        valid = false;
        document.getElementById('loginEmailError').classList.remove('d-none');
    } else {
        document.getElementById('loginEmailError').classList.add('d-none');
    }

    // Validate Password
    if (loginPassword === '') {
        valid = false;
        document.getElementById('loginPasswordError').classList.remove('d-none');
    } else {
        document.getElementById('loginPasswordError').classList.add('d-none');
    }

    // If valid, simulate successful login and display user profile
    if (valid) {
        alert('Login successful!');
        document.getElementById('profileUsername').textContent = 'JohnDoe';
        document.getElementById('profileEmail').textContent = loginEmail;
        loginForm.style.display = 'none';
        userProfile.style.display = 'block';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', function () {
    userProfile.style.display = 'none';
    loginForm.style.display = 'block';
});