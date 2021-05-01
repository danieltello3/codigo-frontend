import React, { useCallback, useState } from "react";
import "./Login.scss";
import firebase from "./../../Firebase";
import { withRouter } from "react-router";

const Login = ({ history }) => {
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   const handleSignIn = useCallback(
      async (event) => {
         event.preventDefault();

         try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
         } catch (err) {
            alert(err);
         }
      },
      [email, password, history]
   );

   return (
      <div className="container">
         <h2>Login</h2>
         <form onSubmit={handleSignIn}>
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

export default withRouter(Login);
