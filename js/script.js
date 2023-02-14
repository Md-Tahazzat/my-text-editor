const textArea = document.querySelector("textarea");

// text-decoration functions
function fontBold() {
  textArea.classList.toggle("font-bold");
}

function fontItalic() {
  textArea.classList.toggle("font-italic");
}

function textUnderline() {
  textArea.classList.toggle("text-underline");
}

// text-align functions
function textRight() {
  textArea.style.textAlign = "right";
}

function textLeft() {
  textArea.style.textAlign = "left";
}

function textCenter() {
  textArea.style.textAlign = "center";
}

function textJustify() {
  textArea.style.textAlign = "justify";
}

// text transform function
function textTransform() {
  textArea.classList.toggle("text-transform");
}

//font-size event listener
document.getElementById("font-size").addEventListener("change", function (e) {
  textArea.style.fontSize = `${e.target.value}px`;
});
document.getElementById("text-color").addEventListener("change", function (e) {
  textArea.style.color = e.target.value;
});
