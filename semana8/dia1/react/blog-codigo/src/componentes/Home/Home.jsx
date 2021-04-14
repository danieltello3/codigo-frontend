// react, es una libreria que me permite hacer interfaces graficas

// basada en componentes funcionales (funciones que generan una pieza de codigo de UI)
//ej. un navbar, un footer, un Home

//react usa jsx, que es javascript con "superpoderes" o le agregan a la sintaxis de javascript ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript)) y la interfaz de usuario (UI) que es el html.
//es mantenido por facebook
//usa una sintaxis basada en XML

import React, { useState } from "react";
import ListaBlog from "../ListaBlog/ListaBlog";
import "./index.css";

const Home = () => {
   //un hook es una funcion que la uso desde la libreria de React
   //useState es una funcion que me permite observar los cambios de valor de una propiedad(variable)
   //toma dos parametros, una constante que es el valor que tendra los cambios
   //y una funcion que me permitira actualizar esa constante
   //debo pasarle un valor inicial

   const [blogs, setBlogs] = useState([
      {
         titulo: "Nuevos proyectos de los alumnos de codiGo",
         body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti repellat velit laudantium assumenda minus maiores quam ut, eos ad, dolor nobis sint corporis. Hic minima quidem debitis nemo illum.",
         autor: "Daniel Tello",
         url:
            "https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
         id: 1,
      },
      {
         titulo: "Nuevos proyectos de los alumnos de codiGo",
         body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti repellat velit laudantium assumenda minus maiores quam ut, eos ad, dolor nobis sint corporis. Hic minima quidem debitis nemo illum.",
         autor: "Daniel Tello",
         url:
            "https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
         id: 2,
      },
      {
         titulo: "Nuevos proyectos de los alumnos de codiGo",
         body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti repellat velit laudantium assumenda minus maiores quam ut, eos ad, dolor nobis sint corporis. Hic minima quidem debitis nemo illum.",
         autor: "Beto",
         url:
            "https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
         id: 3,
      },
   ]);
   const eliminarPost = (ID) => {
      setBlogs(blogs.filter((blog) => blog.id !== ID));
   };
   return (
      <div className="container">
         {blogs?.map((blog) => (
            <ListaBlog
               blog={blog}
               key={blog.id}
               eliminarPost={()=>eliminarPost(blog.id)}
            />
         ))}
      </div>
   );
};

export default Home;
