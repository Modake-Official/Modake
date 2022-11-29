checkButton()

inputEmail.addEventListener('keyup', checkButton);
inputPassword.addEventListener('keyup', checkButton);

function checkButton() {
    if (inputEmail.value === '' || inputPassword.value === '') {
        buttonLogin.style.pointerEvents = 'none';
        buttonLogin.classList.add('btn--gray');
    } else {
        buttonLogin.style.pointerEvents = 'auto';
        buttonLogin.classList.remove('btn--gray');
    }
}
