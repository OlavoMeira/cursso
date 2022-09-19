function converter(num) {
    let dec = parseInt(num)
    let bin = dec.toString(2)
    document.getElementById("res").innerText = bin
}