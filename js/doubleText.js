


var texts = [
  "  <div class='fade-in-text'><span class='s-gold'>One <br></span>We are part of One Gold Fields – a united team with a single,<span class='s-gold'> unifying Purpose, Vision, </span> set of <span class='s-gold'> Values </span> and culture. While we recognise and celebrate the many different <span class='s-gold'> people, languages, countries and cultures </span we have around the world, we know that we are all part of <span class='s-gold'> one family </span> that has one purpose and one common Gold Fields culture</div>",


  " <div class='fade-in-text'> <span class='s-gold'>Caring</span> <br> We want people to feel they truly matter – something that can only be achieved through a culture of deep <span class='s-gold'>care, respect and kindness.</span> We want to build a company where people are eager and happy to come to work, where they can build <span class='s-gold'> positive relationships </span> with their colleagues and can experience a sense of emotional and psychological <span class='s-gold'> safety </span></div>",

  "    <div class='fade-in-text'><span class='s-gold'>Courageous</span> <br> We can achieve great things together if we have the courage to dream big and to push our personal and business boundaries. We look for new and better ways of doing things, for innovative ways to get the job done safely and smartly. We are also brave enough to speak up, have difficult conversations and listen to challenging feedback.</div>",

  " <div class='fade-in-text'> class='text-white'><span class='s-gold'>Inclusive team</span> We know that our <span class='s-gold'> team is stronger </span>when we include people with different talents, world Views, cultural contexts, and problem-solving approaches.<span class='s-gold'> Diversity, equity and inclusion </span> makes us stronger, faster, smarter, better, and inclusivity creates a space where everyone feels they belong.</div>",


  "<div class='fade-in-text'><span class='s-gold'>Connected</span>Being connected means <span class='s-gold'> working together towards </span> a common goal, with a <span class='s-gold'> single purpose </span> in mind. While we operate in locations <span class='s-gold'> across the globe </span> and in many different disciplines and departments, being connected pulls us together as a <span class='s-gold'> team </span> and enables us to work smarter and seamlessly together.  </div>",


  "<div class='fade-in-text'> <span class='s-gold'>Delivering great <br> When we work together we can make a <span class='s-gold'> positive </span> impact on the lives of all the people touched by our business. This is what it means to be <span class='s-gold'> #StrongerTogether  </span></div>",






];

const left = document.querySelector("#left");
const right = document.querySelector("#right");


const intro101 = document.querySelector(".intro101");
const video202 = document.querySelector(".vider");
const text202 = document.querySelector("div");
//END SECTION
const section = document.querySelector("s101");
const end = document.querySelector("div");

//SCROLLMAGIC
const controller202 = new ScrollMagic.Controller();

//Scenes
let scene101 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro101,
  triggerHook: 0
})
  .setPin(intro101)
  .addTo(controller202);

  // const textAnim = TweenMax.fromTo(text202, 3, { opacity: 1 }, { opacity: 0 });

  // let scene2 = new ScrollMagic.Scene({
  //   duration: 10000,
  //   triggerElement: intro101,
  //   triggerHook: 0
  // })
  //   .setTween(textAnim)
  //   .addTo(controller202);
  
//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene101.on("update", e => {
  // console.log("before ", e.scrollPos);
  scrollpos = (e.scrollPos) / 1000;
console.log("after ", scrollpos);
  // console.log("int ,", parseInt(scrollpos));

  switch (splitter(scrollpos)) {
    case 1:
      left.innerHTML = texts[0];
      break;
    case 2:
      left.innerHTML = texts[1];
      break;
    case 3:
      right.innerHTML= ""
      left.innerHTML = texts[2];
      break;
    case 4:
      left.innerHTML = ""
      right.innerHTML = texts[3];
      break;
    case 5:
      right.innerHTML = texts[4];
      break;
    case 6:
      
      right.innerHTML = texts[5];
      break;
    default:
      left.innerHTML = ""
      right.innerHTML= ""
      break;
  }
});


setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  //  console.log(scrollpos, delay);
  //console.log(scrollpos);

  video202.currentTime = delay;
}, 33.3);


function splitter(num) {

  if (num <= 3.8 && num > 3) {
    return 1
  } else if (num <= 1.5 && num > 0.8) {
    return 2
  }
  else if (num <= 1.9 && num > 1.5) {
    return 3
  }
  else if (num <= 1.9 && num > 2.1) {
    return 4
  }
  else if (num <= 2.5 && num > 2.3) {
    return 5
  }
  else if (num <=2.7 && num > 2.5) {
    return 6
  }
  else if ( num > 3) {
    return 6
  }
}