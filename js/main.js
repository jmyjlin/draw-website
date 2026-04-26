let container = document.querySelector('#container');
let colorBtns = document.querySelectorAll('.color-button')
let color = "blue"
let hexButton = document.querySelector("#hex");
let eraserButton = document.querySelector('#eraser');
let trashButton = document.querySelector('#trash-can');

for (let i = 0; i < 35; i++) {
  for (let j = 0; j < 35; j++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.append(gridItem);

    gridItem.addEventListener("mouseover", () => {
      gridItem.style.backgroundColor = color;
    });

    trashButton.addEventListener("click", () => {
      gridItem.style.backgroundColor = "white";
    });
  }
}

eraserButton.addEventListener("click", () => {
  color = "white";
  colorBtns.forEach((colorBtn) => {
      colorBtn.style.border = "none";
  });
});

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorBtns.forEach((colorBtn) => {
      colorBtn.style.border = "none";
    });
    btn.style.border = "2.5px solid black";
    hexButton.style.backgroundColor = "lightgray";
    switch (btn.id) {
      case "eraser":
        color = "white";
      case "blue":
        color = "blue";
        break;
      case "red":
        color = "red";
        break;
      case "yellow":
        color = "yellow";
        break;
      case "orange":
        color = "orange";
        break;
      case "purple":
        color = "purple";
        break;
      case "pink":
        color = "pink";
        break;
      case "hex":
        let hexChoice = prompt("Enter hex code (with #): ")
        if (hexChoice.includes("#") && (hexChoice.length == 4 || hexChoice.length == 7)) {
          color = `${hexChoice}`
          hexButton.textContent = "";
          hexButton.style.backgroundColor = `${hexChoice}`;
        } else if (!hexChoice.includes("#")) {
          alert("Include a # before the code.")
        } else if (hexChoice.length != 4 || hexChoice.length != 7) {
          alert("Your hex code has an invalid length.")
        }
    }
  });
});