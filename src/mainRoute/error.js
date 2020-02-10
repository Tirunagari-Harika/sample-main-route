import React from "react";
import { AppCtx } from "./context";

const Error = (props) => {

    const errCtx = React.useContext(AppCtx);

    const out = () => {
        window.location.assign("https://www.google.com?error=error");
    }

    React.useEffect(() => {
        console.log("Error: Mounting", props.history.action);
        let a = 1;
        console.log("Error: a", a);
        return () => {
            console.log("Error: UnMounting");
            let b = 2;
            console.log("Error: b", b);
        }
    }, []);


    return (<div>
        Error --- {errCtx.ctxVar}
        <button onClick={out}>Out</button>
    </div>)
}

export default Error;