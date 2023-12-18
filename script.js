document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var typed = new Typed('#typed-output', {
        strings: ["Hi, I am Avneet Singh"],
        typeSpeed: 50,
        showCursor: false,
    });

    // Highlight the active link in the sidebar based on the current section
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Iterate through each section and check if it's in the viewport
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(`.sidebar a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
});
