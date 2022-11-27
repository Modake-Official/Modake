console.log('START index.js');
let productDownArrow = document.getElementsByClassName(
    'fa-angle-down'
)
let productButton = document.getElementById('product')

// Chạy flow

gsap.to(['i', '.btn--blue'], {
    rotation: 180,
});

