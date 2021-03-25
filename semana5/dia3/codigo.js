//Objeto Date- para trabajar con fechas(time)

const ahora = new Date()

console.log(ahora)

const milisegundos = ahora.getTime();

console.log(milisegundos)

//fecha 0

const fechaCero = new Date(0)

const fechaUniversal = Date.UTC(ahora)

console.log(fechaCero)
console.log(fechaUniversal)

const fechaString = new Date("July 28 1821 12:00");

console.log(fechaString)

const anho = fechaString.getFullYear()

const mes = fechaString.getMonth()

const diaMes = fechaString.getDate()

const diaSemana = fechaString.getDay()

const hora = fechaString.getHours()


fechaString.setFullYear("1824")

console.log(fechaString)

// function obtenerEdad(anio){
    
//     const fechaActual = new Date()
//     const anioActual = fechaActual.getFullYear()

//     return (anioActual - anio);

// }

// console.log(obtenerEdad(1992))







function tiempoPasado(fecha){
    const date = new Date(fecha);
    const fechaActual = new Date()
    let diaActual = fechaActual.getDate()
    let mesActual = fechaActual.getMonth()
    let anioActual = fechaActual.getFullYear()
    if(diaActual < date.getDate()){
        mesActual--
        diaActual += 30
    }
    if(mesActual < date.getMonth()){
        anioActual--
        mesActual += 12
    }

    let dia = diaActual - date.getDate()
    let mes = mesActual - date.getMonth()
    let anio = anioActual - date.getFullYear()
    
    return `han pasado ${dia} dias, ${mes} meses y ${anio} años`
}

console.log(tiempoPasado("July 3 1992"))











