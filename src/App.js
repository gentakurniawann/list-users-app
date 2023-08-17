import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import ListUsers from "./pages/ListUsers/listUsers";
import DetailUser from "./pages/DetailUsers/detailUser";
import Error404 from "./pages/Error404/error404";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/users" component={ListUsers}/>
      <Route exact path="/users/:id" component={DetailUser}/>
      <Route exact path="*" component={Error404}/>
    </Switch>
  );
}

export default App;
