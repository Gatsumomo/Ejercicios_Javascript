const numero = document.getElementById('notita').innerHTML=texto;

function calculo(numero){
    if((numero>=0) && (numero<=20)){
        if(numero>=10){
            console.log("Felicidades, has aprobado")
        }else{
            console.log("Hey hey pequeña no digas eso eres preciosa")
        }
    }else{
        console.log("ERROR-Introduce una nota válida");
    }
}
