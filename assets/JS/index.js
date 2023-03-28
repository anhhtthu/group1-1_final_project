// hero set up
let slideIndex = 1;
let imgLists = document.querySelectorAll(".itemSlides");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  let lists = document.querySelectorAll(".itemSlides");
  if (n > 0) {
    document.getElementById("slide").appendChild(lists[0]);
  } else {
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  }
}

function currentDot(m) {
  let prevDots = slideIndex - m;
  for (i = 0; i < prevDots; i++) {
    document.getElementById("autoPrev").click();
  }
  let nextDots = m - slideIndex;
  for (i = 0; i < nextDots; i++) {
    document.getElementById("autoNext").click();
  }
}

function showSlides(n) {
  let i;
  let dots = document.querySelectorAll(".dot");
  if (n > imgLists.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgLists.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
}

function auto() {
  document.getElementById("autoNext").click();
}
setInterval(auto, 3000);

// touch drag
function posX(event) {
  c = 0;
  var x = event.touches[0].clientX;
  c = x;
  setTimeout(function () {
    if (d > c) {
      document.getElementById("autoPrev").click();
    } else {
      document.getElementById("autoNext").click();
    }
  }, 250);
}

function posY(event) {
  d = 0;
  var a = event.touches[0].clientX;
  d = a;
}
// mouse drag
function posX1(event) {
  c = 0;
  var x = event.clientX;
  c = x;
  setTimeout(function () {
    if (d > c) {
      document.getElementById("autoPrev").click();
    } else {
      document.getElementById("autoNext").click();
    }
  }, 250);
}

function posY1(event) {
  d = 0;
  var a = event.clientX;
  d = a;
}

// swiper set up
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlides: false,
  fade: true,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    780: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    945: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});

// change layout product section
var swiperClass = document.getElementById("swiperClass").classList;
var swiperWrapperClass =
  document.getElementById("swiperWrapperClass").classList;
var buttonNext = document.getElementById("buttonNext").classList;
var buttonPrev = document.getElementById("buttonPrev").classList;
var pagination = document.getElementById("pagination").classList;
var minWidth1370 = window.matchMedia("(max-width: 1199px");

function match() {
  minWidth1370.matches
    ? swiperClass.add("swiper")
    : swiperClass.remove("swiper");
  minWidth1370.matches
    ? swiperClass.add("mySwiper")
    : swiperClass.remove("mySwiper");
  minWidth1370.matches
    ? swiperWrapperClass.add("swiper-wrapper")
    : swiperWrapperClass.remove("swiper-wrapper");
  minWidth1370.matches
    ? buttonNext.add("swiper-button-next")
    : buttonNext.remove("swiper-button-next");
  minWidth1370.matches
    ? buttonPrev.add("swiper-button-prev")
    : buttonPrev.remove("swiper-button-prev");
  minWidth1370.matches
    ? pagination.add("swiper-pagination")
    : pagination.remove("swiper-pagination");
  minWidth1370.matches;
}

minWidth1370.addListener(match);
match();

// pop up review
const imgContent = document.querySelectorAll(".img-content");
console.log(imgContent);
function showingContent(e) {
  for (let i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform =
      transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showingContent);

//Tips

$(document).ready(function () {
  $(".tipSlides").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'</i></button>",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        },
      },
    ],
  });
});

// BEAUTY_ROOMS
let slideIndexr = 1;
let roomLists = document.querySelectorAll(".roomSlides");
showroomSlides(slideIndexr);

function plusRoom(n) {
  showroomSlides((slideIndexr += n));
  let lists = document.querySelectorAll(".roomSlides");
  if (n > 0) {
    document.getElementById("slid").appendChild(lists[0]);
  } else {
    document.getElementById("slid").prepend(lists[lists.length - 1]);
  }
}

function showroomSlides(n) {
  let i;
  let dotrs = document.querySelectorAll(".roomDot");
  if (n > roomLists.length) {
    slideIndexr = 1;
  }
  if (n < 1) {
    slideIndexr = roomLists.length;
  }
  for (i = 0; i < dotrs.length; i++) {
    dotrs[i].className = dotrs[i].className.replace(" activeR", "");
  }
  dotrs[slideIndexr - 1].className += " activeR";
}
// touch drag
function posX3(event) {
  c = 0;
  var x = event.touches[0].clientX;
  c = x;
  setTimeout(function () {
    if (d > c) {
      document.getElementById("autoPrevr").click();
    } else {
      document.getElementById("autoNextr").click();
    }
  }, 250);
}

function posY3(event) {
  d = 0;
  var a = event.touches[0].clientX;
  d = a;
}
// mouse drag
function posX2(event) {
  c = 0;
  var x = event.clientX;
  c = x;
  setTimeout(function () {
    if (d > c) {
      document.getElementById("autoPrevr").click();
    } else {
      document.getElementById("autoNextr").click();
    }
  }, 250);
}

function posY2(event) {
  d = 0;
  var a = event.clientX;
  d = a;
}

function auto2() {
  document.getElementById("autoNextr").click();
}
setInterval(auto2, 3000);
// Get the button PushOnTop
let btnOnTop = document.getElementById("btnOnTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnOnTop.style.display = "block";
  } else {
    btnOnTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
