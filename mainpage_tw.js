document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
        const greeting = 'Welcome' 

        //  welcome message + username + logout 
        welcomeMessage.innerHTML = `
            ${greeting}, <span class="username">${currentUser.username}!
                <span class="logout">logout</span>
            </span>
        `;

        const logoutElement = document.querySelector('.logout');
        logoutElement.addEventListener('click', () => {
            // clear session storage
            sessionStorage.removeItem('currentUser');

            //  welcome message => login/register l
            welcomeMessage.innerHTML = `
                <a href="loginpage_tw.html">login/register</a>
            `;
        });
    } else {
        //  no user  logged in => login/register 
        welcomeMessage.innerHTML = `
            <a href="loginpage_tw.html">login/register</a>
        `;
    }
});
window.onload = function () {
    setTimeout(() => {
        const textSlogan = document.querySelector(".text-slogan");

        textSlogan.style.visibility = "visible";
        textSlogan.style.animation = "slideIn 1s ease-in-out forwards";

        setInterval(() => {
            changeTextColorAndLog(textSlogan);
        }, 2000); 
    }, 700); 
};

//  get a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//  change text color r
function changeTextColorAndLog(element) {
    const newColor = getRandomColor();
    element.style.color = newColor;

    element.style.transition = "color 0.5s ease-in-out";

    // detect current color 
    const computedStyle = getComputedStyle(element);
    const currentColor = computedStyle.color;

    console.log(`The current color of the text is: ${currentColor}`);
}
 

