let data = JSON.parse(sessionStorage.getItem("simuladorInvestimentos"));

let nameDOM = document.querySelectorAll(".person-name");
let timeDOM = document.querySelectorAll(".time");
let monthDOM = document.querySelectorAll(".month-quantity");
let totalMoneyDOM  =document.querySelectorAll(".total-amount");

const calcAmount = ({monthPay, time, rate = 0.476310 / 100}) => {
    let a = ((1 + rate)**(time));
    let b = (a - 1) / rate;

    return monthPay * (rate + 1) * b;
}

nameDOM.forEach(elem => {
    elem.innerHTML = data.name
});
timeDOM.forEach(elem => {
    elem.innerHTML = data.time
});
monthDOM.forEach(elem => {
    elem.innerHTML = data.monthPay
});
totalMoneyDOM.forEach(elem => {
    elem.innerHTML = calcAmount({monthPay: Number(data.monthPay), time: (data.time * 12)}).toFixed(2);
});

localStorage.removeItem("simuladorInvestimentos");

document.querySelector("#simulate-btn").onclick = () => window.location.href = "../simular/index.html";