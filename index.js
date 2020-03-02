function bill() {
    let radius = parseFloat(document.getElementById("total").value);
    let circle = 2 * Math.PI * radius;
    console.log("Circumference of circle is: " + circle);

    document.getElementById("Circumference").innerHTML = 2 * Math.PI * radius;
    return false;

}