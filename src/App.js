import React from 'react'
import  styled from 'styled-components';
import traco from './images/traco.svg'

export const Imagem = styled.img`
  width: 100px;
  height: 100px;
`;
 

function App() {


  return (
    <div>
      <p>Teste de colocar traço</p>
      <Imagem src={traco} alt="" />
      <p>testeeeee1</p>
    </div>
  );
}

export default App;
 