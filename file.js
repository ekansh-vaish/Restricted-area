function inputtext()
{
let textarea = document.getElementById("feedback");
let maxLength = textarea.maxlength;
let currentlength = textarea.value.length;
if(currentlength === maxLength)
{
textarea.classList.add(".color");
}
else{
textarea.classList.remove(".color");
}
}

