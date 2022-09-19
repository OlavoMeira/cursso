function decimalToBinary() {
    let res = window.document.querySelector('div#res')
    let liga = window.document.querySelector('input#txtn')
    const remStack = [];
    let number = liga.vaule;
    let rem;
    let binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.length === 0) {
        binaryString += remStack.pop().toString();
    }
    return res.innerHTML = `<h2>${binaryString}</h2>`;
}