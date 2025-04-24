console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

//variables//
let edad = 30
let edad2 = 35
var Nombre = "Juan"
const RUT = "17.389.651-4"

//tipos de datos//
let texto = "esto es un texto"
let numero = 2
let EsEstudiante = true
let nulo = null
let indefinido;

let a = 10 + 5

let numero1 = 10
let numero2 = 5
let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let modulo = numero1 % numero2  //resto de division//
let potencia = numero1 ** numero2

//imprimir llamado//
console.log(RUT)
console.log(EsEstudiante)
console.log(indefinido)
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(potencia)

//estructura de control - if else//

let nota = 92
if(nota >= 90) {
    console.log("muy buena nota")
} else if(nota >= 50) {
    console.log("nota normal")
} else {
    console.log("reprobado")
}

//bucle//
for (let indice = 0; indice < 10; indice++ ) {
    console.log("indice =", indice)
}

//manipulacion del DOM //

const div_text = document.getElementById("div_text")
div_text.innerHTML = "<p>Hola desde JS</p>"

const div = document.getElementById("div")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    div.style.display = 'none'
})

btn2.addEventListener("click", () => {
    div.style.display = ''
})

$("p").click(function(){
    $(this).hide(4000)
    $(this).fadeIn(4000)
})

$("#boton").click(function(){
    $("#parrafo").css({
        'weight':'400px',
        'background-color':'#008000',
        'color':'#ffffff'
    })
})