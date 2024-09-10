// Handle login functionality
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate user authentication (replace this with real authentication in a real app)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') { // Example credentials
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

// Handle logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
});

// Check authentication on dashboard page
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    // Handle report card generation
    document.getElementById('report-form')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get values from form inputs
        const name = document.getElementById('name').value;
        const grade = document.getElementById('grade').value;
        const math = document.getElementById('math').value;
        const science = document.getElementById('science').value;
        const english = document.getElementById('english').value;

        // Display the report card
        document.getElementById('student-name').innerText = `Name: ${name}`;
        document.getElementById('student-grade').innerText = `Grade: ${grade}`;

        const scoresTable = document.getElementById('scores');
        scoresTable.innerHTML = `
            <tr><td>Math</td><td>${math}</td></tr>
            <tr><td>Science</td><td>${science}</td></tr>
            <tr><td>English</td><td>${english}</td></tr>
        `;

        document.getElementById('report-card').classList.remove('hidden');
    });
});
