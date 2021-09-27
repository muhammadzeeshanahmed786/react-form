import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import SignUp from "../components/sign-up";
import SignIn from "../components/Sign-In";


function ReactRouter(){
    return(
        <Router>
            <Switch>
               <Route exact path='/'>
                <SignIn/>
               </Route>
               <Route path='/Sign Up'>
                <SignUp/>
               </Route>
           
            </Switch>
        </Router>
    )
}

export default ReactRouter;