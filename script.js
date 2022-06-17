const notifyDiv = document.querySelector(".copy-notify"), //we notify that the text has been copied
      divEncrypted = document.querySelector("#not-found"); //class to hide any div 

let newDiv = false; //check if a new div exists

// Show any div by removing the class "hide"
function showDiv(obj)
{
    obj.classList.remove("hide-div");
}

// Hide any div by adding the class "hide"
function hideDiv(obj)
{
    obj.classList.add("hide-div");
}

// principal function
function engine(funct)
{ 
    const validateText = textarea.value; //we capture the content of the textarea

    //if textarea have any characters, then, to hide the not found image and to create a new div
    if (validateText.length > 0)
    {
        hideDiv(divEncrypted); //hide everything in divEncrypted
        
        // validate if no new div exists
        if (newDiv === false)
        {
            changeSize(mediumBp,"115%","56.59%","69.5%","29%"); //change size if the screen is smaller than 768px
            changeSize(shortBp,"211%","49%","63.5%","35%","1.1%","9.29%","36%"); //change size if the screen is smaller than 375px

            funct;  //encrypt or decrypt
            createDiv(); //cretae a new div 
            newDiv = true; //a new div already exists
        }
        else //if a div already exist, then remove the div, do the function and recreate the new div
        {
            removeDiv();
            funct;
            createDiv();
        }
    }    
    else 
    {
        //if a div already exists, then remove the div, show the "not found" div, and hide copy button
        if (newDiv === true)
        {
            changeSize(mediumBp,"100%","65%","80%","15.4%"); //change size if the screen is smaller than 768px
            changeSize(shortBp,"115%","50%","77%","19%","2%","17%","300px"); //change size if the screen is smaller than 375px

            removeDiv();
            showDiv(divEncrypted);
            hideDiv(buttonCopy);
            newDiv = false;
        }
    }
}