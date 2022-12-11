/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.profile-border')
sr.reveal('.profile-name', {delay: 500})
sr.reveal('.profile-profession', {delay: 600})
sr.reveal('.profile-social', {delay:700})
sr.reveal('.profile-info-group', {interval:100, delay:700})
sr.reveal('.profile-buttons', {delay:800})
sr.reveal('.filters-content', {delay:900})
sr.reveal('.filters', {delay:1000})

/*=============== MAIL===============*/


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "khoi0941@gmail.com",
        Password : "52B5813B94B01A781E89C00229802BA451E5",
        To : "tmatmatma06@gmail.com",
        From : "tmatmatma10@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Project: " + document.getElementById("project").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Đã gửi contact thành công")
    );
}




