import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element= {<Home/>} />
          <Route exact path='/login' element= {<Login/>} />
          <Route exact path='/signup' element= {<Signup/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
