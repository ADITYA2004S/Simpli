// Create the sticky note element
const test = document.createElement("div");
test.className = "sempli-note";
test.innerText = "Fetching the Meaning";
document.body.appendChild(test);

// Save it globally if needed elsewhere
window.test = test;

// Inject styling
const style = document.createElement("style");
style.textContent = `
  .sempli-note {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 300px;
    background: #fff9c4; /* Light yellow sticky note color */
    color: #333; /* Dark text for contrast */
    padding: 15px;
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    border-radius: 8px;
    z-index: 999999; /* Ensure it’s on top */
    white-space: pre-line;
  }

  @media (prefers-color-scheme: dark) {
    .sempli-note {
      background: #fce36b; /* Slightly brighter for dark mode */
      color: #111;
    }
  }
`;
document.head.appendChild(style);
