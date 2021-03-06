function clear() {
    document.querySelector('.HOME').style.color = '#ffffff';
    document.querySelector('.SERVICE').style.color = '#ffffff';
    document.querySelector('.PORTFOLIO').style.color = '#ffffff';
    document.querySelector('.ABOUT').style.color = '#ffffff';
    document.querySelector('.CONTACT').style.color = '#ffffff';
}

function hover() {
    let position = document.querySelector('body').getBoundingClientRect().top;
    if (position > -500) {
        clear();
        document.querySelector('.HOME').style.color = '#f06c64'
    }
    if (position < -470 && position > -1000) {
        clear();
        document.querySelector('.SERVICE').style.color = '#f06c64'
    }
    if (position < -1000 && position > -1900) {
        clear();
        document.querySelector('.PORTFOLIO').style.color = '#f06c64'
    }
    if (position < -1900 && position > -2202) {
        clear();
        document.querySelector('.ABOUT').style.color = '#f06c64'
    }
    if (position < -2200) {
        clear();
        document.querySelector('.CONTACT').style.color = '#f06c64'
    }
}


function home() {
    clear();
    document.querySelector('.HOME').style.color = '#f06c64'
}

function service() {
    clear();
    document.querySelector('.SERVICE').style.color = '#f06c64'
}

function portfolio() {
    clear();
    document.querySelector('.PORTFOLIO').style.color = '#f06c64'
}

function about() {
    clear();
    document.querySelector('.ABOUT').style.color = '#f06c64'
}

function contact() {
    clear();
    document.querySelector('.CONTACT').style.color = '#f06c64'
}

document.querySelector('.aHome').addEventListener('click', home);
document.querySelector('.aService').addEventListener('click', service);
document.querySelector('.aPortfolio').addEventListener('click', portfolio);
document.querySelector('.aAbout').addEventListener('click', about);
document.querySelector('.aContact').addEventListener('click', contact);
document.querySelector('body').addEventListener('wheel', hover);




//button

let menu = document.querySelector('.menu-nav');
let active = false;
document.querySelector('.btn').addEventListener('click',function (event) {
    event.preventDefault();
    if(active===false) {
        menu.classList.add('menu-nav-active');
        this.classList.add('btn-active');
      active = true;
    } else {
        this.classList.remove('btn-active');
        menu.classList.remove('menu-nav-active');
        active = false;
    }
});