let leftBtn = document.querySelector('#left');
let rightBtn = document.querySelector('#right');

leftBtn.addEventListener('mouseover', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        leftBtn.src = '/assets/slider-left-btn-hover-dark.svg';
    } else {
        leftBtn.src = '/assets/slider-left-btn-hover.svg';
    }
});

leftBtn.addEventListener('mouseout', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        leftBtn.src = '/assets/slider-left-btn-dark.svg';
    } else {
        leftBtn.src = '/assets/slider-left-btn.svg';
    }

});

rightBtn.addEventListener('mouseover', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        rightBtn.src = './assets/slider-right-btn-hover-dark.svg';
    } else {
        rightBtn.src = './assets/slider-right-btn-hover.svg';
    }

});

rightBtn.addEventListener('mouseout', () => {
    if (localStorage.getItem("theme-mode") == "dark") {
        rightBtn.src = './assets/slider-right-btn-dark.svg';
    } else {
        rightBtn.src = './assets/slider-right-btn.svg';
    }

});