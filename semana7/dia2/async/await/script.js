//funcion asincrona
async function myfunction() {
    return 23
}

//funcion flecha asincrona
const otraFuncion = async () => 42;


console.log(myfunction())

otraFuncion().then(valor => {
    console.log(valor)
})

const valor = otraFuncion();
console.log(valor);

async function obtenerValor() {
  const value = await otraFuncion();
  return value;
}

console.log(obtenerValor);


const sumaNum = async (a, b) => {
    try {
      return await a + b;
    } catch {
      return Error("Hey!!, no es una operacion valida");
    }
  };
  
  sumaNum(2, 8).then((valor) => {
    console.log(valor);
  });


//binomio con async/await


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
const respuesta = binomio(2,3)
console.log(respuesta)
console.log(binomio(4,2))


async function mostrarNombres(primerNombre,segundoNombre,apellidoPaterno,apellidoMaterno){
    async function devolverPrimerNombre(){
        return primerNombre
    }
    async function devolverSegundoNombre(){
        return segundoNombre
    }
    async function devolverApellidoPaterno(){
        return apellidoPaterno
    }
    async function devolverApellidoMaterno(){
        return apellidoMaterno
    }

    const pNomb = await devolverPrimerNombre();
    const sNomb = await devolverSegundoNombre();
    const apPat = await devolverApellidoPaterno();
    const apMat = await devolverApellidoMaterno();

    return `Mi nonmbre completo es: ${pNomb} ${sNomb} ${apPat} ${apMat}`
}

console.log(mostrarNombres("Percy","Daniel","Tello","Castillo"))

mostrarNombres("Percy","Daniel","Tello","Castillo").then((valor)=>{
    console.log(valor)
})

const trinomio = async (a,b,c)=>{
    async function alCuadrado(x){
        let p1 = x**2
        return p1 ? p1 : Error("error")
    }
    async function multiplo2(x,y){
        let p4 = 2*x*y
        return p4 ? p4 : Error("error")
    }
    const res1 = await alCuadrado(a)
    const res2 = await alCuadrado(b)
    const res3 = await alCuadrado(c)
    const res4 = await multiplo2(a,b)
    const res5 = await multiplo2(b,c)
    const res6 = await multiplo2(a,c)

    return `Resultado : ${res1 + res2 + res3 + res4 + res5 + res6}`
    }

console.log(trinomio(2,3,4))