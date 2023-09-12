function convertTemperature(inputId, resultId, conversionType) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    let result;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    if (conversionType === 'Celsius to Fahrenheit') {
        result = (inputValue * 9/5) + 32;
    } else if (conversionType === 'Fahrenheit to Celsius') {
        result = (inputValue - 32) * 5/9;
    } else {
        alert("Invalid conversion type.");
        return;
    }

    document.getElementById(resultId).innerHTML = `${inputValue} ${conversionType} is ${result.toFixed(2)} ${conversionType === 'Celsius to Fahrenheit' ? 'Fahrenheit' : 'Celsius'}.`;
}
