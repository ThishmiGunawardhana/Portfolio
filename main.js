document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Web Developer", "UI/UX Designer", "Project Manager"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });
});

document.querySelector('.btn-box').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'assets/LKTA Gunawardhana-PM.pdf';
    link.download = 'LKTA Gunawardhana-PM.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
