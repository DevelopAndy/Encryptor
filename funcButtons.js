const buttonEncrypt = document.querySelector("#encrypt"),
      buttonDecrypt = document.querySelector("#decrypt"),
      buttonCopy = document.querySelector("#btn-copy");

buttonEncrypt.addEventListener("click", insertEncrypt);
buttonDecrypt.addEventListener("click", insertDecrypt);
buttonCopy.onclick = copyt;

let result = "";

function encryptDecrypt(e,e1,i,i1,a,a1,o,o1,u,u1)
{
    let content = textarea.value;

    const patternE = e;
    result = content.replace(patternE, e1);
    content = result;
            
    const patternI = i;
    result = content.replace(patternI, i1);
    content = result;

    const patternA = a;
    result = content.replace(patternA, a1);
    content = result;

    const patternO = o;
    result = content.replace(patternO, o1);
    content = result;

    const patternU = u;
    result = content.replace(patternU, u1);
    content = result;
}

function insertEncrypt()
{
    engine(encryptDecrypt(/e/g,"enter",/i/g,"imes",/a/g,"ai",/o/g,"ober",/u/g,"ufat"));    
}

function insertDecrypt()
{
    engine(encryptDecrypt(/enter/g,"e",/imes/g,"i",/ai/g,"a",/ober/g,"o",/ufat/g,"u"));
}

function copyt()
{
    let contentCopy= document.querySelector(".text-encrypted").innerHTML;
    navigator.clipboard.writeText(contentCopy);
    showDiv(notifyDiv);

    function hideNotify()
    {
        hideDiv(notifyDiv);
    }
   
    setTimeout(hideNotify, 1500);
}