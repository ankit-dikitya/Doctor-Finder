document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form inputs
    const firstname = document.getElementById('firstname-input').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;
    const repeatPassword = document.getElementById('repeat-password-input').value;

    // Validation checks
    if (!firstname || !phone || !email || !password || !repeatPassword) {
        alert('All fields are required.');
        return;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Save user data to localStorage (simulating a database)
    const userData = { firstname, phone, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // Notify user and reset form
    alert('Signup successful!');
    document.getElementById('signupForm').reset();
});
