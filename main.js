let color = "black";
let click = false;
const colorPicker = document.getElementById("colorPicker");

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mousemove", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(32);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").textContent = "";
    populateBoard(input);
  } else {
    document.querySelector(".error").textContent = "Input must be between 2 and 100";
  }
}

function colorSquare() {
  if (click) {
    if (color === "Random") {
      this.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
function setCurrentColor(newColor) {
  changeColor(newColor);
}
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
