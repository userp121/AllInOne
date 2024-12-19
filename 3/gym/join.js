document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('mousedown', function (event) {
      if (this.checked) {
        // Prevent default action and uncheck the radio button
        event.preventDefault();
        this.checked = false;
      }
    });
  });

  const scrollableGrid = document.getElementById("scrollableGrid");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");
  
  // Number of cards to display at one time
  const cardsToShow = 4;
  
  // Calculate the scroll amount dynamically
  const cardWidth = scrollableGrid.children[0].offsetWidth + 24; // Card width + gap (adjust gap as per CSS)
  const scrollAmount = cardWidth * cardsToShow; // Total scroll amount
  
  // Initialize the scroll position
  let currentPosition = 0;
  
  // Event listener for the left scroll button
  scrollLeftBtn.addEventListener("click", () => {
    currentPosition = Math.max(currentPosition - scrollAmount, 0); // Prevent scrolling past the start
    scrollableGrid.style.transform = `translateX(-${currentPosition}px)`;
  });
  
  // Event listener for the right scroll button
  scrollRightBtn.addEventListener("click", () => {
    const maxScrollPosition =
      scrollableGrid.scrollWidth - scrollableGrid.parentElement.offsetWidth;
    currentPosition = Math.min(currentPosition + scrollAmount, maxScrollPosition); // Prevent scrolling past the end
    scrollableGrid.style.transform = `translateX(-${currentPosition}px)`;
  });
  