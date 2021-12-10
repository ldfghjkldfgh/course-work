const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            console.log(index / 5 + 0.5);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        })
    });

}

navSlide();