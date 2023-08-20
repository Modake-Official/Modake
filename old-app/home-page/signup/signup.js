const inputEmail = document.getElementById('email');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const buttonLogin = document.getElementById('btn-signup');

checkButton()

inputEmail.addEventListener('keyup', checkButton);
inputPassword.addEventListener('keyup', checkButton);

buttonLogin.addEventListener('click', function() {
});

function checkButton() {
    if (inputEmail.value === '' || inputPassword.value === ''
    || inputUsername.value === '' || checkEmail() === false) {
        console.log('Chưa nhập xong');
        buttonLogin.style.pointerEvents = 'none';
        buttonLogin.classList.add('btn--gray');
    } else {
        console.log('Đã nhập xong');
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