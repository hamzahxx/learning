gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    start: "top 40% ",
  },
});

gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    start: "top 60% ",
  },
});

gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  rotate: 720,
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
    pin: true,
  },
});
