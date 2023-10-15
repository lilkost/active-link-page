document.addEventListener("DOMContentLoaded", () => {
    let section = document.querySelectorAll('section');
    let links = document.querySelectorAll('nav a');

    window.onscroll = () => {
        section.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 60;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                links.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('nav a[href*=' + id + ']').classList.add('active');
                });
            }
        })
    }
});