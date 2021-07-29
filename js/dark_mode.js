let body = document.querySelector('body');
let changeModeLink = document.getElementById('change-mode');
let search = document.getElementById('input-ctn');
let searchIcon = document.getElementById('search-icon');
let trendings = document.getElementById('trending');
let logoDesktop = document.getElementById('logo-desktop');
let logoMobile = document.getElementById('logo-mobile');
let btnGifos = document.getElementById('create-gif');
let sliderRight = document.getElementById('right');
let sliderLeft = document.getElementById('left');
 
//HOST PATH 
let host = "http://"+window.location.hostname+":"+location.port;

function update_src(img, src) {
    img.src = host+src;
}

function toggle_src(img, ligth_src, dark_src) {
    if(img.src == host+ligth_src) {
        update_src(img, dark_src)
    } else {
        update_src(img, ligth_src)
    }
}
 
function changeLogo() {
    toggle_src(logoDesktop, "/assets/logo-desktop.svg", "/assets/logo-dark.svg")
    toggle_src(logoMobile, "/assets/logo-mobile.svg", "/assets/logo-mobile-dark.svg")
}
 
function changeBtnGifos() {
    toggle_src(btnGifos, "/assets/create-gifo-btn.svg", "/assets/create-gifo-btn-dark.svg")
}
 
function changeSearchIcon() {
    toggle_src(searchIcon, "/assets/search-icon.svg", "/assets/search-icon-dark.svg")
}
 
function changeSliders() {
    toggle_src(sliderRight, "/assets/slider-right-btn.svg", "/assets/slider-right-btn-dark.svg");
    toggle_src(sliderLeft, "/assets/slider-left-btn.svg", "/assets/slider-left-btn-dark.svg")
}
 
function changeLinkContent () {
    if(changeModeLink.textContent == 'Modo Diurno') {
        changeModeLink.textContent = 'Modo Nocturno';
    } 
    else {
        changeModeLink.textContent = 'Modo Diurno';
    }
}
 
// window.onload    
window.addEventListener('load', () => {
    console.log(localStorage.getItem("theme-mode"));
     
    if(localStorage.getItem("theme-mode") == "dark"){
        changeTheme();
    }
});
 
changeModeLink.addEventListener('click', () => {
    if(localStorage.getItem("theme-mode") == "dark"){
        localStorage.setItem("theme-mode", "light");
        changeTheme();
    }
    else {
        localStorage.setItem("theme-mode", "dark");
        changeTheme();
    }
});
    
function changeTheme() {
    body.classList.toggle('dark');
    if(search){search.classList.toggle('dark-border');}
    if(searchIcon){ changeSearchIcon();}
    if(trendings){trendings.classList.toggle('dark-bg');}
    changeSliders();
    if(btnGifos){changeBtnGifos();}
    changeLinkContent();
    changeLogo();
}