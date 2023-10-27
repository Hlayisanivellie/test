// JavaScript Document
const section1 = document.getElementById("section1");
const textContainer = document.querySelector("#section1 .text-container");
const animatedText = document.querySelector("#section1 .animated-text");

function animateText() {
  let section1Top = section1.getBoundingClientRect().top;
  let section1Bottom = section1.getBoundingClientRect().bottom;

  if (section1Top < window.innerHeight && section1Bottom > 0) {
    let scrollPercent = (window.innerHeight - section1Top) / window.innerHeight;
    animatedText.style.opacity = scrollPercent;
    animatedText.style.transform = `translate(0, ${100 - scrollPercent * 100}%)`;
  }
}

window.addEventListener("scroll", animateText);