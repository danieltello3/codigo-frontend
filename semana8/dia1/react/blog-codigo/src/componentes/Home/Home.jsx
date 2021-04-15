// react, es una libreria que me permite hacer interfaces graficas

// basada en componentes funcionales (funciones que generan una pieza de codigo de UI)
//ej. un navbar, un footer, un Home

//react usa jsx, que es javascript con "superpoderes" o le agregan a la sintaxis de javascript ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript)) y la interfaz de usuario (UI) que es el html.
//es mantenido por facebook
//usa una sintaxis basada en XML

import React, { useState, useEffect } from "react";
import ListaBlog from "../ListaBlog/ListaBlog";
import "./index.css";

const Home = () => {
   //un hook es una funcion que la uso desde la libreria de React
   //useState es una funcion que me permite observar los cambios de valor de una propiedad(variable)
   //toma dos parametros, una constante que es el valor que tendra los cambios
   //y una funcion que me permitira actualizar esa constante
   //debo pasarle un valor inicial

   const [blogs, setBlogs] = useState(null);
   const [estaPendiente, setPendiente] = useState(true)

   const eliminarPost = (ID) => {
      setBlogs(blogs.filter((blog) => blog.id !== ID));
   };

   useEffect(()=>{
      setTimeout(()=>{
         fetch("http://localhost:8000/blogs")
         .then(res => {
            return res.json();
         })
         .then((data) => {
            setBlogs(data);
            setPendiente(!estaPendiente);
         })
      }, 2000)
   }, [])
   return (
      <>
         {estaPendiente && <p>Cargando...</p>}
         <div className="container">
            {blogs?.map((blog) => (
               <ListaBlog
                  blog={blog}
                  key={blog.id}
                  eliminarPost={()=>eliminarPost(blog.id)}
               />
            ))}
         </div>
      </>
   );
};

export default Home;
