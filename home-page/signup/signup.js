const inputEmail = document.getElementById('email');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const buttonLogin = document.getElementById('btn-login');

checkButton()

inputEmail.addEventListener('keyup', checkButton);
inputPassword.addEventListener('keyup', checkButton);

function checkButton() {
    if (inputEmail.value === '' || inputPassword.value === '' || inputUsername.value === '') {
        console.log('Chưa nhập xong');
        buttonLogin.style.pointerEvents = 'none';
        buttonLogin.classList.add('btn--gray');
    } else {
        console.log('Đã nhập xong');
        buttonLogin.style.pointerEvents = 'auto';
        buttonLogin.classList.remove('btn--gray');
    }
}
