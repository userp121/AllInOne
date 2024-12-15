const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");
const voiceSearchButton = document.getElementById("voiceSearch");

// Simulated suggestion data
const suggestions = [
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain Technology",
  "Futuristic Design",
  "Web Development",
  "UI/UX Trends",
  "JavaScript Frameworks",
];

// Display suggestions when typing
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  suggestionsList.innerHTML = ""; // Clear previous suggestions
  if (query) {
    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );
    filtered.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", () => {
        searchInput.value = suggestion; // Set clicked suggestion
        suggestionsList.style.display = "none"; // Hide suggestions
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
});

// Voice Search (requires HTTPS)
voiceSearchButton.addEventListener("click", function () {
  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
      searchInput.value = event.results[0][0].transcript; // Set voice input
      searchInput.dispatchEvent(new Event("input")); // Trigger input event
    };

    recognition.onerror = function () {
      alert("Voice recognition failed. Please try again.");
    };
  } else {
    alert("Voice search is not supported in your browser.");
  }
});
