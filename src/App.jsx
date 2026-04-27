import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListaTarefas from './lista-tarefas'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaTarefas" element={<ListaTarefas />} />
      </Routes>
    </BrowserRouter>
   
  )
}
export default App;
