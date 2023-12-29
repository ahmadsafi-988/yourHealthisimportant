// window.addEventListener("scroll", function () {
//   const stickDiv = document.querySelector(".stick");
//   const about = document.querySelector(".about");
//   const goals = document.querySelector(".goals");
//   const goalsArr = document.querySelectorAll(".goal");
//   console.log(goalsArr);
//   const scrollPosition = window.scrollY;
//   if (scrollPosition > 0) {
//     stickDiv.classList.add("box-shadow");
//   } else {
//     stickDiv.classList.remove("box-shadow");
//   }

//   if (scrollPosition > about.scrollHeight - 200) {
//     about.classList.add("sliding");
//   }
//   //   if (scrollPosition > goals.scrollHeight - 400) {
//   //     goals.classList.add("sliding");
//   //   }

//   let index = 0;
//   if (scrollPosition > goalsArr[index].scrollHeight - 200) {
//     goalsArr[index].classList("sliding");
//     index++;
//   }
// });
let index = 0;
window.addEventListener("scroll", function () {
  const stickDiv = document.querySelector(".stick");
  const about = document.querySelector(".about");
  const video = document.querySelector(".video");
  // const videoEl = document.querySelector("video");
  const goalsArr = document.querySelectorAll(".goal");
  const titleOfTeam = document.querySelector(".TTT");
  const firstrow = document.querySelector(".first-row");
  const secondrow = document.querySelector(".second-row");
  const thirdrow = document.querySelector(".third-row");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    stickDiv.classList.add("box-shadow");
  } else {
    stickDiv.classList.remove("box-shadow");
  }

  if (scrollPosition > about.scrollHeight - 400) {
    about.classList.add("sliding-left");
  }

  let currentGoal = goalsArr[index];
  if (scrollPosition > currentGoal?.offsetTop - 400) {
    goalsArr[index].classList.add(
      `sliding-${index % 2 === 0 ? "right" : "left"}`
    );
    index++;
  }

  if (scrollPosition > video.offsetTop - 400) {
    video.classList.add("sliding-left");
  }

  if (scrollPosition > titleOfTeam.offsetTop - 500) {
    titleOfTeam.classList.add("sliding-right");
  }
  if (scrollPosition > firstrow.offsetTop - 500) {
    firstrow.classList.add("sliding-left");
  }
  if (scrollPosition > secondrow.offsetTop - 500) {
    secondrow.classList.add("sliding-right");
  }
  if (scrollPosition > thirdrow.offsetTop - 500) {
    thirdrow.classList.add("sliding-left");
  }

  window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
  });
});

document.addEventListener("DOMContentLoaded", function () {
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
