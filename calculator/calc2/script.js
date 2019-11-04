const num1 = document.querySelector("input[name=num1]");
const num2 = document.querySelector("input[name=num2]");
const btn = document.querySelector('.equally');
const span = document.querySelector('.result');

btn.onclick = () => {
    span.innerHTML = parseInt(num1.value) + parseInt(num2.value);

    btn.disabled = true;
};

num1.oninput = btnEnabled;
num2.oninput = btnEnabled;

function btnEnabled() {
    btn.disabled = false;
}