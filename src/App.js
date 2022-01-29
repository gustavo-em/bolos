import React from 'react'
import  styled from 'styled-components';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Fotos } from './components/fotos/component';
import { Principal } from './pages/principal/conponent';

export const Imagem = styled.img`
  width: 100px;
  height: 100px;
`;
 

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Principal/>}/>
        <Route path="/fotos" element={<Fotos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 