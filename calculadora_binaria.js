var operando1;
var operando2;

function operando(opString){
    var element = document.getElementById('display');
    element.innerHTML = opString;
};

function mas(){
    var display = document.getElementById('display');
    
    if (display.innerHTML == ""){
        alert ("No has introducido primer sumando");
    }else{
        operando1 = parseInt(display.innerHTML);
        display.innerHTML = ("");
    }
}; 

function igual(){
    var display = document.getElementById('display');
    
    if (display.innerHTML == ""){ 
        alert ("No has introducido segundo sumando");
    }else{
        operando2 = parseInt(display.innerHTML);
        var resultado = suma (operando1, operando2);        
        display.innerHTML = (resultado);
    }
};

function suma(op1, op2){
    return op1 | op2;
}; 
