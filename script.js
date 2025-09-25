// GSAP Animations
gsap.from("header", { duration: 1, y: -50, opacity: 0 });
gsap.from("#about", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from("#skills", { duration: 1, x: 100, opacity: 0, delay: 1 });
gsap.from(".project-card", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  delay: 1.5
});
gsap.from("form", { duration: 1, scale: 0.8, opacity: 0, delay: 2 });
