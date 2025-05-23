const inputContainer = document.getElementById("input-container");
const inputBox = document.getElementById("input-box");
const chipsList = document.getElementById("chips-list");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type a chip and press tag....");
input.classList.add("input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const trimmed = input.value.trim();
    if (trimmed === "") return;
    const chips = document.createElement("span");
    const button = document.createElement("button");

    chips.innerText = trimmed;

    button.innerText = "❌";
    button.classList.add("btn");
    chips.appendChild(button);
    chipsList.appendChild(chips);
    input.value = "";

    button.addEventListener("click", () => {
      chips.remove();
    });
  }
});

inputBox.appendChild(input);


