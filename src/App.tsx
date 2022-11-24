import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Title } from './componentes/title/Title';
import { Text } from './componentes/Text/Text';
import  Navbar from "./componentes/Navbar/Navbar";

function App() {
  const nome = 'hugo';
  return (
    <>

    <Navbar/>
      <Title nome={nome}/>
      <Text/>
    </>
  );
}

export default App;