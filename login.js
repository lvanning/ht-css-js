'use strict';

// Function to handle login
function login() {
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation or API call for authentication
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate an API call
    console.log(`Logging in with username: ${username}`);
    // Here you would typically make an API call to log in the user
}

// Add event listener for the login button
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);
