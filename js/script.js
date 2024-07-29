// typing animation
var typed = new Typed(".typing", {
    strings: ["Yazılım Geliştiriciyim","Bilgi Sistemleri Uzmanı"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});