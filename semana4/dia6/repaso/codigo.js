//recursividad



// while(mi_nombre.toLowerCase() !== "daniel"){
//     if(mi_nombre.toLowerCase() === "daniel"){
//         alert("Hey, adivinaste mi nombre!")
//         break
//     } else {
//         let match = prompt("Sigue intentando")
//         if(match.toLowerCase === "daniel"){
//             alert("Hey, adivinaste mi nombre!")
//             break
//         }
//     }
// }
// let mi_nombre = prompt("Adivina mi nombre")

//WHILE

// while(mi_nombre.toLowerCase() !== "daniel"){
//     mi_nombre = prompt("sigue intentando")
// }
// alert("hey adivinaste mi nombre")

//DO WHILE

// do {
//     mi_nombre = prompt("sigue intentando")
//     if(mi_nombre === "daniel"){
//         alert("hey adivinaste mi nombre")
//     }
// }while(mi_nombre.toLowerCase() !== "daniel")


//RECURSIVIDAD

function adivinaNombre(mi_nombre){
    mi_nombre = prompt("Adivina mi nombre")
    if(mi_nombre === "daniel"){
        alert("HEY! Adivinaste mi nombre")
        return
    }
    adivinaNombre(mi_nombre)
}

adivinaNombre()
