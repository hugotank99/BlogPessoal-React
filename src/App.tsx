import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './componentes/title/Title';
import { Text } from './componentes/Text/Text';
import  Navbar from "./componentes/estatica/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/about/About";



function App() {
  const nome = 'hugo'; 
  return (
    <Router> {/*Orquestrador - que ira montar a pag que o usuario*/}
    <Navbar/>
    <Routes> {/*lista os aplicativos*/}
      <Route path='/' element={<Home/>}/> {/* Rota*/}
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </Router>
  );
}

export default App;