  // Get the modal
  var AddModal = document.getElementById("AddModal");
  var DelModal = document.getElementById("DelModal");
  var UpdateModal = document.getElementById("UpdateModal");

  // Get the button that opens the modal
  var AddBtn = document.getElementById("AddBtn");
  var DelBtn = document.getElementById("DelBtn");
  var UpdateBtn = document.getElementById("UpdateBtn");

  // Get the <span> element that closes the modal
  var spanAdd = document.getElementsByClassName("close")[1];
  var spanDel = document.getElementsByClassName("close")[3];
  var spanUpdate = document.getElementsByClassName("close")[2];

  // When the user clicks the button, open the modal 
  AddBtn.onclick = function() {
      AddModal.style.display = "block";
  }

  DelBtn.onclick = function() {
      DelModal.style.display = "block";
  }

  UpdateBtn.onclick = function() {
      UpdateModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  spanAdd.onclick = function() {
      AddModal.style.display = "none";
  }

  spanDel.onclick = function() {
      DelModal.style.display = "none";
  }

  spanUpdate.onclick = function() {
      UpdateModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == AddModal) {
          AddModal.style.display = "none";
      }
      if (event.target == DelModal) {
          DelModal.style.display = "none";
      }
      if (event.target == UpdateModal) {
          UpdateModal.style.display = "none";
      }
  }

  var canDel = document.getElementById("canDel");

  canDel.onclick = function() {
      DelModal.style.display = "none";
  }
