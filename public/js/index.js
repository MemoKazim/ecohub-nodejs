// SLIDER SECTION
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

//ABOUT-US VIDEO
var video = document.getElementsByClassName("about-vid")[0];
function Fullscreen() {
  video.requestFullscreen();
}

//TINY SLIDER
var sliderMain = document.getElementById("slider-main");
var item = sliderMain.getElementsByClassName("item");
function next() {
  sliderMain.append(item[0]);
}
function prev() {
  sliderMain.prepend(item[item.length - 1]);
}
