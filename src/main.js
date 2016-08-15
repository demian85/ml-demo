function init() {
    history.replaceState(null, null, '#product-description');
    initCarousel();
}

function initCarousel() {
    const slider = document.querySelector('#carousel-bar');
    document.querySelector('#carousel .left-arrow').addEventListener('click', function(e) {
        const current = slider.offsetLeft;
        if (current < 0) {
            slider.style.left = current + 100 + 'px';
        }
    });
    document.querySelector('#carousel .right-arrow').addEventListener('click', function(e) {
        const current = slider.offsetLeft;
        slider.style.left = current - 100 + 'px';
    });
}

window.addEventListener('DOMContentLoaded', init);
