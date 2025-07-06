console.log("Injected");

let isListenerActive = false;

//---------------------------Fetching The Word Meaning using API---------------------------//
function handleSelection() {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;

  test.innerText = "Fetching the Meaning";
  document.body.appendChild(window.test);

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
    .then((response) => response.json())
    .then((data) => {
      const definitions = data[0].meanings[0].definitions;
      const print = definitions.map((key) => `*) ${key.definition}`).join("\n");
      test.innerText = print;
    })
    .catch(() => {
      test.innerText = "Something Went Wrong with Word Selection";
    });
}

function addSelectionListener() {
  if (!isListenerActive) {
    document.addEventListener("mouseup", handleSelection);
    isListenerActive = true;
    console.log("Selection listener added.");
  }
}

function removeSelectionListener() {
  if (isListenerActive) {
    document.removeEventListener("mouseup", handleSelection);
    isListenerActive = false;
    console.log("Selection listener removed.");
  }
}

// ✅ Initial check on load
chrome.storage.local.get("extension", (result) => {
  if (result.extension) {
    addSelectionListener();
  } else {
    removeSelectionListener(); // Make sure it's removed when "off"
  }
});

// ✅ Real-time updates from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.state === "on") {
    addSelectionListener();
  } else if (message.state === "off") {
    removeSelectionListener();
  }
});
