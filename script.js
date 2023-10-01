// JavaScript code in script.js
const signupLink = document.getElementById("signupLink");
const signupForm = document.getElementById("signupForm");

signupLink.addEventListener("click", () => {
    signupForm.style.display = "block";
});

// JavaScript code in script.js
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get user input from the signup form
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Create a user object with the data
    const user = {
        username: newUsername,
        password: newPassword
    };

    // Store the user object in localStorage
    localStorage.setItem(newUsername, JSON.stringify(user));

    // Optionally, you can clear the form fields
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";

    // Notify the user that signup was successful or redirect them to the game page
    alert("Signup successful! You can now log in.");
});
