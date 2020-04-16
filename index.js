let intervalId = 0;
let $scrollButton;

window.onload = () => {
    $scrollButton = document.querySelector('.scroll');
    $scrollButton.addEventListener('click', scrollToTop);
}

function scrollStep() {

    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {

    intervalId = setInterval(scrollStep, 16.66);
}

