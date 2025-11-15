const form = document.querySelector('.contact-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    thankYou.classList.add('show');
    setTimeout(() => {
        thankYou.classList.remove('show');
    }, 2000);
    form.reset();
});
