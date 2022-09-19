function decimal() {
    let liga = window.document.querySelector('#txtn')
    let resu = window.document.querySelector('div#res')
    let list = []
    let number = liga.vaule
    let rem = 0
    while (number > 0) {
        rem = (number % 2)
        list.push(rem)
        number = (number / 2)
    }
    resu.innerHTML = list
}