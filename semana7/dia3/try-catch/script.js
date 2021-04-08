// try-catch
//es para construir codigo seguro

// let variable_ejemplo = 45

// try{
//     console.log(variable_ejemplo * 1000)
// }catch(error){
//     console.log(error)
// }

// let edad = prompt("ingresa tu edad")

// try{
//     if(isNaN(+edad)){
//         throw new Error("No es un numero")
//     }
//     console.log("felicitaciones, tienes ", edad)
// }catch(error){
//     console.log(error)
// }

// let year = prompt("ingresa tu año de nacimiento")

// try{
//     if(isNaN(+year)){
//         throw new Error("Hey, este no es un dato valido")
//     }
//     if(+year <= 1960){
//         throw new Error("Hey, tienes mas de 60 años!")
//     }
//     console.log(`tienes ${2021-year}, adelante, puedes pasar`)
// }catch(error){
//     console.log(error)
// }

const binomio = async (a,b)=>{
    async function parte1(){
        let pa1 = a**2
        return pa1 ? pa1 : Error("error")
    }
    async function parte2(){
        let p2 = a*b*2
        return p2 ? p2 : Error("error")
    }
    async function parte3(){
        let p3 = b**2
        return p3 ? p3 : Error("error")
    }
    const resultado1 = await parte1()
    const resultado2 = await parte2()
    const resultado3 = await parte3()

    return `Resultado : ${resultado1 + resultado2 + resultado3}`
    }

let num1 = prompt("ingrese a")
let num2 = prompt("ingrese b")

try{
    if(isNaN(+num1)){
        throw new Error("por favor, ingresa un numero valido en a")
    }
    if(isNaN(+num1)){
        throw new Error("por favor, ingresa un numero valido en b")
    }
    binomio(num1,num2).then((valor) =>{
        console.log(valor)
    })
}catch(error){
    console.log(error)
}