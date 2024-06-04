// let tl = gsap.timeline();
// tl.from("#box1", {
//   opacity: 0,
//   duration: 1,
// });
// tl.from("#box1", {
//   x: 1020,
//   duration: 2,
//   rotate: 360,
//   backgroundColor: "pink",
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// tl.from("#box2", {
//   opacity: 0,
//   duration: 1,
// });

// tl.to("#box2", {
//   x: 1020,
//   backgroundColor: "yellow",
//   delay: 1,
//   duration: 2,
//   rotate: 360,
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// tl.from("h1", {
//     scale: 0.1,
//     opacity: 0,
//     delay:1,
// })

let tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
});

tl.from(".navbar-item", {
  y: -30,
  opacity: 0,
  stagger: 0.25,
});

tl.from("h1", {
  scale: 0.2,
  opacity: 0,
});
