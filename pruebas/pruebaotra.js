var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function(){
        console.log(`Auto ${miAuto.marca} del ${miAuto.año}`)
    }
}

//creacion de instancias
var otroAuto = {
    marca: "BMW",
    modelo: "Nill",
    "año": 2023,
    detalle: function(){
        console.log(`Auto ${this.marca} del ${this.año}`)
    }
}

//llamar propiedades del objeto - sirve para nombres simples, no compuestos "marca coche"
console.log(miAuto.marca + ' ' + miAuto.modelo + ' ' + miAuto.año + ' ' + miAuto.detalle())
console.log("----------------------")


//otra opcion
console.log(miAuto["marca"] + ' ' + miAuto["modelo"] + ' ' + miAuto["año"] + ' ' + miAuto["detalle"]())
console.log("----------------------")

//array
var array = [1,2,3,4,5,6,7,8,9]
console.log(array["length"])
console.log("----------------------")

console.log(array.length) //mas practica y rapida
console.log("----------------------")

//añadir propiedades
miAuto.color = "rojo" //miAuto["color"] = "rojo"
console.log(miAuto)
console.log("----------------------")

//Modificar propiedades
miAuto["marca"] = "Ford" //miAuto.marca = "Ford"
console.log(miAuto)
console.log("----------------------")

//eliminar propoedades
delete miAuto["marca"]
console.log(miAuto)
console.log("----------------------")

miAuto["marca"] = "Ford" //se vuelve añadir 
console.log(miAuto)
console.log("----------------------")

//llamar a otroAuto
console.log(otroAuto.marca + ' ' + otroAuto.modelo + ' ' + otroAuto.año + ' ' + otroAuto.detalle())
console.log("----------------------")

