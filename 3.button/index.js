function createFiveButton() {
    let buttonNumber = 5;
    for (let i = 0; i < buttonNumber; i++) {

        let button = document.createElement("button");
        button.innerHTML = `button number ${i+1}`;
        button.setAttribute("class", 'btn btn-info m-2');
        button.onclick = function() {
            alert(`button number ${i+1}`);
        };
        document.getElementById("result").appendChild(button);
    }
}
createFiveButton();