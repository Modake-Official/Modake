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

if (isSignIn == null) {
    logoutButtonOnNav.style.display = 'none';
    goToAppButton.style.display = 'none';
    mainBtn.innerText = 'Sign up for free';
}

$(document).ready(function(){
    console.log('START JQuery code block');
    $( ".target" ).toggle("slow",
        function() {
            gsap.to('.fa-angle-down', {
                x: 10,
                rotation: 180
            });
        }
    );
});
