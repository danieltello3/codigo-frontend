import React from "react";
import { useParams, useHistory} from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";
import './Detail.scss'

const Detail = () => {
   const { id } = useParams();
   
   const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
   const history = useHistory();

   const eliminarEntrada = (id) => {
      //POST, DELETE, PUT, GET, Metodos para peticiones.
      fetch(`${url}${id}`, {
          method: "DELETE"
      }).then(()=> history.push("/"));
   };

   return (
      <div className="detail">
         {isLoading && <div className="detail__loading">cargando...</div>}
         {error && <div className="detail__error">{error}</div>}
         {blog && (
            <article className="detail__article">
               <h2 className="detail__article__titulo">{blog.titulo}</h2>
               <p className="detail__article__autor">Escrito por: {blog.autor}</p>
               <img className="detail__article__image" src={blog.url} alt="imagen de post"/>
               <div className="detail__article__body">{blog.body}</div>
               <button className="detail__article__button" onClick={() => eliminarEntrada(blog.id)}>
                  Eliminar esta publicacion
               </button>
            </article>
         )}
      </div>
   );
};

export default Detail;
