

//acceder a elemento por ID

const demoID = document.getElementById("demo")

demoID.style.border = "5px solid red"

//Acceder a elemento por Class

const DemoClass = document.getElementsByClassName("demo")

DemoClass[0].style.border = "2px dashed yellow"
DemoClass[1].style.border = "2px dashed brown"


function recorrerArray(array,valor){
    let i = 0
    while(i < array.length){
        array[i].style.border = valor
        i++
    }
}
recorrerArray(DemoClass, "3px dotted blue")


//Acceder a elemento por etiqueta

let demoTag = document.getElementsByTagName("article")

let k = 0
while(k < demoTag.length){
    demoTag[k].style.border = "10px solid orange"
    k++
}


const demoQuery = document.querySelector("#demo-query")

demoQuery.style.border = "2px solid green"

const demoQueryAll = document.querySelectorAll(".demo-queryall")

console.log(demoQueryAll)

demoQueryAll.forEach(elemento => {
    elemento.style.border = "1px solid pink"
})



//para usar for each en clases, usar Array.From

Array.from(DemoClass).forEach(elemento => {
    elemento.style.border = "3px solid pink"
})


//eventos

const demoTittle = document.getElementById("titulo")

demoTittle.addEventListener("click",() => {
    
    alert("me diste click")
})














