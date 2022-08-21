function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}


function getTextElementValue(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
}

function setTextElement(elementId, value){
    const setElement = document.getElementById(elementId);
    setElement.innerText = value;
}


document.getElementById("calculate").addEventListener("click", function(){

    const income = getInputFieldValue("income-field");
    const foods = getInputFieldValue("food-field");
    const rent = getInputFieldValue("rent-field");
    const cloths = getInputFieldValue("cloths-field");

    const expenses = foods + rent + cloths;

    const previousExpenses = getTextElementValue("expenses");
    const totalExpenses = previousExpenses + expenses;
    setTextElement("expenses", totalExpenses)

    const previousBalance = getTextElementValue("balance");
    const remainingBalance = income - expenses;
    setTextElement("balance", remainingBalance)


})

document.getElementById("save-btn").addEventListener("click", function(){
    const previousBalance = getTextElementValue("balance");
    const saveField = getInputFieldValue("save-field");
    const previousSave = getTextElementValue("save-amount");

    const saveAmountCalculate = previousBalance / 100 * saveField;
    const totalSaveAmount = previousSave + saveAmountCalculate;
    setTextElement("save-amount", totalSaveAmount)

    const previousFinalBalance = getTextElementValue("final-balance");
    const finalBalance = previousBalance - totalSaveAmount;
    setTextElement("final-balance", finalBalance)
    
})