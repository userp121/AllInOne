const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const settingsButton = document.getElementById('settingsButton');
const settingsDropdown = document.getElementById('settingsDropdown');

let sidebarTimeout;

toggleSidebar.addEventListener('mouseenter', () => {
    clearTimeout(sidebarTimeout);
    sidebar.classList.add('open-sidebar');
    content.classList.add('open-content');
});

sidebar.addEventListener('mouseenter', () => {
    clearTimeout(sidebarTimeout);
});

sidebar.addEventListener('mouseleave', () => {
    sidebarTimeout = setTimeout(() => {
        sidebar.classList.remove('open-sidebar');
        content.classList.remove('open-content');
    }, 300); // 300ms delay
});

content.addEventListener('click', () => {
    sidebar.classList.remove('open-sidebar');
    content.classList.remove('open-content');
});

toggleSidebar.addEventListener('click', (e) => {
    e.stopPropagation(); 
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

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        autoDisplay: false,
        includedLanguages: 'tcy,hi,kn,en', // Add languages you want to support
    }, 'google_translate_element');
}


(function() {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
})();


document.querySelectorAll('.relative .link').forEach((button) => {
    button.addEventListener('click', (event) => {

      event.stopPropagation();

      const parent = button.closest('.relative');

      document.querySelectorAll('.relative').forEach((div) => {
        if (div !== parent) div.classList.remove('active');
      });
      parent.classList.toggle('active');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.relative').forEach((div) => div.classList.remove('active'));
  });
  