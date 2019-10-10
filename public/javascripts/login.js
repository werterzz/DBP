var loginMod = document.getElementById("loginMod");
var logBtn = document.getElementById("logBtn");

var spanLog = document.getElementsByClassName("close")[0];


logBtn.onclick = function () {
    loginMod.style.display = "block";
}

spanLog.onclick = function () {
    loginMod.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == loginMod) {
        loginMod.style.display = "none";
    }
}