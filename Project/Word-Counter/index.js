let textarea = document.getElementById("text");
let counterbutton = document.getElementById("btn");
let wordcounts = document.getElementById("word");

function wordcount(){
    let text = textarea.value;
    let splitwords = text.trim().split(" ");
    wordcounts.innerText = splitwords.length ;
}