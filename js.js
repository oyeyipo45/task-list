
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
    //appending the newly created list to the ul

    let img = document.createElement("img");
    img.src="https://res.cloudinary.com/dsipecjov/image/upload/v1582229720/Stutern/topjrvz65ugnomqzrzzo.svg";
    img.width=10;
    img.height=10;
    li.appendChild(img);
    //appending the newly created delete icon to the newly created li
    

    
    let delTask = () => {
        li.remove();
    };
    //function that removes the task

    let del = img;
    del.addEventListener("click", delTask);
    //event listner to listen for the click of the cancel icon


};
// creating function to add new task
// deleting the tasks too


function addListAfterClick() {
    if (inputLength() > 0 ) {
    createNewListElement()
    }
};
// add task to list after click

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.keyCode === 13 ){
        createNewListElement()
    }
};
//add task after keypress
let KeyPressEvent = input.addEventListener("keypress", addListAfterKeyPress); 

    
//onclick event
let ClickPressEvent = button.addEventListener("click", addListAfterClick);


























// get => {
    
// document.getElementByClassName("lists").style.backgroundcolor="red";
// }


// function resetEvent() {
    
//      return  document.getElementById("hello").removeChild.document.getElementById("delete-1");
//     console.log("click");
// };

// let deleteTask = document.getElementById("delete-2");
// deleteTask.addEventListener("click", resetEvent);
