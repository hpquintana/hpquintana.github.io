var doc = document;
var right = doc.querySelector(".right");
var left = doc.querySelector(".left");
var container = doc.querySelector(".container");

// adds a class to the container element on hover
left.addEventListener("mouseenter", function () {
  container.classList.add("hover-left");
});

// removes the class that was added on hover
left.addEventListener("mouseleave", function () {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", function () {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", function () {
  container.classList.remove("hover-right");
});