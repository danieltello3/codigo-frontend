import React from "react";
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
      maxWidth: 345,
   },
});

const ListaBlog = (props) => {
   const clases = useStyles();
   const blog = props.blog;
   const ID = props.id;
   const obtenerDetalle = props.redirigirRuta;
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
      <Card>
         <CardActionArea
            className={clases.root}
            onClick={() => obtenerDetalle(ID)}>
            {blog.url ? (
               <CardMedia
                  component="img"
                  height="160"
                  image={blog.url}
                  title={blog.autor}
               />
            ) : (
               <CardMedia
                  component="img"
                  height="160"
                  image={not_found}
                  title={blog.autor}
               />
            )}

            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {blog.titulo}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               onClick={() => obtenerDetalle(ID)}
               size="small"
               color="primary">
               Ir al detalle
            </Button>
         </CardActions>
      </Card>
   );
};

export default ListaBlog;
