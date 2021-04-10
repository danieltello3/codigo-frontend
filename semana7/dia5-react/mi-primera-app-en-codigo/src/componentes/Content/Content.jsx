import React from "react";
import Publicacion from "../Publicacion/Publicacion";

const Content = () => {
   return (
      <>
         <div>
            <h3>Bienvenidos a mi publicacion</h3>
            <p style={{ width: "400px" }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Corporis, dolore labore! Quo laudantium doloribus iure accusamus
               nam ab, pariatur non sit, enim accusantium quisquam molestias,
               quasi amet quia autem distinctio?
            </p>
            
            <Publicacion />
            
         </div>
      </>
   );
};

export default Content;
