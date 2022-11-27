console.log('START index.js');
import { gsap } from "gsap";
var productDownArrow; // Tạo biến
var productButton;

// Chạy flow
addControls();
addEvents();


// Tạo hàm
function addControls() {
    productDownArrow = document.getElementsByClassName(
        'fa-angle-down'
    )
    productButton = document.getElementById('product')
}

function addEvents() {
    productButton.addEventListener('click', function () {
        gsap.to(productDownArrow, {
            rotation: 180,
        })
    });
}

