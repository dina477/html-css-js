function HoverButton() {
    document.getElementById("butt").style.backgroundColor = "#080";
}

function Hover() {
    document.getElementById("butt").style.backgroundColor = "#00BCBA";
}
function Show() {
    document.getElementById("click").style.visibility = "visible";
}
function hide() {
    document.getElementById("click").style.visibility = "hidden";
}

var n = 0;
function Hovered() {
    n = n + 1;
    document.getElementById("img1").innerHTML = n;
}
function Color() {
    document.getElementById("color").style.color = " #f50";
    document.getElementById("color").style.textDecoration = "underline";
}
function Valid() {
    var n = prompt("Name....");
    if (n == "dina") {
        window.location = "index.html"
    }
    else {
        alert("wrong Name...Try Again");
    }
}