//IIFE: immediately invoked function expression
(function () {
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
})();

let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
let main = document.querySelector(".main");
main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 10 + "px";
  cursor.style.top = dets.y - 10 + "px";
  cursorBlur.style.left = dets.x - 250 + 30 + "px";
  cursorBlur.style.top = dets.y - 250 + 30 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("video").playbackRate = 0.5;
});

// Toggle Mobile Menu
function toggleMenu() {
  console.log("button clicked");
  let nav = document.getElementById("mobile-nav");
  let hamburger = document.querySelector(".hamburger");

  if (!nav || !hamburger) {
    console.error("Navbar or hamburger element not found.");
    return;
  }

  nav.classList.toggle("active");

  // Change hamburger icon when toggling
  hamburger.innerHTML = nav.classList.contains("active") ? "✖" : "☰";
}

document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
});

//Projects section
const projectsWrapper = document.querySelector(".projects-wrapper");
let isDragging = false;
let startX, scrollLeft;

projectsWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - projectsWrapper.offsetLeft;
  scrollLeft = projectsWrapper.scrollLeft;
  projectsWrapper.style.cursor = "grabbing"; // Visual feedback
});

projectsWrapper.addEventListener("mouseleave", () => {
  isDragging = false;
  projectsWrapper.style.cursor = "grab";
});

projectsWrapper.addEventListener("mouseup", () => {
  isDragging = false;
  projectsWrapper.style.cursor = "grab";
});

projectsWrapper.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - projectsWrapper.offsetLeft;
  const walk = (x - startX) * 2;
  projectsWrapper.scrollLeft = scrollLeft - walk;
});

// Certs Auto-Scroll Function
// let index = 0;
// const certsWrapper = document.querySelector(".certs-wrapper");
// const certs = document.querySelectorAll(".cert");
// const certWidth = certs[0].offsetWidth + 15; // Adjust for margin
// const scrollSpeed = 2; // Adjust for smoothness
// let scrollPos = 0;

// function autoScroll() {
//   // Scroll horizontally
//   scrollPos += scrollSpeed;

//   if (scrollPos > certsWrapper.scrollWidth - certsWrapper.offsetWidth) {
//     // Reset scroll position when it reaches the end
//     scrollPos = 0;
//   }

//   // Apply the scroll position to the wrapper
//   certsWrapper.style.transform = `translateX(-${scrollPos}px)`;
// }

// setInterval(autoScroll, 30); // Adjust scroll speed by changing the interval

// Contact Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    document.getElementById("submit-btn").disabled = true;

    sendMail();
  });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_r3p6wa2", "template_bgil9qm", params)
    .then(() => {
      alert("Your message was sent successfully!");
      document.getElementById("contact-form").reset();
      document.getElementById("submit-btn").disabled = false;
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
      document.getElementById("submit-btn").disabled = false;
    });
}
