//Funcion constructora
function auto(brand,model,year){
    this.marca = brand,
    this.modelo = model,
    this.año = year,
    this.detalle = function(){
        console.log(`Auto ${this.modelo} del ${this.año}`)
    }
}

//diapositiva 40-41 - ORDINOGRAMAS - inicio-final - impreso - entrada-manual - simbolo del conector - lineas

//instancia de auto
var miAuto = new auto("Toyota","Corolla","2023")
console.log(miAuto)