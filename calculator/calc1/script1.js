const num1 = document.querySelector("input[name=num1]");
const num2 = document.querySelector("input[name=num2]");
const plus = document.querySelector('.summation');
const minus = document.querySelector('.minus');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const result = document.querySelector('.result');

plus.onclick = () => {
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
};

minus.onclick = () => {
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
};

multiplication.onclick = () => {
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
};

division.onclick = () => {
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
};
