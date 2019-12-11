var loginMod = document.getElementById("loginMod");
var logBtn = document.getElementById("logBtn");
var menuMod = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");

var spanLog = document.getElementsByClassName("close")[0];


menuBtn.onclick = function() {
    if (menuMod.style.display == "none") {
        menuMod.style.display = "block";
    } else {
        menuMod.style.display = "none";
    }
}

logBtn.onclick = function() {
    loginMod.style.display = "block";
}

spanLog.onclick = function() {
    loginMod.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginMod) {
        loginMod.style.display = "none";
    }
    if (event.target == menuMod) {
        menuMod.style.display = "none";
    }
}