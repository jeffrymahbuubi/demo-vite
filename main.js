// Import packages
import "./style.css";
import axios from "axios";

// Declare Variable
const todoList = document.getElementById("list-todo");
const todoListContainer = document.getElementById("todo-container");
const userInput = document.getElementById("user-input");
const addButton = document.getElementById("add");
const BASE_API_URL =
  "https://api.kontenbase.com/query/api/v1/afed79a4-6588-4792-9bdb-aca13c0e5cf4/todo-list";

const axiosInstance = axios.create({ baseURL: BASE_API_URL });

async function getList() {
  const response = await axiosInstance.get(BASE_API_URL);
  console.log(response);
}

//Function to check input
function checkInputLength() {
  return userInput.value.length;
}

// Function to add todo-list
function createTodoItemElement() {
  // Create variable for adding list and delete button
  const todoItem = document.createElement("li");
  const deleteBtn = createDeleteButton();

  // Add todo item and delete button at the same time
  todoItem.append(document.createTextNode(userInput.value));
  todoItem.append(deleteBtn);

  // Add todo item to todo list
  todoList.append(todoItem);

  // Prevent user to add empty todo-item after adding todo-item
  userInput.value = "";

  // Delete list if delete button clicked
  deleteBtn.addEventListener("click", () => {
    todoItem.remove();
  });

  // Add strikethrough if list clicked
  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("done");
  });
}

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("title", "Delete List!");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `Delete`;
  return deleteButton;
}

// Function to add todo-item after clicking add-button
function createTodoItemAfterCheckLength() {
  if (checkInputLength() > 0) {
    createTodoItemElement();
  }
}

function runApp() {
  addButton.addEventListener("click", createTodoItemAfterCheckLength);
  todoListContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    createTodoItemAfterCheckLength();
  });
}

// runApp();

get();
