import React from "react";
import logo from "./../../logo.svg";
// import "./NavBar.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Toolbar';

const usarEstilos = makeStyles((tema)=>({
   desktop: {
      [tema.breakpoints.up('sm')]: {
         display: 'flex',
         marginLeft: 'auto',
       },
      [tema.breakpoints.down('sm')]: {
         display: 'none',
         marginLeft: 'auto',
       },
   }
}));

const NavBar = () => {
   const history = useHistory();
   const classes = usarEstilos();
   
   return (
      // <header>
      //    <img className="logo" src={logo} alt="logo" />
      //    <nav>
      //       <a href="/">Home</a>
      //       <a href="/Contact">Contacto</a>
      //       <Link to="/info">Informacion</Link>
      //       <a href="/detail">Detalles</a>
      //       <a onClick={() => history.push("/create")}>Crear nuevo blog</a>
      //       <a href="/Register">Registrate</a>
      //       <a href="/Login">Iniciar Sesion</a>
      //    </nav>
      // </header>
      <AppBar position="static" color="transparent">
         <Toolbar>
            <img className="logo" src={logo} alt="logo" style={{width: "100px"}}/>
            <div className={classes.desktop}>
               <Button >Home</Button>
               <Button >Contacto</Button>
               <Button >Informacion</Button>
               <Button >Detalles</Button>
               <Button onClick={() => history.push("/create")}>Crear nuevo blog</Button>
               <Button >Registrate</Button>
               <Button >Iniciar Sesion</Button>
            </div>
         </Toolbar>
      </AppBar>
   );
};

export default NavBar;
