let display= document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("btn"));
console.log(buttons);


buttons.map( button =>{
    button.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText="";
                break;
            case '=':
                try{
                    display.innerText= eval(display.innerText);
                }
                catch{
                    display.innerText="Error";
                }
                break;
            case 'CE':
                display.innerText= display.innerText.slice(0, -1);
                break;
            case '%':
                display.innerText= display.innerText/100;
                break;
            case 'sin':
                display.innerText= Math.sin(display.innerText);
                break;
            case 'cos':
                display.innerText= Math.cos(display.innerText);
                break;
            case 'tan':
                display.innerText= Math.tan(display.innerText);
                break;
            case 'e':
                display.innerText= Math.E;
                break;
            case 'π':
                display.innerText+= Math.PI;
                break;
            case 'log':
                display.innerText= Math.log(display.innerText);
                break;
            case '√':
                display.innerText= Math.sqrt(display.innerText);
                break;
            case 'x²':
                display.innerText= Math.pow(display.innerText, 2);
            case 'x!':
                display.innerText= Math.factorial(display.innerText);
                break;
            default:
                display.innerText+=e.target.innerText;

            
        }
    });
});