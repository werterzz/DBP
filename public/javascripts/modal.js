  // Get the modal
  var modal = document.getElementById("myModal");
  var delEmpMod = document.getElementById("delEmpMod");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var delEmpBtn = document.getElementById("delEmpBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  delEmpBtn.onclick = function() {
    delEmpMod.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  span2.onclick = function() {
    delEmpMod.style.display = "none";
  }  
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == delEmpMod) {
        delEmpMod.style.display = "none";
      }    
  }


var canDel = document.getElementById("canDel");

canDel.onclick = function(event) {
    delEmpMod.style.display = "none";
}

var updateEmp = document.getElementById("updateEmp");

updateEmp.onclick = function(event) {
    modal.style.display = "block";
}