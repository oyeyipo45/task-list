
let button = document.getElementsByTagName("button")[0];
//declaring my button....used index because document.getElementsByTagName gives you an array.
let input = document.getElementById('input');
//getting my input
let ul = document.querySelector("ul");
//getting the main to append other tasks to


function inputLength() {
    return input.value.length
}
// checking the length of the input value

function createNewListElement( ) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
// creating function to add new task


function addListAfterClick() {
    if (inputLength() > 0 ) {
    createNewListElement();
    }
}
// add task to list after click

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.keyCode === 13 ){
        createNewListElement()
    }
}
//add task after keypress

button.addEventListener("click", addListAfterClick);
    

input.addEventListener("keypress", addListAfterKeyPress); 



