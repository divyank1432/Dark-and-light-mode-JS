let body = document.getElementById("body");
let toggleSwitch = document.getElementById("toggle-switch");
let toggleContainer = document.getElementById("toggle-container");

toggleContainer.addEventListener("click", (e)=>{
    body.classList.toggle("dark-mode")
    toggleSwitch.classList.toggle("dark-mode-position") 
})