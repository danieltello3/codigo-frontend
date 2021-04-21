import React from "react";
import { useParams, useHistory} from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";
import { Button } from '@material-ui/core';

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
      <div>
         {isLoading && <div>cargando...</div>}
         {error && <div>{error}</div>}
         {blog && (
            <article>
               <h2>{blog.titulo}</h2>
               <p>Escrito por: {blog.autor}</p>
               <div>{blog.body}</div>
               <Button  color="primary" variant="contained" onClick={() => eliminarEntrada(blog.id)}>
                  Eliminar ese post
               </Button>
            </article>
         )}
      </div>
   );
};

export default Detail;
