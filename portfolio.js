//open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays first image in slideshow on page load
var slideIndex = 1;
showSlides(slideIndex);

//changes slide when left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //takes all elements wikh class name "mySlides" and stores them in the array "slides"
    var dots = document.getElementsByClassName("dot"); //takes all elements with class name "dot" and stores them in array "dots"
    if (n > slides.length) {slideIndex = 1}; //if n (the number passed to the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n is less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //this for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //this for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //this displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //adds active styling to the dot associated with the image
}

//this code will close the contact form when the user clicks off of it
//first we add an event listener for any clicks on the site
document.addEventListener("click",  function(event){
    //if the click happens on the cancel button or anywhere that is not the contact form and it does not happen on any contact class elements, call closeForm()
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )