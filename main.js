document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Project Manager", "Business Analyst", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });
});

document.querySelector('.btn-box').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'assets/CV_Thishmi Gunawardhana.pdf';
    link.download = 'CV_Thishmi Gunawardhana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
