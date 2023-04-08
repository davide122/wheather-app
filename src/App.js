import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import HomePage from "./Component/HomePage";
import React from 'react';
import MeteoInfo from './Component/MeteoInfo';


 
const App=()=> {

  return(
  <>

    <BrowserRouter>
   
      <HomePage/>
      
        <Routes>
        <Route path='/info' element={<MeteoInfo></MeteoInfo>}/>
        </Routes>
      


    </BrowserRouter>
      

</>
  )

}
 
 
  
  


export default App;
