import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React, { useEffect } from "react";

import ScrollToTop from "../components/ScrollToTop";
import { HomeScreen } from "../components/HomeScreen";
import { CuponesScreen } from "../components/CuponesScreen";
import { Info } from "../components/Info";
import { FormChoque } from "../components/FormChoque";
import { LoginFirstTime } from "../components/LoginFirstTime";
import { CuponScreen } from "../components/CuponScreen";
import { UserAccount } from "../components/UserAccount";
import { useDispatch, useSelector } from "react-redux";
import { LoginScreen } from "../components/LoginScreen";
import { startChecking } from "../actions/auth";
import { TimeOutModal } from "../components/TimeOutModal";
import { PrivateRoute } from "./PrivateRoute";
import {
  cuponsStartLoading,
  getBannersCupones,
  getTextosApp,
} from "../actions/cda";
import { Contacto } from "../components/Contacto";
import { OlvidePass } from "../components/OlvidePass";
import { ResetPass } from "../components/ResetPass";
import { FormSelect } from "../components/FormSelect";
import { FormRobo } from "../components/FormRobo";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
    dispatch(cuponsStartLoading());
    dispatch(getTextosApp());
    dispatch(getBannersCupones());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
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
          component={UserAccount}
          isAuthenticated={!!uid}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/info-club">
          <Info />
        </Route>
        <Route exact path="/form-select">
          <FormSelect />
        </Route>
        <Route exact path="/form-choque">
          <FormChoque />
        </Route>
        <Route exact path="/form-robo">
          <FormRobo />
        </Route>
        <Route exact path="/login-first">
          <LoginFirstTime />
        </Route>
        <Route exact path="/olvide-pass">
          <OlvidePass />
        </Route>
        <Route path="/reset-pass/:token/:id">
          <ResetPass />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>

        <Redirect to="/" />
      </Switch>
      {uid !== undefined && <TimeOutModal />}
    </Router>
  );
};

export default AppRouter;
