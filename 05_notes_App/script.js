const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll('.input-box');

showNotes();

function saveData(){
    console.log("Hello save");
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes(){
    console.log("Hello show");

    notesContainer.innerHTML = localStorage.getItem("notes");
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png"
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox)
    saveData();
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveData();
            }
        })
    }
})


// tricky (can crate problem if we enter and write in new line it can create problem without this)
document.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})