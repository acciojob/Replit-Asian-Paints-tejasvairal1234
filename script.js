const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");

function resetGrid() {
  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
}

changeBtn.addEventListener("click", () => {

  const blockId = document.getElementById("block_id").value;

  const color = document.getElementById("colour_id").value;

  resetGrid();

  const block = document.getElementById(blockId);

  if (block) {
    block.style.backgroundColor = color;
  }

});

resetBtn.addEventListener("click", () => {
  resetGrid();
});