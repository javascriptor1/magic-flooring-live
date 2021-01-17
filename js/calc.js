
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
      document.getElementById("area").innerText = "00.00";
      document.getElementById("cost").innerText = "00.00";
    Swal.fire({
      title: 'خطأ! Error',
      text: 'يرجى اختيار نوع الباركيه المطلوب لحساب التكلفة  Please choose flooring type !',
      icon: 'error',
      confirmButtonText: 'OK',
      width: 355
    });
  }

  
  if (selectedFlooring === "china" && ( width >0.5 && length >0.5)){
    chineseCost = areaAfterWastage * 56
    if (chineseCost <1000 ){
      document.getElementById("area").innerText = "00.00";
      document.getElementById("cost").innerText = "00.00";
      Swal.fire({
        title: 'المساحة صغيرة' + "\n" + 'Area is small ',
        text:'تطبق سياسة الحد الأدنى للتركيب  تكلفة التركيب 750 ريال '+  "\n" + 'A minimum charge policy apply. The cost is 1000 SAR ',
        icon: 'info', 
        confirmButtonText: 'OK',
        width: 400
      });

    } else{
      document.getElementById("cost").innerText = Math.round(chineseCost)
    }
   
  }
  if (selectedFlooring === "7mm" && ( width >0.5 && length >0.5)){
    cost7mm = areaAfterWastage * 70
    if (cost7mm < 1000){
      document.getElementById("area").innerText = "00.00"
      document.getElementById("cost").innerText = "00.00"
      Swal.fire({
        title: 'المساحة صغيرة' + "\n" + 'Area is small ',
        text:'تطبق سياسة الحد الأدنى للتركيب  تكلفة التركيب 1000 ريال '+  "\n" + 'A minimum charge policy apply. The cost is 1000 SAR ',
        icon: 'info', 
        confirmButtonText: 'OK',
        width: 400
      });
    } else {
      document.getElementById("cost").innerText = Math.round(cost7mm)
    }
   
  }
  if (selectedFlooring === "8mm" && ( width >0.5 && length >0.5)){
    cost8mm = areaAfterWastage * 75
    if (cost8mm < 1000){
      document.getElementById("area").innerText = "00.00"
      document.getElementById("cost").innerText = "00.00"
      Swal.fire({
        title: 'المساحة صغيرة' + "\n" + 'Area is small ',
        text:'تطبق سياسة الحد الأدنى للتركيب  تكلفة التركيب 1000 ريال '+  "\n" + 'A minimum charge policy apply. The cost is 1000 SAR ',
        icon: 'info', 
        confirmButtonText: 'OK',
        width: 400
      });
    } else {
      document.getElementById("cost").innerText = Math.round(cost8mm)
    }
  }
  if (selectedFlooring === "spc" && ( width >0.5 && length >0.5)){
    spc = areaAfterWastage * 75
    if (spc < 1000){
      document.getElementById("area").innerText = "00.00"
      document.getElementById("cost").innerText = "00.00"
      Swal.fire({
        title: 'المساحة صغيرة' + "\n" + 'Area is small ',
        text:'تطبق سياسة الحد الأدنى للتركيب  تكلفة التركيب 750 ريال '+  "\n" + 'A minimum charge policy apply. The cost is 1000 SAR ',
        icon: 'info', 
        confirmButtonText: 'OK',
        width: 400
      });
    } else {
    document.getElementById("cost").innerText = Math.round(spc)
  }
}
})
