document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelector(".orders").querySelectorAll(".calc-input, .calc-checkbox");
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function () {
            const button = document.querySelector(".value-btn").lastElementChild;
            const divs = document.querySelectorAll(".calc-row");
            const qty1 = divs[0].querySelector(".row-calculation");
            const val1 = divs[0].querySelector(".row-value");
            const value1 = 0.5;
            const qty2 = divs[1].querySelector(".row-calculation");
            const val2 = divs[1].querySelector(".row-value");
            const value2 = 0.25;
            const qty3 = divs[2].querySelector(".row-calculation");
            const val3 = divs[2].querySelector(".row-value");
            const val4 = divs[3].querySelector(".row-value");
            const value4 = 35;
            const val5 = divs[4].querySelector(".row-value");
            const value5 = 5;

            if (i === 0) {
                const quantityValue = this.value;
                val1.innerText = "$" + quantityValue * value1;
                qty1.innerText = `${quantityValue} *$${value1}`;
                divs[0].style.visibility = "visible";

            } else if (i === 1) {
                const quantityValue = this.value;
                val2.innerText = "$" + quantityValue * value2;
                qty2.innerText = `${quantityValue} *$${value2}`;
                divs[1].style.visibility = "visible";
            } else if (i === 2) {
                const quantityValue = this.value;
                qty3.innerText = quantityValue;
                divs[2].style.visibility = "visible";
                const prices = [0, 25, 60];
                if (quantityValue === "Basic") {
                    val3.innerText = "$" + prices[0];
                } else if (quantityValue === "Professional") {
                    val3.innerText = "$" + prices[1];
                } else if (quantityValue === "Premium") {
                    val3.innerText = "$" + prices[2];
                }
            } else if (i === 3) {
                val4.innerText = "$" + value4;
                divs[3].style.visibility = "visible";

            } else if (i === 4) {
                val5.innerText = "$" + value5;
                divs[4].style.visibility = "visible";
            }

            //zmienne do włożenia do tablicy
        });
    }





























































    //     quantity.addEventListener("click", function () {
    //         const value1 = 0.5;
    //         const quantityValue = this.value;
    //         val1.innerText = "$ " + quantityValue * value1;
    //         qty1.innerText = `${quantityValue} *$${value1}`;
    //         firstRow.style.visibility = "visible";
    //     });
    //     order.addEventListener("click", function (e) {
    //         const value2 = 0.25;
    //         const orderValue = this.value;
    //         val2.innerText = "$ " + orderValue * value2;
    //         qty2.innerText = `${orderValue} *$${value2}`;
    //         secondRow.style.visibility = "visible";
    //     });
    //     package.addEventListener("click", function () {
    //         const packageValue = this.value;
    //         qty3.innerText = packageValue;
    //         thirdRow.style.visibility = "visible";
    //         const prices = [0, 25, 60];
    //         if (packageValue === "Basic") {
    //             val3.innerText = "$" + prices[0];
    //         } else if (packageValue === "Professional") {
    //             val3.innerText = "$" + prices[1];
    //         } else if (packageValue === "Premium") {
    //             val3.innerText = "$" + prices[2];
    //         }
    //     })
    //     accounting.addEventListener("click", function () {
    //         const value4 = 35;
    //         val4.innerText = "$" + value4;
    //         if (accounting.checked) {
    //             fourthRow.style.visibility = "visible";
    //         }
    //     })
    //     rental.addEventListener("click", function () {
    //         const value5 = 5;
    //         val5.innerText = "$" + value5;
    //         if (rental.checked) {
    //             fifthRow.style.visibility = "visible";
    //         }
    //     });
    //     const all = document.querySelectorAll(".row-value");
    //     console.log(all);
    //     for (let i = 0; i < all.length; i++) {
    //         let singleAll = all[i];

    //     }

});