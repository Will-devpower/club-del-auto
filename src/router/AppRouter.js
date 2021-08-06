import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
 

import ScrollToTop from "../components/ScrollToTop";
import { HomeScreen } from "../components/HomeScreen";
import { CuponesScreen } from "../components/CuponesScreen";
import { CuponScreen } from "../components/CuponScreen";
import { UserAccount } from "../components/UserAccount"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/LoginScreen";
  
  
  
  const AppRouter = () => {  
      
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);    

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }
  
    return (
      <Router>
          <ScrollToTop />        
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/cupones-de-descuento">
              <CuponesScreen />
            </Route>
            <Route exact path="/cupon/:id">
              <CuponScreen />
            </Route>
            <Route exact path="/client-account">
              <UserAccount />
            </Route>
            <Route exact path="/login">
              <LoginScreen />
            </Route>             
          </Switch>             
      </Router>
    );
  }
  
  export default AppRouter;
  