const inputElement = document.getElementById('password')
const generateBtn = document.getElementById('generateBtn')
const copyBtn = document.getElementById('copyBtn')
const listContainer = document.getElementById('list-container')
const liElements = listContainer.getElementsByTagName('li');

function toggleChecked(li) {
    const isChecked = li.getAttribute('data-checked') === 'true';
    li.setAttribute('data-checked', !isChecked);
    if (!isChecked) {
        li.classList.add('checked');
    } else {
        li.classList.remove('checked');
    }
}

generateBtn.addEventListener('click', ()=>{
    let randomPasswordLength = Math.floor(Math.random()*10)+10
    let uppercaseEl = document.getElementById('uppercase')
    let numberEl = document.getElementById('number')
    let symbolEl = document.getElementById('Symbols')

    const isUppercase = uppercaseEl.getAttribute('data-checked') === 'true';
    const isSymbol = symbolEl.getAttribute('data-checked') === 'true';
    const isNumber = numberEl.getAttribute('data-checked') === 'true';

    // inputElement.innerHTML = ""
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = isUppercase? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
    const number = isNumber ? "0123456789": ""
    const symbols = isSymbol ? "`~!@#$%^&*()-_=+" : ""

    const passwordChar = lowercase + uppercase + number + symbols
    let passlength = passwordChar.length;
    let password = ""

    for (let i = 0; i < randomPasswordLength; i++) {
        const randomIndex = Math.floor(Math.random()*passlength)
        // console.log(randomIndex);
        password += passwordChar[randomIndex]
    }

    inputElement.value = password;
})

copyBtn.addEventListener('click',() => {
    

    if(inputElement.value === ""){
        alert("Please Generate Password First");
    }
    else{
        navigator.clipboard.writeText(inputElement.value);
    }
    inputElement.select();
})