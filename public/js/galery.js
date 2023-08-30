const imgs = document.querySelectorAll(".galery-slide img");
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    openFullscreen(img);
  });
});

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

var responsiveSlider = () => {
  var slider = document.getElementById("eco-slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slide-wrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementsByClassName("eco-prev")[0];
  var next = document.getElementsByClassName("eco-next")[0];
  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

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

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

window.onload = function () {
  responsiveSlider();
};
