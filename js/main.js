    // let loader = document.getElementById("loader");
    //   window.onload = function() {
    //   loader.style.display = 'none';
    // }
$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});


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
    let spc

    if (selectedFlooring === "defualt"){
      Swal.fire({
        title: 'خطأ!',
        text: 'يرجى اختيار نوع الباركيه المطلوب لحساب التكلفة !',
        icon: 'error',
        confirmButtonText: 'OK',
        width: 355
      });
    }

    
    if (selectedFlooring === "china" && ( width >0.5 && length >0.5)){
      chineseCost = areaAfterWastage * 55
      if (chineseCost <750 ){
        document.getElementById("area").innerText = "00.00";
        document.getElementById("cost").innerText = "00.00";
        Swal.fire({
          title: 'المساحة صغيرة!',
          text: 'تطبق سياسة الحد الأدنى للتركيب - تكلفة التركيب 750 ريال !',
          icon: 'info',
          confirmButtonText: 'OK',
          width: 355
        });

      } else{
        document.getElementById("cost").innerText = Math.round(chineseCost)
      }
     
    }
    if (selectedFlooring === "7mm" && ( width >0.5 && length >0.5)){
      cost7mm = areaAfterWastage * 60
      if (cost7mm < 750){
        document.getElementById("area").innerText = "00.00"
        document.getElementById("cost").innerText = "00.00"
        Swal.fire({
          title: 'المساحة صغيرة!',
          text: 'تطبق سياسة الحد الأدنى للتركيب - تكلفة التركيب 750 ريال !',
          icon: 'info',
          confirmButtonText: 'OK',
          width: 355
        });
      } else {
        document.getElementById("cost").innerText = Math.round(cost7mm)
      }
     
    }
    if (selectedFlooring === "8mm" && ( width >0.5 && length >0.5)){
      cost8mm = areaAfterWastage * 65
      if (cost8mm < 750){
        document.getElementById("area").innerText = "00.00"
        document.getElementById("cost").innerText = "00.00"
        Swal.fire({
          title: 'المساحة صغيرة!',
          text: 'تطبق سياسة الحد الأدنى للتركيب - تكلفة التركيب 750 ريال !',
          icon: 'info',
          confirmButtonText: 'OK',
          width: 355
        });
      } else {
        document.getElementById("cost").innerText = Math.round(cost8mm)
      }
    }
    if (selectedFlooring === "spc" && ( width >0.5 && length >0.5)){
      spc = areaAfterWastage * 100
      if (spc < 750){
        document.getElementById("area").innerText = "00.00"
        document.getElementById("cost").innerText = "00.00"
        Swal.fire({
          title: 'المساحة صغيرة!',
          text: 'تطبق سياسة الحد الأدنى للتركيب - تكلفة التركيب 750 ريال !',
          icon: 'info',
          confirmButtonText: 'OK',
          width: 355
        });
      } else {
      document.getElementById("cost").innerText = Math.round(spc)
    }
  }
})

  // DISABLE SCROLL IN INPUT FIELDS TYPED NUMBER
    var inputTypeNumbers = document.querySelectorAll("input[type=number]");
      for (var a = 0; a < inputTypeNumbers.length; a++) {
      inputTypeNumbers[a].onwheel = function (event) {
      event.target.blur();
      };
    }
  

