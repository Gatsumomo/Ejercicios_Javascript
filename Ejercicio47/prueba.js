function peticion(){
    var numero = 5

    let clave = true
    do{
        if(numero < 0){
            clave = false
            console.log('Nop, es negativo')
        }else{
            console.log('friendly reminder de que si introduces 0 paras de meter introducir numeros positivos :) ily')
            do{
                var doble = numero * 2
                console.log(doble)
            }while(!(numero === 0))
        }
    }while(clave === true)
}

peticion()

function otrapeticion(){
    
}