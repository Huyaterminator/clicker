// JavaScript code in script.js
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Check if the username and password match a stored user (for example, in localStorage)
    // Implement your authentication logic here

    // Example: Checking if the user exists with a hardcoded username and password
    if (loginUsername === "user" && loginPassword === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;

    // Store the new user's data (for example, in localStorage)
    // Implement your user registration logic here

    // Example: Storing user data in localStorage
    const newUser = {
        username: registerUsername,
        password: registerPassword
    };
    localStorage.setItem(registerUsername, JSON.stringify(newUser));
    alert("Registration successful! You can now log in.");
});
