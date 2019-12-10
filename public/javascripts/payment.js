var PayModal = document.getElementById("PayModal");
var PayBtn = document.getElementById("PayBtn");

var spanLog = document.getElementsByClassName("close")[4];

PayBtn.onclick = function() {
    PayModal.style.display = "block";
}

spanLog.onclick = function() {
    PayModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == PayModal) {
        PayModal.style.display = "none";
    }
}