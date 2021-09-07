const storageData = () => {
    let data = {
        name : document.querySelector("#name").value,
        monthPay : document.querySelector("#pay").value,
        time : document.querySelector("#time").value,
    }

    if(data.name == "" || data.monthPay <= 0 || data.time <=0){
        alert("Insira o seu nome, um valor maior que 0 e um tempo maior que 0, para calcular");
        return;
    }

    sessionStorage.setItem("simuladorInvestimentos", JSON.stringify(data));

    let a = JSON.parse(sessionStorage.getItem("simuladorInvestimentos"));
    console.log({a})

    window.location.href = "../mostrar/index.html";
}

document.querySelector("#simulate-btn").onclick = storageData;