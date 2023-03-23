window.onload = function () {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    document.getElementById("userFullName").innerHTML = userLogin.FullName;
    displayTasks();
}

function saveTasks() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks == null) {
        tasks = {};
    }

    if (tasks[userLogin.Email] == undefined) {
        tasks[userLogin.Email] = [];
    }

    let title = document.getElementById("title").value;
    if (title == "") {
        alert("Title is required");
        return;
    }

    if (tasks[userLogin.Email].some(task => task.title == title)) {
        alert("Title is already exists");
        return;
    }

    let status = "Incomplete";
    let task = {
        title,
        status
    }
    tasks[userLogin.Email].push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

//display all tasks

function displayTasks() {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let html = "";
    if (tasks != null) {
        if (tasks[userLogin.Email] != undefined) {
            tasks[userLogin.Email].forEach(task => {
                html += `<tr>
                            <td>${task.title}</td>
                            <td>${task.status}</td>
                            <td>
                                <button class="btn btn-success" id="complete" onclick="completeTask('${task.title}')"><span class="material-symbols-outlined">done</span></button>
                                <button class="btn btn-danger" id="delete" onclick="deleteTask('${task.title}')"><span class="material-symbols-outlined">delete</span></button>
                            </td>
                        </tr>`;
            });
        }
    }
    document.getElementById("tasks").innerHTML = html;
}

function completeTask(title) {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[userLogin.Email].forEach(task => {
        if (task.title == title) {
            task.status = "Complete";
            task.title = `<del>${task.title}</del>`;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(title) {
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[userLogin.Email] = tasks[userLogin.Email].filter(task => task.title != title);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}