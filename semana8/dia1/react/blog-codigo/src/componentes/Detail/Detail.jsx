import React from "react";
import { useParams, useHistory} from "react-router-dom";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import {
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Button,
   Typography,
} from "@material-ui/core";
import not_found from "./../../assets/images/notFound.jpg";

const useStyles = makeStyles({
   root: {
      marginTop: 50,
      maxWidth: 745,
   },
 });
const Detail = () => {
   const { id } = useParams();
   const clases = useStyles()
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
            <Card className={clases.root}>
               <CardActionArea>
               <CardMedia
                  component="img"
                  alt="Imagen de blog"
                  height= "300"
                  image={blog.url}
                  title="imagen de blog"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {blog.titulo}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     {blog.body}
                  </Typography>
               </CardContent>
               </CardActionArea>
               <CardActions>
               <Button size="small" color="primary" variant="contained" onClick={() => eliminarEntrada(blog.id)}>
                  Eliminar esta publicación
               </Button>
               </CardActions>
            </Card>
         )}
      </div>
   );
};

export default Detail;
