document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        // Determine if the user just registered or logged in
        const greeting = 'Welcome' 

        // Create the welcome message with the username and logout option
        welcomeMessage.innerHTML = `
            ${greeting}, <span class="username">${currentUser.username}!
                <span class="logout">logout</span>
            </span>
        `;

        // Add event listener for logout
        const logoutElement = document.querySelector('.logout');
        logoutElement.addEventListener('click', () => {
            // Clear session storage
            sessionStorage.removeItem('currentUser');

            // Replace welcome message with login/register link
            welcomeMessage.innerHTML = `
                <a href="loginpage_tw.html">login/register</a>
            `;
        });
    } else {
        // If no user is logged in, show the login/register link
        welcomeMessage.innerHTML = `
            <a href="loginpage_tw.html">login/register</a>
        `;
    }
});
