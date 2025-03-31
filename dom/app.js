// ¿En tu páis de origen es normal dejar propina?
//en mi país es voluntario, y eso ya es cada cual... xD (yo suelo dejar algo)


const inputBillAmount = document.getElementById("bill-amount");
const inputPercentageTip = document.getElementById("percentage-tip");
const inputTipAmount = document.getElementById("tip-amount");
const inputTotal = document.getElementById("total");
const btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener("click", ()=>{
    inputTipAmount.value = inputBillAmount.value * (inputPercentageTip.value/100);
    inputTotal.value = Number(inputBillAmount.value)+Number(inputTipAmount.value);
});