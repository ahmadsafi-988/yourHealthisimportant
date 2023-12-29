let index = 1;
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const arr = document.querySelectorAll(".container1");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("box-shadow");
  } else {
    header.classList.remove("box-shadow");
  }

  let currenttopic = arr[index];
  if (scrollPosition > currenttopic?.offsetTop - 350) {
    arr[index].classList.add(`sliding-${index % 2 === 0 ? "right" : "left"}`);
    index++;
  }

  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links to the middle of the target section
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        const targetPosition = targetSection.offsetTop - 100;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
