import React, { useCallback, useState } from "react";
import "./Register.scss";
import firebase from "./../../Firebase";
import { withRouter } from 'react-router'

const Register = ({ history }) => {
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   const handleSignUp = useCallback(
      async (event) => {
         event.preventDefault();
         
         try {
            await firebase
               .auth()
               .createUserWithEmailAndPassword(email, password);
            history.push("/");
         } catch (err) {
            alert(err);
         }
      },
      [email, password, history]
   );

   return (
      <div className="container">
         <h2>Hola, Bienvenido al blog de CodiGo</h2>
         <form onSubmit={handleSignUp}>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" />
            <label htmlFor="dni">DNI</label>
            <input id="dni" type="number" />
            <label htmlFor="usuario">Usuario</label>
            <input id="usuario" type="text" />
            <label htmlFor="email">Correo Electronico</label>
            <input
               id="email"
               type="email"
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
               id="password"
               type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Ingresar</button>
         </form>
      </div>
   );
};

export default withRouter(Register);
