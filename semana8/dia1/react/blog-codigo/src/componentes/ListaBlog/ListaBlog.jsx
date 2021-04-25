import React from "react";
import './ListaBlog.scss'
import { motion } from "framer-motion"

const ListaBlog = (props) => {
   const blog = props.blog;
   const ID = props.id
   const obtenerDetalle = props.redirigirRuta
   //  const eliminarPost = props.eliminarPost

   return (
            
            <div key={blog.id} className="blog">
               <h2>{blog.titulo}</h2>
               <p className="blog__autor">Escrito por: {blog.autor}</p>
               <div className="blog__subContainer">
                  <img src={blog.url} alt="" className="blog__subContainer__imagen" />
                  {/* <p className="body">{blog.body}</p> */}
               </div>
               <motion.button className="blog__button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=> obtenerDetalle(ID)}>
               Ir a detalle
               </motion.button>
               {/* <button onClick={()=>eliminarPost(ID)}>Eliminar Post</button> */}
            </div>
        
   );
};

export default ListaBlog;
