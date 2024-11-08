const input = document.getElementById("prompt")
const submit = document.getElementById("submit-button")
const chatSection = document.getElementById("chat-section")

function click(){
    const value = input.value
    const div = document.createElement("div")
    div.textContent = value;
    chatSection.appendChild(div)
    input.value='';
}
function keypress(e){
    console.log(e.key);
    if(e.key === "Enter") submit.click();
}
submit.onclick = click
input.onkeypress = keypress;
input.addEventListener("keypress",)
