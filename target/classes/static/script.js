const API_URL = "/api/todos";

document.addEventListener("DOMContentLoaded", loadTodos);

async function loadTodos() {
    const response = await fetch(API_URL);
    const todos = await response.json();

    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach(todo => {
        displayTodo(todo);
    });
}

async function addTodo() {
    const input = document.getElementById("todoInput");
    const title = input.value.trim();

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });

    const todo = await response.json();

    displayTodo(todo);
    input.value = "";
}

function displayTodo(todo) {
    const list = document.getElementById("todoList");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    const title = document.createElement("span");
    title.textContent = todo.title;
    title.className = "todo-title";

    if (todo.completed) {
        title.classList.add("completed");
    }

    checkbox.addEventListener("change", async function () {
        await fetch(`${API_URL}/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: todo.title,
                completed: checkbox.checked
            })
        });

        title.classList.toggle("completed", checkbox.checked);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", async function () {
        await fetch(`${API_URL}/${todo.id}`, {
            method: "DELETE"
        });

        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(title);
    li.appendChild(deleteButton);

    list.appendChild(li);
}
