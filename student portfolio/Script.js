function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function completeTask(button){

    button.parentElement.style.textDecoration = "line-through";

}

function deleteTask(button){

    button.parentElement.remove();

}

function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || phone === "" || message === ""){
        alert("All fields are required.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]+$/;

    if(!phone.match(phonePattern)){
        alert("Phone number must contain digits only.");
        return false;
    }

    alert("Form submitted successfully!");

    return true;
}