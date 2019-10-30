document.addEventListener("DOMContentLoaded", function () {

    //pobranie inputow typu number
    const quantity = document.querySelector("[name=quantity]");
    const order = document.querySelector("[name=order]");
    const package = document.querySelector("[name=package]");
    //pobranie 1 zielonego diva
    const firstRow = document.getElementById("first-row");
    const secondRow = document.getElementById("second-row");
    const thirdRow = document.getElementById("third-row");
    //pobranie wartości z inputów 
    const qty1 = firstRow.querySelector(".row-calculation");
    const qty2 = secondRow.querySelector(".row-calculation");
    const qty3 = thirdRow.querySelector(".row-calculation");
    const val1 = firstRow.querySelector(".row-value");
    const val2 = secondRow.querySelector(".row-value");
    const val3 = thirdRow.querySelector(".row-value");

    quantity.addEventListener("click", function () {
        const value = 0.5;
        const quantityValue = this.value;
        val1.innerText = "$ " + quantityValue * value;
        qty1.innerText = `${quantityValue} *$${value}`;
        firstRow.style.visibility = "visible";
    });
    order.addEventListener("click", function (e) {
        const value = 0.25;
        const orderValue = this.value;
        val2.innerText = "$ " + orderValue * value;
        qty2.innerText = `${orderValue} *$${value}`;
        secondRow.style.visibility = "visible";
    });
    package.addEventListener("click", function () {
        const packageValue = this.value;
        qty3.innerText = packageValue;
        thirdRow.style.visibility = "visible";
        if (packageValue === "Basic") {
            val3.innerText = "$0";
        } else if (packageValue === "Professional") {
            val3.innerText = "$25";
        } else if (packageValue === "Premium") {
            val3.innerText = "$60";
        }
    })

});