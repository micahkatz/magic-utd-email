import React from 'react';
import './App.css';
import './inlined.css';
import './comps/greatSite.css';

import Home from './pages/Home';
import Center from './comps/center';

function App() {
  return (
    <div className="App">
      <Center>
        <Home/>
      </Center>
    </div>
  );
}

export default App;
