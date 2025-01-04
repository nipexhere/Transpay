document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box h3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 5s ease forwards';
            } else {
                entry.target.style.animation = 'fadeOutDown 5s ease forwards';
            }
        });
    }, {
        threshold: 0.5
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});