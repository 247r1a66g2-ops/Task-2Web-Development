const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === "") {

        formMessage.innerHTML = "Please fill all fields.";

        formMessage.style.color = "red";

    }

    else {

        formMessage.innerHTML = "Form submitted successfully!";

        formMessage.style.color = "green";

    }

});

/* To-Do List Function */

function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskList = document.getElementById("taskList");

    if(taskInput.value === "") {

        alert("Please enter a task.");

    }

    else {

        let li = document.createElement("li");

        li.textContent = taskInput.value;

        taskList.appendChild(li);

        taskInput.value = "";

    }

}