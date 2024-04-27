import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el) => {
    console.log("Marketing App Mounted");

    ReactDOM.render(
        <App />,
        el
    )
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#dev-marketing");

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };