let belanja = []
// Create a "close" button and append it to each list item


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {

    let inputValue = document.getElementById("myInput").value;

    if (inputValue === '') {
        alert("You must write something!");
    } else {

        document.getElementById("myUL").innerHTML += `<li>${inputValue}</li>`
        belanja.push(inputValue) // ada error cannot read push of null. disini belanja belum dibuat jadi error saat mau di push
        localStorage.setItem("belanja", JSON.stringify(belanja))
    }

    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
function read() {

    let hasilread = JSON.parse(localStorage.getItem("belanja"))
    document.getElementById("myUL").innerHTML = hasilread
    belanja = hasilread
}
read()
function hapus() {
    localStorage.removeItem("belanja")
    document.getElementById("myUL").innerHTML = ""
}

function update() {
    const hasils = getElementsByClassName("hasil")
    for (const hasil of hasils) {
        const header = document.createElement("h2")
        header.innerText = "hello?"

        hasil.appendChild(header)
    }
}