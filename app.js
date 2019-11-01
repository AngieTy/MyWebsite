document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelector(".orders").querySelectorAll(".calc-input, .calc-checkbox");
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
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    let total5 = 0;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", function () {
            let quantityValue1 = inputs[0].value;
            let quantityValue2 = inputs[1].value;
            let quantityValue3 = inputs[2].value;
            const valueTable = [0.5, 0.25, 1, 35, 5];
            if (i === 0) {
                val1.innerText = "$" + quantityValue1 * valueTable[0];
                qty1.innerText = `${
                    quantityValue1}* $${valueTable[0]}`;
                divs[0].style.visibility = "visible";
                total1 = (quantityValue1 * valueTable[0]);
                total = total1 + total2 + total3 + total4 + total5;

            } else if (i === 1) {
                val2.innerText = "$" + quantityValue2 * valueTable[1];
                qty2.innerText = ` ${quantityValue2}* $${valueTable[1] }`;
                divs[1].style.visibility = "visible";
                total2 = (quantityValue2 * valueTable[1]);
                total = total1 + total2 + total3 + total4 + total5;


            } else if (i === 2) {
                qty3.innerText = quantityValue3;
                divs[2].style.visibility = "visible";
                const prices = [0, 25, 60];
                if (quantityValue3 === "Basic") {
                    val3.innerText = "$" + prices[0];
                    total3 = prices[0];
                    total = total1 + total2 + total3 + total4 + total5;


                } else if (quantityValue3 === "Professional") {
                    val3.innerText = "$" + prices[1];
                    total3 = prices[1];
                    total = total1 + total2 + total3 + total4 + total5;



                } else if (quantityValue3 === "Premium") {
                    val3.innerText = "$" + prices[2];
                    total3 = val3.innerText;
                    total = total1 + total2 + total3 + total4 + total5;

                }
            } else if (i === 3) {


                if (inputs[3].checked) {
                    divs[3].style.visibility = "visible";
                } else {
                    divs[3].style.visibility = "hidden";
                    valueTable[3] = 0;
                }
                val4.innerText = "$" + valueTable[3];
                total4 = valueTable[3];
                total = total1 + total2 + total3 + total4 + total5;


            } else if (i === 4) {
                if (inputs[4].checked) {
                    divs[4].style.visibility = "visible";
                } else {
                    divs[4].style.visibility = "hidden";
                    valueTable[4] = 0;
                }
                val5.innerText = "$" + valueTable[4];
                total5 = valueTable[4];
                total = total5 + total4 + total3 + total2 + total1;

            }
            button.innerText = "$" + total;
        });

    }
});