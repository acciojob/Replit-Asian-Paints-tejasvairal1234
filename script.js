//
//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

// Function to reset all blocks
function resetGrid() {
  const items = document.querySelectorAll(".grid-item");

  items.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
}

// Change color
changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all first
  resetGrid();

  // Change selected block color
  const block = document.getElementById(blockId);

  if (block) {
    block.style.backgroundColor = color;
  }
});

// Reset button
resetBtn.addEventListener("click", resetGrid);
