import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
 
import { useEffect } from "react";


import ScrollToTop from "../components/ScrollToTop";
import { HomeScreen } from "../components/HomeScreen";
import { CuponesScreen } from "../components/CuponesScreen";
import { CuponScreen } from "../components/CuponScreen";
import { UserAccount } from "../components/UserAccount"; 
import { useDispatch, useSelector } from "react-redux";
import { LoginScreen } from "../components/LoginScreen";
import { startChecking } from "../actions/auth";  
import { TimeOutModal } from "../components/TimeOutModal";
import { PrivateRoute } from "./PrivateRoute";
  
  
  const AppRouter = () => {  
    
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);
    useEffect(() => {
        
        dispatch( startChecking());

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
              <Route exact path="/cupones/:id">
                <CuponScreen />
              </Route>
              <PrivateRoute 
                  exact 
                  path="/client-account"
                  component={ UserAccount }
                  isAuthenticated={ !!uid }
              />            
              <Route exact path="/login">
                <LoginScreen />
              </Route>
              <Redirect to="/" />             
          </Switch>
          {
            uid !== undefined &&
            <TimeOutModal />
          }          

      </Router>
    );
  }
  
  export default AppRouter;
  