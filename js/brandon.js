// const intro101 = document.querySelector(".planet-video-section");
// const video202 = document.querySelector(".planet-vid");
// //const section = document.querySelector(".planet-video-section");
// //SCROLLMAGIC
// const controller505505 = new ScrollMagic.Controller();

// //Scenes
// let scene505101 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro101,
//   triggerHook: 0
// })
//   .setPin(intro101)
//   .addTo(controller505505);
//   //Video Animation
// let accelamount = 1;
// let scrollpos = 0;
// let delay = 0;

// scene505101.on("update", e => {
//     // console.log("before ", e.scrollPos);
//     scrollpos = (e.scrollPos) / 1000;
//     console.log("after ", scrollpos);
// })
// setInterval(() => {
//     delay += (scrollpos - delay) * accelamount;
//     //  console.log(scrollpos, delay);
//     //console.log(scrollpos);
  
//     video202.currentTime = delay;
//   }, 33.3);

const planet = document.querySelector(".planet-video-section");
const video = planet.querySelector(".planet-vid");
const text = planet.querySelector("h1");
//END SECTION
// const section = document.querySelector("section");
// const end = section.querySelector("h1");

//SCROLLMAGIC
const controller505 = new ScrollMagic.Controller();

//Scenes
function caller(){console.log("kkk")
  }
caller()


let scene505 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(planet)
  .addTo(controller505);

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

// let scene5052 = new ScrollMagic.Scene({
//   duration: 9000,
//   triggerElement: planet,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller505);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene505.on("update", e => {
  scrollpos = e.scrollPos / 500;
  console.log('pos ', scrollpos);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);