/*RANDOM COLOR CHANGER DOM*/

// 1. Get the color box element
document.addEventListener("DOMContentLoaded", function () {
  var colorBox = document.getElementById("color-box");
  var getRandomColor = document.getElementById("change-color-btn");
  colorBox.style.backgroundColor = "white";

  //2. Function to generate a random color
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  //3. Add an event listener to the button
  getRandomColor.addEventListener("click", function () {
    //4. Apply the random color function to the div (color-box)
    colorBox.style.backgroundColor = generateRandomColor();
  });
});

// The code above works perfectly fine. It generates a random color whenever the button is clicked.

/*RANDOM, DEFAULT, AND RANDOM COLOR CHANGER DOM*/

//The code below has three different functionalities. The first click changes the color to random, the second click changes the color back to white, and the third click changes the color to a new random color. It continues in that order.
// 1. Changes color to random.
// 2. Click again: goes back to white.
// 3. Click again: changes to new random ++... and so on.

// // 1. Get the color box element
// document.addEventListener("DOMContentLoaded", function () {
//   var colorBox = document.getElementById("color-box");
//   var getRandomColor = document.getElementById("change-color-btn");
//   colorBox.style.backgroundColor = "white";
//   var isClickA = true;

//   //2. Function to generate a random color
//   function generateRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   //3. Add an event listener to the button
//   getRandomColor.addEventListener("click", function () {
//     isClickA = !isClickA;
//     //4. Apply the random color function to the div (color-box)
//     if (isClickA == true) {
//       colorBox.style.backgroundColor = generateRandomColor();
//       console.log(isClickA);
//     } else {
//       colorBox.style.backgroundColor = "white";
//       console.log(isClickA);
//     }
//   });
// });
