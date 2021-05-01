import React, { useContext } from "react";
import logo from "./../../logo.svg";
import "./NavBar.scss";
import { Link, useHistory } from "react-router-dom";
import firebase from "./../../Firebase";
import {AuthContext} from "./../../Auth"

const NavBar = () => {
   const history = useHistory();
   const { currentUser } = useContext(AuthContext);

   const logOut = () => {
      firebase.auth().signOut();
      history.push("/");
   };

   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="logo" />
         <nav className="header__nav">
            <a className="header__nav__a" href="/">
               Home
            </a>
            <a className="header__nav__a" href="/Contact">
               Contacto
            </a>
            <Link className="header__nav__a" to="/info">
               Informacion
            </Link>
            <a className="header__nav__a" href="/detail">
               Detalles
            </a>
            {!!currentUser && (
               <a
                  className="header__nav__a"
                  onClick={() => history.push("/create")}>
                  Crear nuevo blog
               </a>
            )}
            {!!currentUser ? (
               <>
                  <a
                     className="header__nav__a"
                     onClick={logOut}>
                     Salir
                  </a>
               </>
            ) : (
               <>
                  <a
                     className="header__nav__a"
                     onClick={() => history.push("/register")}>
                     Registrate
                  </a>
                  <a
                     className="header__nav__a"
                     onClick={() => history.push("/login")}>
                     Iniciar Sesion
                  </a>
               </>
            )}
         </nav>
      </header>
   );
};

export default NavBar;
