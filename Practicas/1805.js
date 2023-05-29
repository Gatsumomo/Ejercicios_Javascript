// + 1705.js 
//RESUMEN - REPASO
const array = [1,2,3,4]
const firstElement = array.shift() //quita el primer elemento y lo devuelve
console.log(firstElement + ' - valor del elemento eliminado')
console.log(array + ' - array | shift')
console.log("-----------------")

const array1 = [3,4,5] 
const addingInFirst = array1.unshift(1,2) //agrega al principio y devuelve el numero de elementos del array mutado
console.log(addingInFirst + ' - tamaño del array mutado')
console.log(array1  + ' - array | unshift')
console.log("-----------------")

const array2 = [1,2,3]
const addingInLast = array.push() //agrega al final del array y devuelve el numero de elementos del array mutado
console.log(addingInLast + ' - tamaño del array mutado')
console.log(array2  + ' - array | push')
console.log("-----------------")

const array3 = [1,2,3,4]
const elements = array3.splice(2,1,'tres') //elimina o reemplaza (en este caso) - (indice,cantidad de elementos a eliminar, valor a reemplazar)
console.log(elements + ' - valor del elemento eliminado')
console.log(array3 + ' - array | splice')
console.log("-----------------")

const array4 = [1,'2','3',4]
const elements4 = array4.splice(1,2,'dos','tres') //elimina o reemplaza (en este caso) - (indice,cantidad de elementos a eliminar, valor a reemplazar)
console.log(elements4 + ' - valores de los elementos eliminados')
console.log(array4 + ' - array | splice')
console.log("-----------------")

const array5 =[1,2,3,4,5,6,7,8,9]
console.log(array5 + ' - array original')
delete(array5[3]) //elimina el valor de la POSICION/INDICE indicado
console.log(array5 + ' - posicion/indice 3: EMPTY | delete') //posicion 3 empty
console.log(array5[3] + ' - intento de acceder a la posicion eliminada | delete') //sale undefined
console.log("-----------------")

const personajes = ['Yuuji','Megumi','Satoru','Nobara','Maki']
const resultado = personajes.filter(personaje => personaje != 'Yuuji') //va recorriendo mientra sea distinto, cuando es igual SALTA
console.log(personajes + ' - array original')
console.log(resultado + ` - array sin 'Yuuji' | filter`) //muestra todos los personajes MENOS Yuuji
console.log("-----------------")

const personajes1 = ['Yuuji','Megumi','Satoru','Nobara','Maki']
var index = personajes1.indexOf('Yuuji')
console.log(personajes1 + ' - array original')
console.log(index + ` - posicion/indice del elemento 'Yuuji' | indexOf`)
console.log("-----------------")

//SORT con cadenas - no funciona en todos los navegadores
const colors = [
    "blue",
    "didle",
    "coconut",
    "arctic",
    "gray",
    "fucsia"
]
console.log(colors.join() + ' - array original')
colors.sort((a,b) => a.localeCompare(b)) //a y b es una convencion mas que otra cosa, sin mas 
console.log(colors.join() + ' - array ordenado | sort + localeCompare')
console.log("-----------------")

//SORT con numeros - ordena en base al primer digito de cada numero (Malfunction)
//a nivel de unicode
const input = [1,30,4,21,100000]
console.log(input + ' - array original')
input.sort()
console.log(input + ' - array ordenado (version no soportada) | sort') 
console.log("-----------------")

/*con localeCompare te aseguras que sirva en todos los navegadores*/

//Ascendente - sort con numeros
const ascendente = [1,30,4,21,100000]
console.log(ascendente.join() + ' - array desordenado')
ascendente.sort((a,b) => a - b)
console.log(ascendente.join() + ' - array ordenado - ascendente| sort')
console.log("-----------------")

//Descendente - sort con numeros
const descendente = [1,30,4,21,100000]
console.log(descendente.join() + ' - array desordenado')
descendente.sort((a,b) => a + b)
console.log(descendente.join() + ' - array ordenado - descendente| sort')
console.log("-----------------")

//SORT de objetos segun sus propiedades
const orders = [
    {
        total: 123,
        nombre: 'Ariana',
    },
    {
        total: 12,
        nombre: 'Marco',
    },
    {
        total: 23,
        nombre: 'Polo',
    },
]
const kk = orders.sort((a,b) => a.total + b.total)
console.log(kk + ` - propiedades ordenadas (total) | sort`)
console.log("-----------------")

const orders2 = [
    {
        total: 123,
        nombre: 'Ariana',
    },
    {
        total: 12,
        nombre: 'Marco',
    },
    {
        total: 23,
        nombre: 'Polo',
    },
]
const cc = orders2.sort((a,b) => a.total - b.total)
console.log(cc + ` - propiedades ordenadas (total) | sort`)
console.log("-----------------")

