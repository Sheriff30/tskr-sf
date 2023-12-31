const navbtn = document.querySelector(".nav-mobile");
const menu = document.querySelector(".nav-mobile-menu");
const cross = document.querySelector(".cross");
const registerOverlay = document.querySelector(".pre-register-pop-overlay");
const btn2 = document.querySelector(".btn2");
const tskrBtn = document.querySelector(".cross-tskr");
const tskrnav = document.querySelectorAll(".tskrnav");
const aboutSection = document.querySelector(".about-tskr");
const usThemNav = document.querySelectorAll(".usThemNav");
const usThemSection = document.querySelector(".usThem");
const crossUsThemS = document.querySelector(".cross-usThem");
const crossRoomSection = document.querySelector(".cross-newsRoomSection");
const newsRoomNavBtn = document.querySelectorAll(".newsRoomNav");
const newsRoom = document.querySelector(".newsRoom");
const responsivetskr = document.querySelector(".cross-responsive-tskr");

const faqsSection = document.querySelector(".faqs");
const crossFaqsSection = document.querySelector(".cross-faqsSection");
const faqNav = document.querySelectorAll(".faqNav");
const responsiveusThemBtn = document.querySelector(".cross-responsive-usThem");
const crossNewsRoomSectionResponsive = document.querySelector(
  ".cross-newsRoomSection-responsive"
);

const faqResCross = document.querySelector(".crossFaqResponsive");

navbtn.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

///////////////////////////////////////////

btn2.addEventListener("click", () => {
  registerOverlay.classList.remove("hide");
});

cross.addEventListener("click", () => {
  registerOverlay.classList.add("hide");
});

tskrnav.forEach((e) => {
  e.addEventListener("click", () => {
    aboutSection.classList.remove("hide");
  });
});

tskrBtn.addEventListener("click", () => {
  aboutSection.classList.add("hide");
});

responsivetskr.addEventListener("click", () => {
  aboutSection.classList.add("hide");
});
//////////////////////////////////////////

usThemNav.forEach((e) => {
  e.addEventListener("click", () => {
    usThemSection.classList.remove("hide");
  });
});

crossUsThemS.addEventListener("click", () => {
  usThemSection.classList.add("hide");
});

responsiveusThemBtn.addEventListener("click", () => {
  usThemSection.classList.add("hide");
});
// //////////////////////////////////////////////////

newsRoomNavBtn.forEach((e) => {
  e.addEventListener("click", () => {
    newsRoom.classList.remove("hide");
  });
});

crossRoomSection.addEventListener("click", () => {
  newsRoom.classList.add("hide");
});

crossNewsRoomSectionResponsive.addEventListener("click", () => {
  newsRoom.classList.add("hide");
});
///////////////////////////////////////////

faqNav.forEach((e) => {
  e.addEventListener("click", () => {
    faqsSection.classList.remove("hide");
  });
});

crossFaqsSection.addEventListener("click", () => {
  faqsSection.classList.add("hide");
});
faqResCross.addEventListener("click", () => {
  faqsSection.classList.add("hide");
});

const mobBtns = document.querySelectorAll(".mob-nav");

mobBtns.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.add("hide");
  });
});

const Qsection = document.querySelectorAll(".Q-section");
const showIcon = document.querySelector(".show-q-icon");

Qsection.forEach((q) => {
  q.addEventListener("click", function (e) {
    this.classList.toggle("active");

    this.classList.contains("active")
      ? (document.querySelector(`.show-q-icon-${this.dataset.icon}`).src =
          "min.svg")
      : (document.querySelector(`.show-q-icon-${this.dataset.icon}`).src =
          "plus.svg");
  });
});

const faqHead = document.querySelectorAll(".faq-head");

const for2 = document.querySelector(".for");

for2.addEventListener("click", function (e) {
  if (e.target.dataset.head === "1") {
    e.target.classList.add("activeH");
    document.querySelectorAll('[data-head="2"]')[0].classList.remove("activeH");
    document.querySelectorAll('[data-head="3"]')[0].classList.remove("activeH");
  }
  if (e.target.dataset.head === "2") {
    e.target.classList.add("activeH");
    document.querySelectorAll('[data-head="1"]')[0].classList.remove("activeH");
    document.querySelectorAll('[data-head="3"]')[0].classList.remove("activeH");
  }
  if (e.target.dataset.head === "3") {
    e.target.classList.add("activeH");
    document.querySelectorAll('[data-head="2"]')[0].classList.remove("activeH");
    document.querySelectorAll('[data-head="1"]')[0].classList.remove("activeH");
  }
});
