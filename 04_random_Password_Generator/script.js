const inputElement = document.getElementById('password')
const generateBtn = document.getElementById('generateBtn')
const copyBtn = document.getElementById('copyBtn')
// let passwordLength = 10;
generateBtn.addEventListener('click', ()=>{
    let randomPasswordLength = Math.floor(Math.random()*10)+10

    // inputElement.innerHTML = ""
    const pass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#%^&*()-_+=;~`1234567890'
    let passlength = pass.length;
    let password = '';

    for (let i = 0; i < randomPasswordLength; i++) {
        const randomIndex = Math.floor(Math.random()*passlength)
        // console.log(randomIndex);
        password += pass[randomIndex]
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
    // alert("Password Copied")
})