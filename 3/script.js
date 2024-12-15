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

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        includedLanguages: 'fr,de,es,kn,en', // Add languages you want to support
    }, 'google_translate_element');
}

// Load the Google Translate API script
(function() {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
})();

// Add event listeners to toggle dropdowns
document.querySelectorAll('.relative .link').forEach((button) => {
    button.addEventListener('click', (event) => {
      // Prevent closing other dropdowns
      event.stopPropagation();
  
      // Get the parent 'relative' div
      const parent = button.closest('.relative');
  
      // Close any other open dropdowns
      document.querySelectorAll('.relative').forEach((div) => {
        if (div !== parent) div.classList.remove('active');
      });
  
      // Toggle the current dropdown
      parent.classList.toggle('active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.relative').forEach((div) => div.classList.remove('active'));
  });
  