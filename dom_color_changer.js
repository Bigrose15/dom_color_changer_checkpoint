/*COLOR CHANGER*/

document.addEventListener("DOMContentLoaded", function () {
  var colorBox = document.getElementById("color-box");
  var getRandomColor = document.getElementById("change-color-btn");
  var isClickA = true;

  getRandomColor.addEventListener("click", function () {
    isClickA = !isClickA;
    if (isClickA === true) {
      colorBox.style.backgroundColor = "orange";
    } else {
      colorBox.style.backgroundColor = "red";
    }
  });
});
