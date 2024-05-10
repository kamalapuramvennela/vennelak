// Handle login form submission
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address."); // No URLs or fragments
        return false; // Prevent form submission
    }

    // Validate that the password is not empty
    if (password.trim() === "") {
        alert("Please enter your password."); // Simple message without URLs
        return false; // Prevent form submission
    }

    // If validation passes
    alert("Login successful!"); 
    return false; // Prevent form submission (for demo purposes)
}

// Handle 'Forgot Password' link
function handleForgotPassword() {
    alert("Instructions to reset your password will be sent to your email."); 
}


