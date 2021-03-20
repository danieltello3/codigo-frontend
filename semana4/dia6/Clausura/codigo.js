

function ejemplo(){
    let texto = "texto inicial"

    function mostrarTexto(){
        alert(texto)
    }
    mostrarTexto()
}

function sumadoraDeNumeros(x){
    // return function(y) {
    //     return x + y
    // }
    return (y) => x + y;
}


let suma5 = sumadoraDeNumeros(5)

console.log(suma5(2))
