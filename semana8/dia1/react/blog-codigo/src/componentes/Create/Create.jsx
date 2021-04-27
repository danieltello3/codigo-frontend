import React, { useState } from "react";
import { firestore } from "../../Firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Create = () => {
   const [titulo, setTitulo] = useState("");
   const [body, setBody] = useState("");
   const [autor, setAutor] = useState("");
   const [url, setUrl] = useState();

   const enviarInfo = (event) => {
      event.preventDefault();
      const blog = { titulo, body, autor, url };

      firestore
         .collection("blogs")
         .add(blog)
         .then(() =>
            MySwal.fire(
               `El bog ${titulo} de ${autor}`,
               "fue creado exitosamente",
               "success"
            )
         ).catch((err) => MySwal.fire(
            `eroor`,
            "no se pudo crear el blog",
            "error"
         ));
         setTitulo("")
         setAutor("")
         setBody("")
         setUrl("")
         
   };

   return (
      <div>
         <h2>Agregar un nuevo blog</h2>
         <form onSubmit={enviarInfo}>
            <div>
               <label htmlFor="">titulo del blog: </label>
               <input
                  type="text"
                  required
                  value={titulo}
                  onChange={(element) => setTitulo(element.target.value)}
               />
            </div>
            <div>
               <label htmlFor="">Autor: </label>
               <input
                  type="text"
                  required
                  value={autor}
                  onChange={(element) => setAutor(element.target.value)}
               />
            </div>
            <div>
               <label htmlFor="">Contenido: </label>
               <input
                  type="text"
                  required
                  value={body}
                  onChange={(element) => setBody(element.target.value)}
               />
            </div>
            <div>
               <label htmlFor="">Url: </label>
               <input
                  type="text"
                  required
                  value={url}
                  onChange={(element) => setUrl(element.target.value)}
               />
            </div>
            <button type="submit">Post</button>
         </form>
      </div>
   );
};

export default Create;
