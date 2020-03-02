function bill() {
    let radius = parseFloat(document.getElementById("total").value);
    console.log(typeof totalIn);
    var circle = 2 * Math.PI * radius;

    document.getElementById("tip").innerHTML = "$" + totals * rates / 100;
    document.getElementById("tax").innerHTML = "$" + totals * 0.055;
    document.getElementById("circumference").innerHTML = "" + (circle);
    return false;

}