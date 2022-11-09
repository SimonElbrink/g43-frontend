import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ex1-class-components/App';
import Main from './ex2-function-component/Main';
import AFMain from './ex3-arrow-function-component/AFMain';
import Table from './ex4-table/Table';
import StylingExample from './ex5-styling/StylingExample';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const welcomeMessage = react.createElement("h1", null, "Hello Group 43!!");

//const messageJSX = <h1>Hello Group 43!!</h1>;


root.render(<StylingExample/>);
