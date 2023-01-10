import React, { useEffect } from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { OrderPage } from './components/OrderPage/OrderPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate() 

  useEffect(()=> {
    navigate('/')
  },[])

  
  return (
    <div className="App">
         <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/order' element={<OrderPage/>}/>

        </Routes> 
      </div>
     
    </div>
  );
}

export default App;
