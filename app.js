document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelector(".orders").querySelectorAll(".calc-input, .calc-checkbox");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function () {
            const button = document.querySelector(".value-btn").lastElementChild;
            const divs = document.querySelectorAll(".calc-row");
            const qty1 = divs[0].querySelector(".row-calculation");
            const val1 = divs[0].querySelector(".row-value");
            const qty2 = divs[1].querySelector(".row-calculation");
            const val2 = divs[1].querySelector(".row-value");
            const qty3 = divs[2].querySelector(".row-calculation");
            const val3 = divs[2].querySelector(".row-value");
            const val4 = divs[3].querySelector(".row-value");
            const val5 = divs[4].querySelector(".row-value");

            let quantityValue1 = inputs[0].value;
            let quantityValue2 = inputs[1].value;
            let quantityValue3 = inputs[2].value;
            const valueTable = [0.5, 0.25, 1, 35, 5];
            let quantityValue4 = valueTable[3];
            let quantityValue5 = valueTable[4];
            let total = 0;
            let total1 = (quantityValue1 * valueTable[0]);
            let total2 = (quantityValue2 * valueTable[1]);
            let total3 = val3.innerText;
            let total4 = quantityValue4;
            let total5 = quantityValue5;


            if (i === 0) {
                val1.innerText = "$" + quantityValue1 * valueTable[0];
                qty1.innerText = `${quantityValue1} *$${valueTable[0]}`;
                divs[0].style.visibility = "visible";
                total = total + total1;
                button.innerText = total;


            } else if (i === 1) {
                val2.innerText = "$" + quantityValue2 * valueTable[1];
                qty2.innerText = `${quantityValue2} *$${valueTable[1]}`;
                divs[1].style.visibility = "visible";
                total = total + total1 + total2;
                button.innerText = total;
            } else if (i === 2) {
                qty3.innerText = quantityValue3;
                divs[2].style.visibility = "visible";
                const prices = [0, 25, 60];
                if (quantityValue3 === "Basic") {
                    val3.innerText = "$" + prices[0];
                    // total = total + total1 + total2 + total3;

                } else if (quantityValue3 === "Professional") {
                    val3.innerText = "$" + prices[1];
                    // total = total + total1 + total2 + total3;

                } else if (quantityValue3 === "Premium") {
                    val3.innerText = "$" + prices[2];
                    // total = total + total1 + total2 + total3;

                }
                // total = total + total1 + total2 + total3;
                // button.innerText = total;


            } else if (i === 3) {
                val4.innerText = "$" + valueTable[3];
                divs[3].style.visibility = "visible";
                total = total + total1 + total2 + total4;
                button.innerText = total;



            } else if (i === 4) {
                val5.innerText = "$" + valueTable[4];
                divs[4].style.visibility = "visible";
                total = total + total1 + total2 + total4 + total5;
                button.innerText = total;
            }



            // let rowVal1 = quantityValue1 * valueTable[0];
            // let rowVal2 = quantityValue2 * valueTable[1];
            // let rowVal3 = quantityValue3 * valueTable[2];
            // let rowVal4 = quantityValue4;
            // let rowVal5 = quantityValue5;

        });
    }








});