document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActiveLink = () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) { // Adjust offset as needed
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });

        // Default to 'Home' if no section is active
        if (!currentSection) {
            navLinks[0].classList.add("active"); // Assuming 'Home' is the first nav item
        }
    };

    // Run on page load
    setActiveLink();

    // Run on scroll
    window.addEventListener("scroll", setActiveLink);
});



document.getElementById('viewPdfBtn').addEventListener('click', function () {
    const pdfContainer = document.getElementById('pdfContainer');
    const button = document.getElementById('viewPdfBtn');

    if (pdfContainer.style.display === 'block') {
        pdfContainer.style.display = 'none'; // Hide the PDF
        button.textContent = 'View PDF'; // Change button text
    } else {
        pdfContainer.style.display = 'block'; // Show the PDF
        button.textContent = 'Hide PDF'; // Change button text
    }
});