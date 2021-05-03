const globelVaraible = " hi i'am globel Varaible";

function outerFunction(outerFunctionParamter) {
    const outerFunctionVarabile = " hi i'm outer Function Varabile";

    function innerFunction(innerFunctionParamter) {
        const innerFunctionVarabile = " hi i'm inner Function Varabile";

        document.getElementById("globelVaraible").innerHTML = globelVaraible;
        document.getElementById("outerFunctionVarabile").innerHTML = outerFunctionVarabile;
        document.getElementById("innerFunctionVarabile").innerHTML = innerFunctionVarabile;
        document.getElementById("outerFunctionParamter").innerHTML = outerFunctionParamter;
        document.getElementById("innerFunctionParamter").innerHTML = innerFunctionParamter;

    }
    innerFunction("hi from inner function");
}
outerFunction("hi from outer function");