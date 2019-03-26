function modal() {
    let more = document.querySelector('.more'),
    descrBtn = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

function showMoreInfo() {
    for (let i = 0; i < descrBtn.length; i++) {
        descrBtn[i].classList.add('more-splah');
    }
}

showMoreInfo();

for (let i = 0; i < descrBtn.length; i++) {
    descrBtn[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

}

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});
}

module.exports = modal;