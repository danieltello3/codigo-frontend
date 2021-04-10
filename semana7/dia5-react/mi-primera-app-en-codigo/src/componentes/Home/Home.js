import React from "react";
import Content from "../Content/Content";
import Aside from "../Aside/Aside";
import "./style.css";


const Home = () => {
   
   return (
      <div>
         <div className="container">
             <Content/>
             <Aside/>
         </div>
      </div>
   );
};

export default Home;
