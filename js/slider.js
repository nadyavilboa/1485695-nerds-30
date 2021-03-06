const slide = document.querySelectorAll(".slider__item");
const btnCircle = document.querySelectorAll(".button--circle");

let currentNumber;
let lastCurrent;

for (let i = 0; i < btnCircle.length; i++) {
  btnCircle[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    currentNumber = i;
    for (let j = 0; j < btnCircle.length; j++) {
      if(btnCircle[j].classList.contains("button--circle--current")) {
        lastCurrent = j;
      }
    };
    btnCircle[lastCurrent].removeAttribute("disabled");
    btnCircle[lastCurrent].classList.remove("button--circle--current");
    btnCircle[currentNumber].setAttribute("disabled","disabled");
    btnCircle[currentNumber].classList.add("button--circle--current");
    slide[lastCurrent].classList.add("hidden");
    slide[currentNumber].classList.remove("hidden");
  });
};
