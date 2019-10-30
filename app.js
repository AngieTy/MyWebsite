document.addEventListener("DOMContentLoaded", function () {

    //pobranie inputow typu number
    const quantity = document.querySelector("[name=quantity]");
    const order = document.querySelector("[name=order]");
    const package = document.querySelector("[name=package]");
    const accounting = document.querySelector("[name=accounting]");
    const rental = document.querySelector("[name=rental]");
    //pobranie 1 zielonego diva
    const firstRow = document.getElementById("first-row");
    const secondRow = document.getElementById("second-row");
    const thirdRow = document.getElementById("third-row");
    const fourthRow = document.getElementById("fourth-row");
    const fifthRow = document.getElementById("fifth-row");
    //pobranie wartości z inputów 
    const qty1 = firstRow.querySelector(".row-calculation");
    const qty2 = secondRow.querySelector(".row-calculation");
    const qty3 = thirdRow.querySelector(".row-calculation");
    const val1 = firstRow.querySelector(".row-value");
    const val2 = secondRow.querySelector(".row-value");
    const val3 = thirdRow.querySelector(".row-value");
    const val4 = fourthRow.querySelector(".row-value");
    const val5 = fifthRow.querySelector(".row-value");

    quantity.addEventListener("click", function () {
        const value1 = 0.5;
        const quantityValue = this.value;
        val1.innerText = "$ " + quantityValue * value1;
        qty1.innerText = `${quantityValue} *$${value1}`;
        firstRow.style.visibility = "visible";
    });
    order.addEventListener("click", function (e) {
        const value2 = 0.25;
        const orderValue = this.value;
        val2.innerText = "$ " + orderValue * value2;
        qty2.innerText = `${orderValue} *$${value2}`;
        secondRow.style.visibility = "visible";
    });
    package.addEventListener("click", function () {
        const packageValue = this.value;
        qty3.innerText = packageValue;
        thirdRow.style.visibility = "visible";
        const prices = [0, 25, 60];
        if (packageValue === "Basic") {
            val3.innerText = "$" + prices[0];
        } else if (packageValue === "Professional") {
            val3.innerText = "$" + prices[1];
        } else if (packageValue === "Premium") {
            val3.innerText = "$" + prices[2];
        }
    })
    accounting.addEventListener("click", function () {
        const value4 = 35;
        val4.innerText = "$" + value4;
        if (accounting.checked) {
            fourthRow.style.visibility = "visible";
        }
    })
    rental.addEventListener("click", function () {
        const value5 = 5;
        val5.innerText = "$" + value5;
        if (rental.checked) {
            fifthRow.style.visibility = "visible";
        }
    });
    const all = document.querySelectorAll(".row-value");
    console.log(all);
    for (let i = 0; i < all.length; i++) {
        let singleAll = all[i];

    }

});