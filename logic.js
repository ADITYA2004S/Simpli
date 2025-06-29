// will be writing the logic here of the js //
import definations from 
console.log("hello world");
// document.querySelector(".submit").addEventListener("click", () => {
//   alert("word sent");
//   const word = document.querySelector(".word").value;
//   console.log(word);

//   setTimeout(() => {
//     document.querySelector(".word").innerHTML = " change kardiya";
//     console.log("I am here");
//   }, "1000");
// });

const btn = document.querySelector(".send");

btn.addEventListener("click", () => {
  if (window.getSelection) {
    var text = "";
    text = window.getSelection().toString().toLowerCase();
    console.log(text);
    console.log("here");
  } else {
    alert("Select something first");
  }
});
