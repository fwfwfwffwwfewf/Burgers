document.getElementById("main-action-button").onclick = function() {
    alert("aaa");
    document.getElementById("products").scrollIntoView({behavior: "smooth"})
}

let prices = document.getElementsByClassName("info-price");

document.getElementById("change-currency").onclick = function(e) {
    let currentCurrency =  e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    } 
    else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    }
    else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;
   
    for (let i=0; i<prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price")* coefficient).toFixed(1) + " " + newCurrency;
    }
}