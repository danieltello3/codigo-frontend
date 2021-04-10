import React,{useState} from "react";
import Publicacion from "../Publicacion/Publicacion";

const Content = () => {
   const [likes, aumentarLikes] = useState(0)

   const manejarAumentoDeLikes = ()=>{
      aumentarLikes(likes + 1)
   }
   const [entradas, setEntradas] = useState([
      {
        titulo: "lomo saltado",
        body: "Unos de los platos emblematicos de Peru",
        chef: "Rolando",
        id: "1",
      },
      {
        titulo: "pollito a la brasa",
        body: "Otro de los platos emblematicos de Peru",
        chef: "Andrea",
        id: "2",
      },
      {
        titulo: "ceviche",
        body: "Otro de los platos emblematicos de Peru",
        chef: "Miguel",
        id: "3",
      },
    ]);

    const arrayObjetos= [
       {titulo:"mi titulo 1", parrafo: "es un texto de prueba 1"},
       {titulo:"mi titulo 2", parrafo: "es un texto de prueba 2"},
       {titulo:"mi titulo 3", parrafo: "es un texto de prueba 3"}
      ]
   let tesorosPerdidos = [
         {
           nombre: "cofre del tesoro",
           valor: 100000000,
           pais: "costa rica",
         },
         {
           nombre: "santo grial",
           valor: 1000000000,
           pais: "israel",
         },
         {
           nombre: "quipu",
           valor: 100000,
           pais: "peru",
         },
       ];
   return (
      <>
         <div>
            <h3>Bienvenidos a mi publicacion</h3>
            <p style={{ width: "50%" }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Corporis, dolore labore! Quo laudantium doloribus iure accusamus
               nam ab, pariatur non sit, enim accusantium quisquam molestias,
               quasi amet quia autem distinctio?
            </p>
            
            <Publicacion />
            <button onClick={()=> manejarAumentoDeLikes()}>Contador de Likes</button>
            <p>{likes}</p>
            <div className="container" >
               <div className="row">
                  {entradas.map((entrada)=>(
                     <div className="card col-sm m-3" key={entrada.id}>
                        <div className="card-body">
                           <h3>Bienvenidos a mi publicacion</h3>
                           <h2 className="card-title">{entrada.titulo}</h2>
                           <p className="card-text">{entrada.body}</p>
                           <p className="card-footer">escrito por la chef: {entrada.chef}</p>
                        </div>
                        
                     </div>
                  ))}
               
               </div>
               
               
            </div>
            <div>
               {arrayObjetos.map((elemento)=>(
                  <div>
                     <h1>{elemento.titulo}</h1>
                     <p>{elemento.parrafo}</p>
                  </div>
               ))}
            </div>
            <div>
               {tesorosPerdidos.map((tesoro) => (
                  <div>
                     <h1>{tesoro.nombre}</h1>
                     <h3>{tesoro.valor}</h3>
                     <p>{tesoro.pais}</p>
                  </div>
               ))}
            </div>
            
         </div>
      </>
   );
};

export default Content;
