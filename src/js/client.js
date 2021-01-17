import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Feature from "./pages/Featured";
import Settings from "./pages/Settings";

const app = document.getElementById("app");
ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Feature}></Route>
            <Route exact path="/archives" component={Archives}></Route>
            <Route path="/archives/:article" component={Archives}></Route>
            <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
        </Layout>
    </Router>,
    app
);