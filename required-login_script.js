let isLoggedIn = false; // Change this based on your actual login state

function checkLogin(event) {
    if (!isLoggedIn) {
        event.preventDefault(); // Prevent the default action
        document.getElementById('loginPopup').style.display = 'block'; // Show the popup
    }
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none'; // Close the popup
}

// Add event listeners to Reservation and Order links
document.querySelector('a[href="#reservation"]').addEventListener('click', checkLogin);
document.querySelector('a[href="#order"]').addEventListener('click', checkLogin);

function updateUser Section() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').innerText = `Welcome, ${username}!`; // Use backticks for template literals
        document.getElementById('userSection').style.display = 'block';
        document.getElementById('specialButton').style.display = 'block';
    } else {
        document.getElementById('userSection').style.display = 'none';
        document.getElementById('specialButton').style.display = 'none';
    }
}
//logout Function
function logout() {
    localStorage.removeItem('username');
    localStorage.setItem('loggedIn', 'false');
    document.getElementById('userSection').style.display = 'none';
    alert('You have logged out successfully.');
}

document.addEventListener('DOMContentLoaded', updateUserSection);