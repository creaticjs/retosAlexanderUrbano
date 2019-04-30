var num1=0;
var num2=0;
var opera;

function obtenerNum(numero){
    if(num1==0){
        num1=numero;
    }else{
        num1+=numero;    
    }
    refres();
}

function clean(){
    num1=0;
    num2=0;
    refres();
}

function operar(valor){
    if (num1==0){
        num1=parseFloat(document.getElementById("valNum").value);
    }
    num2=parseFloat(num1);
    num1=0;
    opera=valor;    
}

function result(){
    num1=parseFloat(num1);
    console.log("num1: "+num1)
    console.log("num2: "+num2)
    var res=0;
    switch(opera){
        case 1:
            res=num2+num1;
        break;
        case 2:
            res=num2-num1;
        break;
        case 3:
            res=num2*num1;
        break;
        case 4 :
            res=num2/num1;
        break;
    }
    document.getElementById("valNum").value=res;
}

function refres(){
    document.getElementById("valNum").value=num1;
}