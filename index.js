let count = 0;

let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.textContent = count;
}

let saveCount = "";
function save() {
    saveEl.textContent += count + " -  ";
    console.log(count);
    count = 0;
    countEl.textContent = count;
}


