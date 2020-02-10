import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Error from "./error";

import CommonRoute from "./commonRoute";


import { CtxProvider } from "./context";

const MainRouter = (props) => {
    return (<React.Fragment>
        <BrowserRouter>
            <CtxProvider>
                <Route path="/" component={CommonRoute} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />

                <Route path="/error" component={Error} />

            </CtxProvider>

        </BrowserRouter>
    </React.Fragment>)
}


export default MainRouter;