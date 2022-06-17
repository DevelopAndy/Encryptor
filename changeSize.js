const container = document.querySelector(".container"),
      logo = document.querySelector(".logo"),
      textarea = document.querySelector("#textarea-encrypt"),
      rightRectangle = document.querySelector("#right-rectangle"),
      buttons = document.querySelector(".left-buttons"),    
      mediumBp = matchMedia("(max-width:768px)"),
      shortBp = matchMedia("(max-width:375px)");

mediumBp.addListener(changeSize);
shortBp.addListener(changeSize);

function changeSize(mql,Chght,Btop,Rtop,Rhght,Ltop,Ttop,Thght)
{
    if (mql.matches === true) 
    {
        container.style.height = Chght;
        buttons.style.top = Btop;
        rightRectangle.style.top = Rtop;
        rightRectangle.style.height = Rhght;
        logo.style.top = Ltop
        textarea.style.top = Ttop;
        textarea.style.height = Thght;
    }
}