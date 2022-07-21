import TopBar from "./component/topBar/TopBar";
import React from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Footer from "./component/footer/Footer"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,    
    Route,
    Switch,
      
} from "react-router-dom";
function App() {
    const user = false;
    return (
        <Router>
            <TopBar/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
            <Switch>
                <Route path="/register">
                    {user ? <Home/>:<Register/>}
                </Route>
            </Switch>
            <Switch>
                <Route path="/login">
                {user ? <Home/>:<Login/>}
                </Route>
            </Switch>
            <Switch>
                <Route path="/write">
                {user ? <Write/>:<Register/>}
                </Route>
            </Switch>
            <Switch>
                <Route path="/post/:postID">
                    <Single/>
                </Route>
            </Switch>
            <Switch>
                <Route path="/setting">
                    {user ? <Setting/>:<Register/>}
                </Route>
            </Switch>


            <Footer/>
        </Router>
    );
}

export default App;