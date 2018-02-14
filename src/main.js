import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from "./calendar";

ReactDOM.render(
    //<h1>Hello, world!</h1>,
    React.createElement(Calendar),
    document.querySelector(".calendar")
);