const inputEmail = document.getElementById('email');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const buttonLogin = document.getElementById('btn-login');

checkButton();

inputEmail.addEventListener('keyup', checkButton);
inputPassword.addEventListener('keyup', checkButton);

buttonLogin.addEventListener('click', function() {
    if(inputPassword.value === '1234') {
        localStorage.setItem('isSignIn', true);
        localStorage.setItem('username', inputUsername.value);
        localStorage.setItem('email', inputEmail.value);
        window.location.href = '../home-page/index.html';
    } else {
        alert('Wrong password');
    }
});

function checkButton() {
    if (inputEmail.value === '' || inputPassword.value === '' ||
        checkEmail() === false) {
        buttonLogin.style.pointerEvents = 'none';
        buttonLogin.classList.add('btn--gray');
    } else {
        buttonLogin.style.pointerEvents = 'auto';
        buttonLogin.classList.remove('btn--gray');
    }
}

// check Email with Regex
function checkEmail() {
    const email = inputEmail.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
}