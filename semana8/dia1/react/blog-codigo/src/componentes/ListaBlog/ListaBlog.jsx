import { Button, Flex, Image } from "@adobe/react-spectrum";
import React from "react";
import NotFound from '@spectrum-icons/illustrations/NotFound';
import { IllustratedMessage } from "@react-spectrum/illustratedmessage";


const ListaBlog = (props) => {
   const blog = props.blog;
   const ID = props.id
   const obtenerDetalle = props.redirigirRuta
   //  const eliminarPost = props.eliminarPost

   return (
      
            <div key={blog.id} className="blog">
               <h2>{blog.titulo}</h2>
               <p className="autor">Escrito por: {blog.autor}</p>
               <div className="subContainer">
                  {blog.url ? 
                     (<Image src={blog.url} objectFit="cover" height='size-3000' className="imagen" />) : 
                     (<IllustratedMessage><NotFound /></IllustratedMessage>)}
               </div>
               <Button variant="cta" width='size-2000' marginEnd='size-800' marginTop='size-200' alignSelf='flex-end' onPress={()=> obtenerDetalle(ID)}>Leer Post</Button>
               {/* <button onClick={()=>eliminarPost(ID)}>Eliminar Post</button> */}
            </div>
        
   );
};

export default ListaBlog;
