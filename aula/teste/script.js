function lista() {
    let liga = window.document.querySelector('input#txtn')
    let res = window.document.getElementById('res')
    let list = []
    let n1 = liga.value
    while (n1 >= 0) {
        list.push(n1)
        n1--
    }
    res.innerHTML = `a lista é ${list}`
}