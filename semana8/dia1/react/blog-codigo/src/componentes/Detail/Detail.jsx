import React from "react";
import { useParams, useHistory} from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";

const Detail = () => {
   const { id } = useParams();
   const url = `http://localhost:8000/blogs/`;
   const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
   const history = useHistory();

   const eliminarEntrada = (id) => {
      //POST, DELETE, PUT, GET, Metodos para peticiones.
      fetch(`${url}${id}`, {
          method: "DELETE"
      }).then(()=> history.push("/"));
   };

   return (
      <div>
         {isLoading && <div>cargando...</div>}
         {error && <div>{error}</div>}
         {blog && (
            <article>
               <h2>{blog.titulo}</h2>
               <p>Escrito por: {blog.autor}</p>
               <div>{blog.body}</div>
               <button onClick={() => eliminarEntrada(blog.id)}>
                  Eliminar ese post
               </button>
            </article>
         )}
      </div>
   );
};

export default Detail;
