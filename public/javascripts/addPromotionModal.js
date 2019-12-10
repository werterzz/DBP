  // Get the modal
  console.log("hello")

  var addPromotionModal = document.getElementById("promotionModal");
  var buyPromotionModal = document.getElementById("buyPromotionModal")

  var addPromotionBtn = document.getElementById("addPromotionButton");
  var buyPromotionBtn = document.getElementById("buyPromotionButton");
  var closeAddBtn = document.getElementsByClassName("close")[1];
  var closeBuyBtn = document.getElementsByClassName("close")[2];

    addPromotionBtn.onclick = function() {
        console.log('PromotionButton')
    addPromotionModal.style.display = "block";
    }

    buyPromotionBtn.onclick = function() {
       
    buyPromotionModal.style.display = "block";
}

closeAddBtn.onclick = function() {
    addPromotionModal.style.display = "none";
}

closeBuyBtn.onclick = function() {
    buyPromotionModal.style.display = "none";
}




