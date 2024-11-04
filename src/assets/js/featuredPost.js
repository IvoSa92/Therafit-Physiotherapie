//slide in animation sidecard

document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(".slide-in-right");
  const blogButton = document.querySelector(".blog-link2");
  blogButton.classList.add("show");
  slideElements.forEach((element) => {
    element.classList.add("show");
  });
});
