// 1 kcal = 0.00013 kg

const calorie = 0.00013;
const kgs =  7716.17918;

const kg = "Kilogram";
const calories = "Calorie";


const convert = document.getElementById("convertBtn");
const input = document.getElementById("input");
const swap = document.getElementById("swap");
const value = document.getElementById("value");
const result = document.getElementById("resultValue");
const resultNmb = document.getElementById("result");

input.value = 1;

convert.addEventListener("click", () => {
    if(value.textContent === calories) {
        resultNmb.textContent = input.value * calorie;
    } else if (value.textContent === kg) {
        resultNmb.textContent = input.value * kgs;
    }
    
})

swap.addEventListener("click", () => {
    if(value.textContent === calories) {
    value.textContent = kg;
    result.textContent = kg + "s";
    result.textContent = calories + "s";
    resultNmb.textContent = input.value * kgs;
    } else if (value.textContent === kg) {
    value.textContent = calories;
    result.textContent = calorie + "s";
    result.textContent = kg + "s";
    resultNmb.textContent = input.value * calorie;
    }
});