function conversor(){
    let n1 = window.document.querySelector('input#temp')
    let res = window.document.querySelector('section#res')
    let calc = ((n1.value)-32) / 1.8
    res.innerHTML = `TEMPERATURA = ${calc}`
    return 0
}