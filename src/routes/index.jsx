import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Darshboard from "../pages/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {
  const [autentication, setAutentication] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));
    if (token) {
      return setAutentication(true);
    }
  }, [autentication]);

  return (
    <Switch>
      <Route exact path="/">
        <Home autentication={autentication} />
      </Route>
      <Route path="/signup">
        <Signup autentication={autentication} />
      </Route>
      <Route path="/login">
        <Login autentication={autentication} setAutentication={setAutentication}/>
      </Route>
      <Route>
        <Darshboard autentication={autentication} />
      </Route>
    </Switch>
  );
};

export default Routes;
