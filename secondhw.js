const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const select = document.querySelector("#select");


const kursdollar = 10959;
const kurseuro = 10928;
const kursrubl = 182;


input1.addEventListener("input", () => console.log(input1.value));
select.addEventListener("change", myTotal);


function myTotal() {
    if (select.value == "dollar") {
    input2.value = input1.value / kursdollar;
    } else if (select.value == "euro") {
    input2.value = input1.value / kurseuro;
    } else if (select.value == "rubl") {
    input2.value = input1.value / kursrubl;
    }
}


input1.addEventListener("focus", () => select.value = "null");