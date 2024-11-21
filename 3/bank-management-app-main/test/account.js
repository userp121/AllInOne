


function submitInput(e) {
e.preventDefault();
const name = document.querySelector("#name").value
const password = document.querySelector("#password").value

console.log("lolo")
console.log(name, password)
}

const form = document.querySelector("#form")

form.addEventListener("submit", submitInput)