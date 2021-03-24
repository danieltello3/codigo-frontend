//OBJETOS

// es un coleccion de propiedades

//una propiedad esta compuesta de llaves(key) y valores(Value)
//es un tipo de datos


// MiObjeto.nombreDeLaPropiedad // asi se accede a la propiedad de un objeto

let miObjeto = new Object();

miObjeto.propiedad1 = "es un objeto";
miObjeto.propiedad2 = "es otra propiedad";
miObjeto.propiedad3 = "es otra propiedad del objeto";


let miObjeto2 = {
    propiedad1 : "daniel",
    propiedad2 : 3,
    propiedad3 : "cafe"
}


console.log(miObjeto2["propiedad1"])
console.log(miObjeto.propiedad1)

let comida_favorita = new Object();

comida_favorita.nombre = "Lomo saltado"
comida_favorita.costo = 20
comida_favorita.rating = [1,2,3,4,5]
comida_favorita.estaDisponible = true;

comida_favorita["nombre"] = "pizza"

console.log(comida_favorita["nombre"])

miObjeto2.nombre = "Percy"

console.log(miObjeto2.nombre)

//este es la manera standar de usar un objeto en javascript(json)

let Perro = {
    raza : "Beagle",
    color : "tricolor",
    origen : "Inglaterra"
}

function mostrarPropiedades(objeto, propiedadObjeto){
    let resultado = ""
    for(let elemento in objeto){
        if(objeto.hasOwnProperty(elemento)){
            resultado += `${propiedadObjeto}.${elemento} = ${objeto[elemento]} \n`
        }
    }
    return resultado;
}

let imprimir = mostrarPropiedades(Perro, "Perro")

console.log(imprimir)

function mostrarNombrePropiedades(objeto){
    let resultado =""
    for(elemento in objeto){
        resultado += `${elemento} \n`
    }
    return resultado
}

console.log(mostrarNombrePropiedades(Perro))

//funcion que muestre valores de cada elemento

function mostrarValores(objeto){
    let resultado = ""
    for(let elemento in objeto){
        resultado += `${objeto[elemento]} \n`
    }
    return resultado
}

console.log(mostrarValores(miObjeto))

function carro(marca,modelo,anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

let mechita = new carro("Mechita benz","c200","2077")

console.log(mechita.anio,mechita.modelo,mechita.marca)