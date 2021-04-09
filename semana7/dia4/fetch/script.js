const url = "https://pokeapi.co/api/v2/pokemon/"

// fetch(url).then(respuesta => respuesta.json()).then(data => console.log(data.name))
/* <p>${data.id}</p>
        <p>${data.name}</p>
        <img src="${data.sprites.front_default}">
     */



let mostrarPokemon = (numero) => {
    fetch(url + numero).then(respuesta => respuesta.json()).then(data => {
        const pokemon = document.createElement("div")
        pokemon.innerHTML = `
        <div class="card m-3" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">el ID de este pokemon es: #${data.id} </p>
            </div>
        </div>`
        document.getElementById("pokemones").appendChild(pokemon)
    }).catch(error => new Error(error.message))
}

mostrarPokemon(4)
mostrarPokemon(5)
mostrarPokemon(6)

const generadorPokemones = async (idPokemon) => {
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        const data = await respuesta.json()
        const elemento = document.getElementById("pokemonesGenerados")
        elemento.innerHTML = `
        <div class="card m-3" style="width: 18rem;">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">el ID de este pokemon es: #${data.id} </p>
            </div>
        </div>`
    }catch(error){
        console.log(error)
    }
}

generadorPokemones(9)


//con axios

const generadorPokemonesAxios = async (nombrePokemon) => {
    try{
        const respuesta = await axios(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        const elemento = document.getElementById("pokemonesGeneradosAxio")
        elemento.innerHTML = `
                
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ${respuesta.data.name}
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Apareció un ${respuesta.data.name} salvaje</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src="${respuesta.data.sprites.front_default}" style="width: 300px" class="card-img-top" alt="...">
            <p>#${respuesta.data.id}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ya lo tengo</button>
                <button type="button" class="btn btn-primary">Atrapar</button>
            </div>
            </div>
        </div>
        </div>`
    }catch(error){
        console.log(error)
    }
}

generadorPokemonesAxios("pikachu")