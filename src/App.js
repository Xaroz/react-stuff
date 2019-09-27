import React, { useState, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import PageError from "./PageError";
import "./App.css";
import { UserContext } from "./UserContext";

function App() {
  // const [value, setValue] = useState('from context');
  // const providerValue = useMemo(() => ({value,setValue}), [value,setValue])
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <NavBar />
      <UserContext.Provider value={value}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" render={() => <Page1 />} />
          <Route exact path="/page2" render={() => <Page2 />} />
          <Route component={PageError} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
