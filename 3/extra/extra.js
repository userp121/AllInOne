function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

let timeoutId;
window.addEventListener('scroll', () => {
    if (isScrolledToBottom()) {
        clearTimeout(timeoutId); // Clear any existing timeout
        timeoutId = setTimeout(() => {
            // Navigate back to the previous page after 5 seconds
            if (document.referrer) {
                window.location.href = document.referrer;
            } else {
                alert('No previous page to go back to.');
            }
        }, 5000); // 5 seconds
    }
});