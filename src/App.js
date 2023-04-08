import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import HomePage from "./Component/HomePage";
import React from 'react';



 
const App=()=> {

  return(
  <>

    <BrowserRouter>
   
      <HomePage/>



    </BrowserRouter>
      

</>
  )

}
 
 
  
  


export default App;
