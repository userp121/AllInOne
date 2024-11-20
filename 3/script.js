const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

let sidebarTimeout;

// Open sidebar on hover
toggleSidebar.addEventListener('mouseenter', () => {
    clearTimeout(sidebarTimeout);
    sidebar.classList.add('open-sidebar');
    content.classList.add('open-content');
});

// Keep sidebar open when hovering over it
sidebar.addEventListener('mouseenter', () => {
    clearTimeout(sidebarTimeout);
});

// Close sidebar when mouse leaves it (with a delay)
sidebar.addEventListener('mouseleave', () => {
    sidebarTimeout = setTimeout(() => {
        sidebar.classList.remove('open-sidebar');
        content.classList.remove('open-content');
    }, 300); // 300ms delay, adjust as needed
});

// Close sidebar when clicking on content
content.addEventListener('click', () => {
    sidebar.classList.remove('open-sidebar');
    content.classList.remove('open-content');
});

// Optional: Keep the click functionality on the toggle button
toggleSidebar.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent content click event from firing
    sidebar.classList.toggle('open-sidebar');
    content.classList.toggle('open-content');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const designCategory = document.querySelector('.category');
    const subCategory = document.querySelector('.sub-category');

    designCategory.addEventListener('click', function(e) {
        if (e.target === this.firstElementChild) {
            e.preventDefault();
            subCategory.style.display = subCategory.style.display === 'block' ? 'none' : 'block';
        }
    });
});

