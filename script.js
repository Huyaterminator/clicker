// JavaScript code in script.js
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    // Implement login logic here (e.g., check if the user exists in localStorage)
});

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const user = {
        username: signupUsername,
        password: signupPassword
    };
    localStorage.setItem(signupUsername, JSON.stringify(user));
    alert("Signup successful! You can now log in.");
});
