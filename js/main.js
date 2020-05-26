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

  // DISABLE SCROLL IN INPUT FIELDS TYPED NUMBER
    var inputTypeNumbers = document.querySelectorAll("input[type=number]");
      for (var a = 0; a < inputTypeNumbers.length; a++) {
      inputTypeNumbers[a].onwheel = function (event) {
      event.target.blur();
      };
    }
  

