function cursoreffect() {
  var page1Content = document.querySelector(".page1Content");
  var playReel = document.querySelector(".playReel");

  page1Content.addEventListener("mousemove", function (e) {
    gsap.to(playReel, {
      x: e.x,
      y: e.y,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(playReel, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(playReel, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursoreffect();

function page2Animation() {
  gsap.from(".topelem h3, h4, .elem h1", {
    y: 120,
    stagger: 0.2,
    durtion: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroll: "body",
      start: "top 47%",
      end: "top 46%",
      marker: true,
      scrub: 2,
    },
  });
}

page2Animation();
