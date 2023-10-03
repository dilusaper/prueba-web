fetch('header.html')
    .then(response => response.text())
    .then(data => document.querySelector('header').innerHTML = data);
    
fetch('footer.html')
   .then(response => response.text())
   .then(data => document.querySelector('footer').innerHTML = data);

//Products
fetch('prueba.html')
   .then(response => response.text())
   .then(data => document.querySelector('a#11003200039300123929').innerHTML = data);
// Thumbnail image controls
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  var slideIndex = 1; 
  showSlides(slideIndex);
  
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

//Contact
function openElement(evt, seleccionado) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(seleccionado).style.display = "block";
    evt.currentTarget.className += " active";
  }