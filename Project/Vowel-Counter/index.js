let textarea = document.getElementById("text");
let button = document.getElementById("btn");
let word = document.getElementById("word");

function vowelcount() {
    let val = textarea.value;
    let count = 0;

    for (let i = 0; i < val.length; i++) {
        if(val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u'){
            count++;
        } else{
            count;
        }   
        word.innerText = count;
    }
}