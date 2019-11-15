document.addEventListener("DOMContentLoaded", function () {


    // DROPDOWN 
    const ulList = document.querySelector(".dropdown-menu");
    const arrow = document.querySelector(".fa-arrow-circle-up");
    arrow.addEventListener("click", function () {
        ulList.classList.toggle("hidden");
    });



    //KALKULATOR
    const inputs = document.querySelector(".orders").querySelectorAll(".calc-input, .calc-input-button, .calc-checkbox");
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


    const liList = document.querySelectorAll(".drop-element");

    for (let j = 0; j < liList.length; j++) {
        const singleLi = liList[j];
        singleLi.addEventListener("click", function () {
            let textElement = singleLi.innerText;
            inputs[2].innerText = "";
            inputs[2].innerText = textElement;
            ulList.classList.toggle("hidden");


            let quantityValue3 = inputs[2].innerText;
            qty3.innerText = quantityValue3;
            const valueTable = [0.5, 0.25, [0, 25, 60], 35, 5];
            divs[2].style.visibility = "visible";

            if (quantityValue3 === "Basic") {
                val3.innerText = "$" + valueTable[2][0];
                total3 = valueTable[2][0];

                total = total1 + total2 + total3 + total4 + total5;
            } else if (quantityValue3 === "Professional") {
                val3.innerText = "$" + valueTable[2][1];
                total3 = valueTable[2][1];

                total = total1 + total2 + total3 + total4 + total5;

            } else if (quantityValue3 === "Premium") {
                val3.innerText = "$" + valueTable[2][2];
                total3 = valueTable[2][2];
                total = total1 + total2 + total3 + total4 + total5;
            }

            button.innerText = "$" + total;
        })
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", function () {


            let quantityValue1 = inputs[0].value;
            let quantityValue2 = inputs[1].value;
            const valueTable = [0.5, 0.25, [0, 25, 60], 35, 5];
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


    // WYSUWANIE MENU
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.addEventListener("click", function () {
        const burgerList = document.querySelector(".burger-list");
        burgerList.classList.toggle("active");
    })

});