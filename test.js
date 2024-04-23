var m = document.getElementById("btn")
var body = document.querySelector("body")
var section = document.querySelector("section")
a = 0

m.addEventListener("click", function () {


    if (a == 0) {

        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        m.style.backgroundColor = "#000";
        m.style.color = "#fff";
        m.style.border = "3px solid white";
        section.style.backgroundColor = "rgb(14, 14, 41)";
        section.style.border = "10px solid rgb(211, 247, 247)";
        m.innerHTML = "Light mode";
        a = 1

    }
    else {
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        m.style.backgroundColor = "#fff";
        m.style.color = "#000";
        m.style.border = "3px solid #000";
        section.style.backgroundColor = "rgb(211, 247, 247)";
        section.style.border = "10px solid rgb(14, 14, 41)";
        m.innerHTML = "Dark mode";
        m.style.fontWeight = "500";
        a = 0

    };
});