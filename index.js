let countEl = document.getElementById("count-el");
let previousEl = document.getElementById("previous-el");

let count = 0;

function increment(){
     count+=1
     countEl.textContent = count;
}

function save(){
     let previousStr = count + " - ";
     previousEl.textContent += previousStr;
     count = 0 ;
     countEl.textContent = count; 
    
}