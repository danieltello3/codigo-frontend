let condicion = true;

if (condicion) {
   console.log("el valor es verdadero");
} else {
   console.log("el valor es falso");
}
let frase = "s";

switch (frase) {
   case "susy":
      console.log("frase de susy");
      break;
   case "chupetin":
      console.log("frase chupetin");
      break;
   case "personaje":
      console.log("frase generica");
      break;
   default:
      console.log(
         "imprime una frase por defecto, si no se cumple otra condicion"
      );
}

let comida = "col"
switch(comida){
    case "hamburguesa":
        console.log("Mi favorito!!");
        break;
    case "pizza":
        console.log("peperoni por favor!");
        break;
    case "verduras":
    case "col":
    case "cebolla":
        console.log("no me gusta!");
        break;
    default:
        console.log("no conozco esa comida")

}