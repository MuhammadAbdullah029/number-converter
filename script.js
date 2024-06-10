function convertNumber() {
    const clear = document.querySelector('.clear');
    const inputNumber = document.getElementById('inputNumber').value;
    const inputBase = parseInt(document.getElementById('inputBase').value);

    if (inputNumber === '') {
        alert('Please Enter a Number');
        return;
    }

    
    let decimalNumber;
    try {
        decimalNumber = parseInt(inputNumber, inputBase);
    } catch (e) {
        alert('Invalid number for the selected base');
        return;
    }

    if (isNaN(decimalNumber)) {
        alert('Invalid number for the selected base');
        return;
    }

    
    const binaryResult = decimalNumber.toString(2);
    const decimalResult = decimalNumber.toString(10);
    const octalResult = decimalNumber.toString(8);
    const hexResult = decimalNumber.toString(16).toUpperCase();

    
    document.getElementById('binaryResult').innerText = binaryResult;
    document.getElementById('decimalResult').innerText = decimalResult;
    document.getElementById('octalResult').innerText = octalResult;
    document.getElementById('hexResult').innerText = hexResult;

    clear.addEventListener("click", function(){
        location.reload();
    })
}
