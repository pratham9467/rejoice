function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoScroll();

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
  gsap.from(".topelem h3,.topelem h4 ", {
    y: 120,
    stagger: 0.2,
    durtion: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      marker: true,
      scrub: 2,
    },
  });
}

page2Animation();

function page3Animation() {
  gsap.from(".elem h1 .line1, .line2, .line3, .line4, .line5, .line6", {
    y: 120,
    stagger: 0.2,
    durtion: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      marker: true,
      scrub: 2,
    },
  });
}
page3Animation();

function page4Animation() {
  gsap.from(".elem5 h1 .line51, .line52, .line53, .line54 ", {
    y: 120,
    stagger: 0.2,
    durtion: 1,
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      marker: true,
      scrub: 2,
    },
  });
}

page4Animation();

function page5Animation() {
  gsap.from(".topelem5, .topelem5 h3", {
    y: 120,
    stagger: 0.2,
    durtion: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",
      marker: true,
      scrub: 2,
    },
  });
}

page5Animation();
