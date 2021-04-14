import React from "react";

const ListaBlog = (props) => {
   const blog = props.blog;
    const ID = props.id
    const eliminarPost = props.eliminarPost

   return (
      
            <div key={blog.id} className="blog">
               <h2>{blog.titulo}</h2>
               <p className="autor">Escrito por: {blog.autor}</p>
               <div className="subContainer">
                  <img src={blog.url} alt="" className="imagen" />
                  <p className="body">{blog.body}</p>
               </div>
               <button onClick={()=>eliminarPost(ID)}>Eliminar Post</button>
            </div>
        
   );
};

export default ListaBlog;
