import React from 'react';
import GlobalStyle from './globalStyles';
import { Profile, Home } from './containers';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <GlobalStyle/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
  </Router>  
  );
}

export default App;