//FUNCIONES

function sumar(numero1,numero2){
    console.log(numero1+numero2)
    let total = numero1 + numero2
    let ponerHtml = document.write(`<p>${total}</p>`)
    return ponerHtml
}

sumar(4,8)

function cuadratica(a,b,c){
    let x1 = (((b*-1)+((b**2)-(4*a*c))**0.5)/ 2*a)
    let ponerHtml = document.write(`<h1>la respuesta x1 es = ${x1}</h1>`)
    return ponerHtml
}

cuadratica(1,7,12)

function cuartaPotencia(num1,num2){
    let pot = num1**4 + 4*(num1**3)*num2 + 6*(num1**2)*(num2**2) + 4*num1*(num2**3) + num2**4
    let respuesta = document.write(`<h1> ${pot}</h1>`)
    return respuesta
}

cuartaPotencia(3,5)


//recursividad

    //while

// let x = 0

// while(x<10){
//     console.log(x)
//     x++
// }

    //recursiva

function recursividad(x){
    if(x>=10){
        return;
    }
    console.log(x)
    recursividad(x + 1)
}

recursividad(2)

//funciones anidadas

function sumarCuadrados(a,b){
    function cuadrado (x){
        return x*x
    }
    return cuadrado(a) + cuadrado(b)
}

console.log(sumarCuadrados(4,3))

//ejercicio

function binomioCuarta(a,b){
    function cuadrado (x){
        return x**2
    }
    function cuarta(x){
        return x**4
    }
    function cubo(x){
        return x**3
    }
    return cuarta(a)+ 4*cubo(a)*b + 6*cuadrado(a)*cuadrado(b) + 4*a*cubo(b) + cuarta(b)
}

console.log(binomioCuarta(2,6))

function saludo_compuesto(mensaje1,mensaje2){
    function mostrar_saludo1(mensaje1){
        return mensaje1
    }

    function mostrar_saludo2(mensaje2){
        return mensaje2
    }
    return mostrar_saludo1(mensaje1) + " " + mostrar_saludo2(mensaje2)
}

console.log(saludo_compuesto("hola","que tal"))

//repaso JSON
let persona = {
    nombre: "Daniel",
    apellido: "Tello",
    edad: 28
}

console.log(typeof(persona.edad))

//typeOf

