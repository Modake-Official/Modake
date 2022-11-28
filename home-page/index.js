console.log('START index.js');
let productDownArrow = document.getElementsByClassName(
    'fa-angle-down'
)
let productButton = document.getElementById('product')

// Chạy flow

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
