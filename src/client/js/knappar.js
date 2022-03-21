let om = document.querySelector("#om");
let portfolio = document.querySelector("#portfolio")
let knapp1 = document.querySelector("#knapp-1");
let knapp2 = document.querySelector("#knapp-2");

function show_hide() {
    if (om.style.display === "none") {
        om.style.display = "block";
        portfolio.style.display = "none";
        knapp1.style.backgroundColor = "black";
        knapp1.style.color = "white";
        knapp2.style.backgroundColor = "white";
        knapp2.style.color = "black";
    } else {
        om.style.display = "none";
        portfolio.style.display = "grid";
        knapp1.style.backgroundColor = "white";
        knapp1.style.color = "black";
        knapp2.style.backgroundColor = "black";
        knapp2.style.color = "white";
    }
}

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 762px)").matches) {
        om.style.display = "block";
        portfolio.style.display = "grid";
    } else {
        om.style.display = "none";
        portfolio.style.display = "grid";
        knapp1.style.backgroundColor = "white";
        knapp1.style.color = "black";
        knapp2.style.backgroundColor = "black";
        knapp2.style.color = "white";
    }
})