import React, { useState } from "react";
import { url } from "../../utils/utils";
import { v4 as id } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      "& > *": {
         margin: theme.spacing(1),
         width: "25ch",
         textAlign: "center",
      },
      display: "flex",
      flexDirection: "column",
   },
}));

const Create = () => {
   const [titulo, setTitulo] = useState("");
   const [body, setBody] = useState("");
   const [autor, setAutor] = useState("");
   const clases = useStyles();

   const enviarInfo = (event) => {
      event.preventDefault();
      const blog = { titulo, body, autor, id };

      fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(blog),
      }).then(() => alert("blog agregado!!"));
   };

   return (
      <div className={clases.formulario}>
         {/* <h2>Agregar un nuevo blog</h2>
         <form onSubmit={enviarInfo}>
            <div>
               <label htmlFor="">titulo del blog: </label>
               <input type="text" required value={titulo} onChange={(element)=> setTitulo(element.target.value)} />
            </div>
            <div>
               <label htmlFor="">Autor: </label>
               <input type="text" required value={autor} onChange={(element)=> setAutor(element.target.value)} />
            </div>
            <div>
               <label htmlFor="">Contenido: </label>
               <input type="text" required value={body} onChange={(element)=> setBody(element.target.value)} />
            </div>
            <button>Post</button>
         </form> */}

         <Typography variant="h4">Agregar un nuevo Blog</Typography>
         <form className={clases.root} noValidate autoComplete="off">
            <TextField
               id="standard-basic"
               label="Titulo del blog"
               required
               value={titulo}
               onChange={(element) => setTitulo(element.target.value)}
            />
            <TextField
               id="standard-basic"
               label="Autor"
               required
               value={autor}
               onChange={(element) => setAutor(element.target.value)}
            />
            <TextField
               id="standard-multiline-static"
               label="Contenido"
               multiline
               rows={4}
               label="Contenido"
               required
               value={body}
               onChange={(element) => setBody(element.target.value)}
            />
            <Button color="primary" variant="contained" onClick={enviarInfo}>
               Agregar
            </Button>
         </form>
      </div>
   );
};

export default Create;
