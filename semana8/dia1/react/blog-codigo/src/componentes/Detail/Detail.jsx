import React, {useEffect, useState} from "react";
import { useParams, useHistory} from "react-router-dom";
import { firestore } from "../../Firebase";
// import useFetch from "../../hooks/useFetch/useFetch";
// import { url } from "../../utils/utils";
import './Detail.scss'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Detail = () => {
   const { id } = useParams();
   // const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
   const [blog, setBlog] = useState(null)
   const history = useHistory();

   useEffect(()=>{
      async function fetchData(){
         const snapshot = await firestore.collection("blogs").doc(id).get();
         const data = snapshot.data();
         setBlog(data)
      }
      fetchData()
   },[id])

   const eliminarEntrada = () => {
      //POST, DELETE, PUT, GET, Metodos para peticiones.
      // fetch(`${url}${id}`, {
      //     method: "DELETE"
      // }).then(()=> history.push("/"));
      firestore.collection("blogs").doc(id).delete().then(() => {
         MySwal.fire(
            `el blog fue eliminado exitosamente`,
            "se elimino la entrada",
            "success"
         ).then(()=> history.push("/"))
         
      })
      
   };

   return (
      <div className="detail">
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
