console.log("Injected");

document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString();
  test.innerText = "Fetching the Meaning";
  document.body.appendChild(window.test);
  if (selectedText) {
    console.log("Selected text:", selectedText);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
      .then((response) => response.json())
      .then((data) => {
        const definitions = data[0].meanings[0].definitions;

        // Parsing thorugh the object of defiantion and printing the value using map
        const print = definitions
          .map((key) => `*) ${key.definition}`)
          .join("\n");

        test.innerText = print;
        document.body.appendChild(window.test);
      })
      .catch((error) => {
        console.error("Error fetching meaning:", error);
      });
  }
  console.log("here");
});
