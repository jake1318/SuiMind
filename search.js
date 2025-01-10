document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsDiv = document.getElementById("results");

  searchButton.addEventListener("click", async () => {
    const query = searchInput.value;
    if (query) {
      try {
        const response = await fetch("/ai-search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: query }),
        });

        const data = await response.json();
        resultsDiv.innerHTML = "";
        if (data.results && data.results.length > 0) {
          data.results.forEach((result) => {
            const resultElement = document.createElement("p");
            resultElement.textContent = result.answer;
            resultsDiv.appendChild(resultElement);
          });
        } else {
          resultsDiv.textContent = "No results found.";
        }
      } catch (error) {
        console.error("Error:", error);
        resultsDiv.textContent = "An error occurred while searching.";
      }
    }
  });
});
