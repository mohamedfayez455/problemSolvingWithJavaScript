function addTrible(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

document.getElementById("result").innerHTML = `the result = ${addTrible(10)(20)(30)}`;