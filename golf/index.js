const cursor = document.getElementById("cursor");
const blur = document.getElementById("cursor-blur");
const h3 = document.querySelectorAll(".nav h3");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  blur.style.top = e.clientY - 150 + "px";
  blur.style.left = e.clientX - 150 + "px";
});
gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "140px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
h3.forEach((h) => {
  const listener = () => {
    cursor.style.border = "0.5px white solid";
    cursor.style.scale = "3";
    cursor.style.backgroundColor = "transparent";
  };
  const leavelistener = () => {
    cursor.style.border = "0px solid #95c11e";
    cursor.style.scale = "1";
    cursor.style.backgroundColor = "#95c11e";
  };
  h.addEventListener("mouseenter", listener);
  h.addEventListener("mouseleave", leavelistener);
});
gsap.to(".wrapper", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".wrapper",
    scroller: "body",
    start: "top -15%",
    end: "top -80%",
    scrub: 4,
  },
});
gsap.from("#about-img,.about-in,#about-img2", {
  y: 50,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: "top 2%",
    end: "top 10%",
    scrub: 3,
  },
});
gsap.from("#colon1", {
  y: -50,
  x: -50,
  duration: 2,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  y: 50,
  x: 50,
  duration: 2,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 2,
  },
});
