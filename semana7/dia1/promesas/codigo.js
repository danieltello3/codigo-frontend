
// let promesa = new Promise((resolve,reject) => {
//     if(condicion){
//         resolve("haz algo aca")
//     }else{
//         reject("no funciono")
//     }
// })


//promesas tienen 3 estados
//1. estado pendiente.
//2. fue resuelta (se cumplio)
//3. fue rechazada (no se cumplio)

let sumar = (x,y) => {
    return new Promise((resolve,reject)=>{
        let suma = x + y
        if(suma){
            resolve(suma)
        }else{
            reject(Error("Hey, no es una suma valida"))
        }
    })
}

let mult = (x,y) => {
    return new Promise((resolve,reject)=>{
        let mult = x * y
        if(mult){
            resolve(mult)
        }else{
            reject(Error("Hey, no es una multiplicacion valida"))
        }
    })
}

let div = (x,y) => {
    return new Promise((resolve,reject)=>{
        let div = x / y
        if(div){
            resolve(div)
        }else{
            reject(Error("Hey, no es una division valida"))
        }
    })
}
let mod = (x,y) => {
    return new Promise((resolve,reject)=>{
        let mod = x % y
        if(mod){
            resolve(mod)
        }else{
            reject(Error("Hey, no es una operacion valida"))
        }
    })
}
let restar = (x,y) => {
    return new Promise((resolve,reject)=>{
        let resta = x - y
        if(resta){
            resolve(resta)
        }else{
            reject(Error("Hey, no es una resta valida"))
        }
    })
}
console.log(sumar(1,2))
console.log(mult(4,2))
console.log(div(6,2))
console.log(mod(5,3))
console.log(restar(4,3))

// sumar(2,2).then((resultado)=>{
//     return restar(resultado,2)
// }).then((resultado2) => {
//     return mult(resultado2,5)
// }).catch((error)=>{
//     return error
// })
const binomio = (x,y) =>{
    let p1 = () => {
        return new Promise((resolve,reject)=>{
            let pot = x**2
            if(pot){
                resolve(pot)
            }else{
                reject(Error("no se pudo hacer la potencia"))
            }
        })
    }
    let p2 = () => {
        return new Promise((resolve,reject)=>{
            let p2 = x*y*2
            if(p2){
                resolve(p2)
            }else{
                reject(Error("no se pudo hacer la potencia"))
            }
        })
    }
    let p3 = () => {
        return new Promise((resolve,reject)=>{
            let p3 = y**2
            if(p3){
                resolve(p3)
            }else{
                reject(Error("no se pudo hacer la potencia"))
            }
        })
    }
    return p1().then((resultadop1) => {
        p2().then((resultadop2) => {
            p3().then((resultadop3)=>{
                console.log(resultadop1 + resultadop2 + resultadop3) 
            })
        })
    })
}


binomio(2,3)
