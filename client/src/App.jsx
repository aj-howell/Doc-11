import './App.css';
import React from 'react';

import { useApi } from './hooks/use-api';
import Navbar from './components/Navbarr/Navbar';

const App = () => {

  return (

    <div className='container'>

      <Navbar/>
      
    </div>
  );
}

export default App;
