document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Get login form inputs
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
        alert('No user found. Please create an account first.');
        return;
    }

    // Check if the credentials match
    if (storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        // Redirect to a dashboard or home page (optional)
        window.location.href = 'app.html'; // Replace with your dashboard page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
