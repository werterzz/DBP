  // Get the modal
  console.log("hello")

  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var delEmpMod = document.getElementById("delEmpMod");
  var addPromotionModal = document.getElementById("promotionModal");


  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var delEmpBtn = document.getElementById("delEmpBtn");
  var addPromotionBtn = document.getElementById("addPromotionButton");

  // Get the <span> element that closes the modal

  var spanEAdd = document.getElementsByClassName("close")[1];
  var spanEDel = document.getElementsByClassName("close")[2];


  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

    addPromotionBtn.onclick = function() {
        console.log('PromotionButton')
    addPromotionModal.style.display = "block";
}

  delEmpBtn.onclick = function() {
      delEmpMod.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  spanEAdd.onclick = function() {
      modal.style.display = "none";
  }


  spanEDel.onclick = function() {
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
      if (event.target == loginMod) {
          loginMod.style.display = "none";
      }
  }



  var canDel = document.getElementById("canDel");

  canDel.onclick = function(event) {
      delEmpMod.style.display = "none";
  }


updateEmp.onclick = function(event) {
    modal2.style.display = "block";
}


  updateEmp.onclick = function(event) {
      modal.style.display = "block";
  }

