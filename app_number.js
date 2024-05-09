let num1 = 0;
const first = document.getElementById('num1');
const interval1=setInterval(() => {
    num1++;
    first.textContent = num1;
    if (num1 > 499) {
        clearInterval(interval1);
    }
}, 10 / 5);

let num2 = 0;
const second = document.getElementById('num2');
function numto17148() {
    num2++;
    second.textContent = num2;
    if (num2 < 17148) {
        setTimeout(numto17148, 10 / 5);
    }
}
numto17148();

let num3 = 0;
const third = document.getElementById('num3');
const interval2=setInterval(() => {
    num3++;
    third.textContent = num3;
    if (num3 > 1499) {
        clearInterval(interval2);
    }
}, 10 / 5);