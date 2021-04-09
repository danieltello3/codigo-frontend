console.log("Hola Mundo!")

const librero = require("./libros")

console.log(librero)

librero.map((libro) => console.log(libro))


let cowsay = require("cowsay")

console.log(cowsay.say({
    text: "Hola Muuuuuuuundoooooo",
    e: "^O",
    T: "U"
}))


// const generadorPokemones = async (idPokemon) => {
//     try{
//         const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
//         const data = await respuesta.json()
        
//         console.log(data.name)
//     }catch(error){
//         console.log(error)
//    }
// }

// generadorPokemones(25)

