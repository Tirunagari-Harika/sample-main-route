import React from "react";

const CommonRoute = (props) => {

    React.useEffect(() => {
        let path = window.location.pathname;
        let action = props.history.action;

        if (action === "POP") {
            if (path.indexOf("page1") !== -1) {

            } else if (path.indexOf("page2") !== -1) {
                props.history.push({
                    pathname: "/error"
                })
            } else if (path.indexOf("page3") !== -1) {

            } else if (path.indexOf("error") !== -1) {
                props.history.push({
                    pathname: "/error"
                })
            }
        }


    }, [props.history.action])

    return (<React.Fragment>
        Common ROute
    </React.Fragment>)
}

export default CommonRoute;