console.log('START index.js');

let productDownArrow = document.getElementsByClassName(
    'fa-angle-down'
)
let productButton = document.getElementById('product')

const isSignIn = localStorage.getItem('isSignIn');

console.log('isSignIn', isSignIn);

const logoutButtonOnNav = document.getElementById('logout');

const goToAppButton = document.getElementById('go-to-app');

const mainBtn = document.getElementById('main__btn--try'); // Go to app button giữa trang chủ

const loginButtonOnNav = document.getElementById('login');

const productDropdown = document.getElementById('product-dropdown');

const signUpButtonOnNav = document.getElementById('signup-on-nav');

if (isSignIn == null) {
    logoutButtonOnNav.style.display = 'none';
    goToAppButton.style.display = 'none';
    if (mainBtn) {
        mainBtn.innerHTML = `
            <a href="signup/signup.html">Sign up for free</a>
        `;
    }
} else {
    loginButtonOnNav.style.display = 'none';
    signUpButtonOnNav.style.display = 'none';
    if (mainBtn) {
        mainBtn.innerHTML = `
            <a href="home-page/index.html">Go to app</a>
        `;
    }
}

// Animation cho nút angle down
$(document).ready(function(){
    console.log('START JQuery code block');
    clicked = false;
    $('#product').click(function() {
        if (clicked == false) {
            gsap.to('.fa-angle-down', {
                x: 10,
                rotation: 180
            });
            productDropdown.style.visibility = 'visible';
            clicked = true;
        } else {    
            gsap.to('.fa-angle-down', {
                x: 0,
                rotation: 0
            });
            productDropdown.style.visibility = 'hidden';
            clicked = false;
        }
    });
});

logoutButtonOnNav.addEventListener('click', function() {
    localStorage.removeItem('isSignIn');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = 'index.html';
});