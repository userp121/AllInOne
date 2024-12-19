const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");
const voiceSearchButton = document.getElementById("voiceSearch");

const suggestions = [
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain Technology",
  "Futuristic Design",
  "Web Development",
  "UI/UX Trends",
  "JavaScript Frameworks",
];

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  suggestionsList.innerHTML = ""; 
  if (query) {
    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );
    filtered.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", () => {
        searchInput.value = suggestion; 
        suggestionsList.style.display = "none";
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
});

// Voice Search 
voiceSearchButton.addEventListener("click", function () {
  if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
      searchInput.value = event.results[0][0].transcript;
      searchInput.dispatchEvent(new Event("input")); 
    };

    recognition.onerror = function () {
      alert("Voice recognition failed. Please try again.");
    };
  } else {
    alert("Voice search is not supported in your browser.");
  }
});
