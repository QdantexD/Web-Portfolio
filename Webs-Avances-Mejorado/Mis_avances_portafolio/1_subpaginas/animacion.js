window.addEventListener("scroll", function () {
  var footer = document.querySelector("footer");
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.offsetHeight;

  if (scrollPosition + windowHeight >= documentHeight) {
    footer.classList.add("visible-footer");
  } else {
    footer.classList.remove("visible-footer");
  }
});
