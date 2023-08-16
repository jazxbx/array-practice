"use strict";

const randomButton = document.querySelector("#random-button");
const arrayDisplay = document.querySelector("#display-random");
let generatedArray = [];

//Random Array Generation

randomButton.addEventListener("click", () => {
  //function that creates a random arr from 1-10
  const randomArray = () =>
    [...new Array(10)].map(() => Math.ceil(Math.random() * 100));
  //stored value of random arr
  generatedArray = randomArray();
  // adds class hide-button that hides the button
  randomButton.classList.add("hide-button");
  // Update the display with the generated array
  arrayDisplay.textContent = `[${generatedArray.join(", ")}]`;
});

//first number
const firstNum = document.querySelector("#first-num");
firstNum.addEventListener("click", () => {
  arrayDisplay.textContent = generatedArray[0];
  console.log(generatedArray[0]);
});

//Adds a random number
const addNum = document.querySelector("#add-num");
addNum.addEventListener("click", () => {
  const randomNum = Math.ceil(Math.random() * 100);
  generatedArray.push(randomNum);
  arrayDisplay.textContent = `[${generatedArray.join(", ")}]`;
  //   arrayDisplay.textContent = generatedArray;
});

//turns the numbers into bears
const bears = document.querySelector(`#bear`);
bears.addEventListener("click", () => {
  let bearArr = [];
  for (let num of generatedArray) {
    bearArr.push("🐻");
  }
  arrayDisplay.textContent = `[${bearArr.join(", ")}]`;
});
