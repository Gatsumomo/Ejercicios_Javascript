/* function peticion(){

    for(var i = 1;i<=10;){
        for(var j = 1;j<=10;){
            var multiplicacion = i * j
            console.log(i + ' x ' + j + ' = ' + multiplicacion)
        }
    }
    
} */

function peticion(){

    for(var i = 1;i<=10;i++){
        for(var j = 1;j<=10;j++){
                var multiplicacion = i * j
                var sintaxis = i + ' x ' + j + ' = '
                console.log(sintaxis + multiplicacion)
        }
        console.log("---------------------")
    }
    
}

peticion()