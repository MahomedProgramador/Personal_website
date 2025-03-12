// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
    });
});

// Make Project Divs Clickable
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", function () {
            const url = this.dataset.url;
            if (url) {
                window.open(url, "_blank"); // Opens in a new tab
            } else {
                console.error("No URL found for this project!");
            }
        });
    });
});


// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Portfolio Filter (Add your categories)
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        portfolioItems.forEach(item => {
            item.style.display = item.classList.contains(filter) ? 'block' : 'none';
        });
    });
});
