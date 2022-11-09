import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.css"

import App from './ex1-class-components/App';
import Main from './ex2-function-component/Main';
import AFMain from './ex3-arrow-function-component/AFMain';
import Table from './ex4-table/Table';
import StylingExample from './ex5-styling/StylingExample';
import TableStyled from './ex5-styling/TableStyled';
import Namelist from './ex6-variables-functions/Namelist';
import NameListProps from './ex7-props/NameListProps';
import MenuList from './ex7-props/MenuList';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const welcomeMessage = react.createElement("h1", null, "Hello Group 43!!");

//const messageJSX = <h1>Hello Group 43!!</h1>;


//const listOfNames = ["Mehrdad Javan", "Simon Elbrink"];
//root.render(<NameListProps names={listOfNames}  />);


 const links = [
     {id: 1, name: "lexicon", url:"http://www.lexicon.se"},
     {id:2 , name: 'Oracle', url: 'https://www.oracle.com'},
     {id:3 , name: 'Google', url: 'https://www.google.com'}
 ];


root.render(<MenuList links={links} />);
