import React from "react";
import { Card } from 'antd';
import not_found from './../../assets/images/notFound.jpg'

const { Meta } = Card;

const ListaBlog = (props) => {
   const blog = props.blog;
   const ID = props.id
   const obtenerDetalle = props.redirigirRuta
   
   //  const eliminarPost = props.eliminarPost

   return (
      
            // <div key={blog.id} className="blog">
            //    <h2>{blog.titulo}</h2>
            //    <p className="autor">Escrito por: {blog.autor}</p>
            //    <div className="subContainer">
            //       <img src={blog.url} alt="" className="imagen" />
            //       {/* <p className="body">{blog.body}</p> */}
            //    </div>
            //    <button onClick={()=> obtenerDetalle(ID)}>Leer Post</button>
            //    {/* <button onClick={()=>eliminarPost(ID)}>Eliminar Post</button> */}
            // </div>
            <Card
               onClick={()=> obtenerDetalle(ID)}
               hoverable
               style={{ width: 240 }}
               cover={blog.url ? <img alt="imagen post" src={blog.url} /> : <img alt="imagen post" src={not_found} />}
            >
            <Meta title={blog.titulo} description={blog.autor} />
            </Card>
        
   );
};

export default ListaBlog;
