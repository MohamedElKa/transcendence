import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Start from "./Start.js";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>

      <div className="App">
        
        <div>
           <Routes>
            <Route path='/' element={<Start />}></Route>
            <Route path='/login' element={<Login />}></Route>
            {/* <Route path='/register' element={<Start />}></Route> */}
          </Routes> 


        </div>
      </div>

    </Router>
  );
}

export default App;
