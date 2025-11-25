document.getElementById("btn1").onclick = function () {
    var name = prompt("Enter your name");
    var reg = prompt("Enter your registration#");
    alert(name + " " + reg);
};

document.getElementById("btn2").onclick = function () {
    var num = Number(prompt("Enter num value for arithmetic operation"));
    var num2 = Number(prompt("Enter num2 value for arithmetic operation"));

    alert(
        "Sum: " + (num + num2) + "\n" +
        "Difference: " + (num - num2) + "\n" +
        "Product: " + (num * num2) + "\n" +
        "Quotient: " + (num / num2) + "\n" +
        "Comparison (num > num2): " + (num > num2)
    );
};
