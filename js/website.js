// Summary:
//   Set each card's class value in the 'Experience' section
//   such that the cards alternates between being in the left and
//   right side of the timeline.
//
// Assumptions:
//   1. Each card is a child of a div which has 'timeline' class.
//   2. Each card does not currently have a class value which
//      sets its side orientation.
//   3. The class names 'left' and 'right' when assigned to the div element
//      will align the div to the left or right respectively.
function setCardsSide() {
  const className = "timeline"; // the class name which the container div has
  const cards = document.querySelectorAll("div." + className);
  //console.log(cards);
  for (let i = 0; i < cards.length; ++i) {
    let side = i % 2 == 0 ? "left" : "right";
    cards[i].classList.add(side);
  }
}

// run the functions which must be executed before loading
// the content of the document.
setCardsSide();

// Enable tooltips
document.addEventListener("DOMContentLoaded", function () {
  var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip);
  });
});
