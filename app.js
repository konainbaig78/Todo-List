// Get the input and todo list elements
const input = document.getElementById("text-enter");
const todoBox = document.getElementById("to-do-box");

// Add an event listener for the 'Enter' key to add new todo items
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToDo(this.value);
    this.value = ""; // Clear the input field
  }
});

// Function to add a new todo item
const addToDo = (itemText) => {
  // Create a new list item
  const listItem = document.createElement("li");
  listItem.style.width = "24rem";
  listItem.style.height = "2rem";
  listItem.style.color = "white";
  listItem.style.background = "#6a0dad"; // Purple background
  listItem.style.padding = "5px 12px";
  listItem.style.fontSize = "15px";
  listItem.style.marginLeft = "-8px";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.justifyContent = "space-between";
  listItem.style.border = "2px solid #6a0dad"; // Matching purple border
  listItem.style.borderRadius = "4px"; // Rounded corners
  listItem.style.marginBottom = "10px"; // Space between items

  // Create a checkbox input element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px"; // Space between checkbox and text
  checkbox.style.accentColor = "#6a0dad"; // Purple checkbox accent color

  // Create a span to hold the item text
  const textSpan = document.createElement("span");
  textSpan.textContent = itemText;

  // Create an icon for removing the item
  const removeIcon = document.createElement("i");
  removeIcon.className = "fa-thin fa-x";
  removeIcon.style.cursor = "pointer"; // Indicate clickable icon
  removeIcon.style.color = "#ffcccb"; // Light red color for the remove icon

  // Append checkbox, text span, and icon to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(removeIcon);

  // Add event listener to toggle 'done' class when clicking on the checkbox
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      listItem.classList.add("done");
      listItem.style.background = "#b38bff"; // Light purple when checked
    } else {
      listItem.classList.remove("done");
      listItem.style.background = "#6a0dad"; // Original purple background
    }
  });

  // Add event listener to remove the item when clicking on the icon
  removeIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the list item
    listItem.remove();
  });

  // Append the new list item to the todo list
  todoBox.appendChild(listItem);
};
