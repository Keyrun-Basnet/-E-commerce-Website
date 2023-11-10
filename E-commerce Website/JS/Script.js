// form validation
function validateForm() {
  var firstName = document.forms["messageForm"]["fname"].value;
  var lastName = document.forms["messageForm"]["lname"].value;
  var email = document.forms["messageForm"]["email"].value;
  var messageDetails = document.forms["messageForm"]["message"].value;

  //alert(messageDetails);
  if (firstName == "" || lastName == "" || messageDetails == "") 
  {
    alert("Fill the Form properly.");
  }
  else
  {
    alert("Thank you.")
  }
}


// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  slides[slideIndex-1].style.display = "block";  
}


