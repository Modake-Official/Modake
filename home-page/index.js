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

if (isSignIn == null) {
    logoutButtonOnNav.style.display = 'none';
    goToAppButton.style.display = 'none';
    if (mainBtn) {
        mainBtn.innerText = 'Sign up for free';
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
