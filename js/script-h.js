console.clear();

const video_stronger = document.querySelector(".video-background");
let src = video_stronger.currentSrc || video_stronger.src;
console.log(video_stronger, src);

function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video_stronger.play();
  video_stronger.pause();
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#container-vid",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

once(video_stronger, "loadedmetadata", () => {
  tl.fromTo(
    video_stronger,
    {
      currentTime: 0
    },
    {
      currentTime: video_stronger.duration || 1
    }
  );
});

setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video_stronger.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video_stronger.play();
          video_stronger.pause();
        });

        video_stronger.setAttribute("src", blobURL);
        video_stronger.currentTime = t + 0.01;
      });
  }
}, 1000);


