var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("header").style.padding = "5px 5px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("header").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
document.getElementById("scrollButton").addEventListener("click", function() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });
});

document.getElementById("scrollButtonnn").addEventListener("click", function() {
  window.scrollTo({
    top: 5000,
    behavior: "smooth"
  });
});

document.getElementById("scrollButtonn").addEventListener("click", function() {
  window.scrollTo({
    top: 7000,
    behavior: "smooth"
  });
});
