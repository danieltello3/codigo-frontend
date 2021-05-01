import "./App.css";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Detail from "./componentes/Detail/Detail";
import Create from "./componentes/Create/Create";
import NotFound from "./componentes/NotFound/NotFound";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";
import Register from "./componentes/Register/Register";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


function App() {
   return (
      <AuthProvider>
         <Router>
            <NavBar />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route path="/detail/:id">
                  <Detail />
               </Route>
               <PrivateRoute exact path="/create">
                  <Create />
               </PrivateRoute>
               <Route exact path="/login">
                  <Login />
               </Route>
               <Route exact path="/register">
                  <Register />
               </Route>
               <Route path="*">
                  <NotFound />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </AuthProvider>
   );
}

export default App;
