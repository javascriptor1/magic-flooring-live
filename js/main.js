

    let loader = document.getElementById("loader");
      window.onload = function() {
      loader.style.display = 'none';
    }
 

$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Calcuation for area/cost
// get the button
  myCalcButton = document.getElementById("btn-calc");
  myCalcButton.addEventListener('click', function(){

  let length = document.getElementById("room-length").value
  let width = document.getElementById("room-width").value
  let areaTotal = length*width
  let wastage = areaTotal * 0.05
  let fixArea = areaTotal.toFixed(2)
  let areaAfterWastage = parseFloat(fixArea) + parseFloat(wastage)
  if (length <1 || width <1){
    document.querySelector(".error").style.display = "block"
    setTimeout(function(){
      document.querySelector(".error").style.display = "none"
    },3000)
    document.getElementById("room-length").value = ""
    document.getElementById("room-width").value = ""
    document.getElementById("area").innerText = "00.00"
    document.getElementById("cost").innerText = "00.00"
  } else {
    document.getElementById("area").innerText = areaAfterWastage 
  }

  // calculation for cost based on flooring selected.

    let flooring = document.getElementById("flooring");
    let selectedFlooring = flooring.options[flooring.selectedIndex].value;
    let chineseCost
    let cost7mm
    let cost8mm

    if (selectedFlooring === "defualt"){
      alert (" يرجى اختيار نوعية الباركيه لحساب السعر")
    }

    
    if (selectedFlooring === "china" && ( width >0.5 && length >0.5)){
      chineseCost = areaAfterWastage * 55
      document.getElementById("cost").innerText = Math.round(chineseCost)
    }
    if (selectedFlooring === "7mm" && ( width >0.5 && length >0.5)){
      cost7mm = areaAfterWastage * 60
      document.getElementById("cost").innerText = Math.round(cost7mm)
    }
    if (selectedFlooring === "8mm" && ( width >0.5 && length >0.5)){
      cost8mm = areaAfterWastage * 65
      document.getElementById("cost").innerText = Math.round(cost8mm)
    }
})

