function createDiv()
{       
    let textEncrypted = document.createElement("div");
    textEncrypted.classList.add("text-encrypted");
    textEncrypted.textContent = result;

    rightRectangle.appendChild(textEncrypted);

    const Div = document.querySelector(".text-encrypted");

    if (shortBp.matches === true) {
        Div.style.height = "72%";
        Div.style.top = "5%";
    }

    //insert Copy Button in Div
    showDiv(buttonCopy);
}

function removeDiv()
{
    const Div = document.querySelector(".text-encrypted");
    Div.remove();
}