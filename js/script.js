/* =========================== toggle from navbar =================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== scroll sectioms active link =================== */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* =========================== sticky navbar =================== */

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*============= remove toggle icon and navbar when click navbar link (scroll) */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* =========================== scroll reveal =================== */

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* =========================== typed js =================== */

const typed = new Typed(".multiple-text", {
  strings: [
    "Cybersecurity Expert",
    "OSINT Nerd",
    "Threat Hunter",
    "Trainer",
    "Threat Intelligence Analyst",
    "Writer and Speaker",
    "Mentor",
  ],
  typedSpeed: 100,
  backSpeed: 200,
  backDelay: 300,
  loop: true,
});

// function toggleParagraphs() {
//   var hiddenParagraphs = document.getElementsByClassName("hidden-paragraph");
//   for (var i = 0; i < hiddenParagraphs.length; i++) {
//     if (hiddenParagraphs[i].style.display === "none") {
//       hiddenParagraphs[i].style.display = "block";
//     } else {
//       hiddenParagraphs[i].style.display = "none";
//     }
//   }
// }

var hiddenParagraphs = document.getElementsByClassName("hidden-paragraph");
var btn = document.querySelector(".btn2");
var isHidden = true;

function toggleParagraphs() {
  isHidden = !isHidden;

  for (var i = 0; i < hiddenParagraphs.length; i++) {
    hiddenParagraphs[i].style.display = isHidden ? "none" : "block";
  }

  btn.textContent = isHidden ? "Read More" : "Read Less";
}

var hiddenParagraphs3 = document.getElementsByClassName("hidden-paragraph3");
var btn3 = document.querySelector(".btn3");
var isHidden3 = true;

function toggleParagraphs3() {
  isHidden3 = !isHidden3;

  for (var i = 0; i < hiddenParagraphs3.length; i++) {
    hiddenParagraphs3[i].style.display = isHidden3 ? "none" : "block";
  }

  btn3.textContent = isHidden3 ? "Read More" : "Read Less";
}

var hiddenParagraphs4 = document.getElementsByClassName("hidden-paragraph4");
var btn4 = document.querySelector(".btn4");
var isHidden4 = true;

function toggleParagraphs4() {
  isHidden4 = !isHidden4;

  for (var i = 0; i < hiddenParagraphs4.length; i++) {
    hiddenParagraphs4[i].style.display = isHidden4 ? "none" : "block";
  }

  btn4.textContent = isHidden4 ? "Read More" : "Read Less";
}

// Get the "Download CV" link by its id
const downloadCvLink = document.getElementById("download-cv");

// Add a click event listener to the link
downloadCvLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Construct the relative path to the CV file
  const cvFileName = "CV.pdf";
  const cvFilePath = "./" + cvFileName;

  // Open a new tab with the CV download link
  window.open(cvFilePath, "_blank");
});
