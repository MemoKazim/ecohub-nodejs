var responsiveSlider = function (slider, slideList) {
  var sliderWidth = slider.offsetWidth;
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  // next.addEventListener("click", function() {
  //   nextSlide();
  // });

  // prev.addEventListener("click", function() {
  //   prevSlide();
  // });

  setInterval(function () {
    nextSlide();
  }, 3000);
};

window.onload = function () {
  for (
    var i = 0;
    i <= document.querySelectorAll(".slider-of-projects").length - 1;
    i++
  ) {
    responsiveSlider(
      document.querySelectorAll(".slider-of-projects")[i],
      document.querySelectorAll(".slideWrap-of-projects")[i]
    );
  }
};
