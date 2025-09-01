let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    let itm = document.createElement("li");
    itm.innerText = inp.value;
    let del = document.createElement("button");


    del.innerText = " done ";
    del.classList.add("delete");

    itm.appendChild(del);
    ul.appendChild(itm);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});