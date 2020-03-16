let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length)%items.length;
}

function previousItem(n) {
    hideItem('to-rigth')
    changeCurrentItem(n - 1);
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n - 1);
    showItem('from-right')
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction)
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction)
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

document.querySelector('.LeftArrow').addEventListener('click', function () {
    if(isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.RightArrow').addEventListener('click', function () {
    if(isEnabled) {
        nextItem(currentItem);
    }
});

