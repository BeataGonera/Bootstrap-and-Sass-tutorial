import React from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        
        </Routes> 
      </div>
     
    </div>
  );
}

export default App;
