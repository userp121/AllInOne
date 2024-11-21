const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const settingsButton = document.getElementById('settingsButton');
const settingsDropdown = document.getElementById('settingsDropdown');

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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expand/collapse sub-category on click
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

// Dropdown functionality for settings
settingsButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent content click event from firing
    settingsDropdown.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#settingsButton')) {
        if (settingsDropdown.classList.contains('show')) {
            settingsDropdown.classList.remove('show');
        }
    }
});function performSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('searchInput');
    const headings = document.querySelectorAll('.heading'); // Select all headings
    const searchTerm = searchInput.value.toLowerCase(); // Get the search term

    // Toggle the active class to animate the search bar
    searchContainer.classList.toggle('active');

    // Focus on the input field when it becomes active
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }

    // Create an array to hold matched headings
    const matchedHeadings = [];
    const unmatchedHeadings = [];

    // Filter through headings and separate matched and unmatched
    headings.forEach(heading => {
        if (heading.textContent.toLowerCase().includes(searchTerm)) {
            matchedHeadings.push(heading);
        } else {
            unmatchedHeadings.push(heading);
        }
    });

    // Clear the current heading list
    const headingContainer = document.getElementById('headingContainer'); // Make sure to have a container for headings
    headingContainer.innerHTML = '';

    // Append matched headings to the top
    matchedHeadings.forEach(heading => headingContainer.appendChild(heading));

    // Append unmatched headings afterwards
    unmatchedHeadings.forEach(heading => headingContainer.appendChild(heading));
}