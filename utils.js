window.test = document.createElement("div");
test.innerText = "Heloo there";
const styles = {
  background: "white",
  fontSize: "20px",
  color: "black",
  position: "fixed",
  top: "20px",
  right: "20px",
};

for (let prop in styles) {
  test.style[prop] = styles[prop];
}
