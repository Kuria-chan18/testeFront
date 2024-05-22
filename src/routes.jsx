import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/cadastro';
import PlanoContas from './components/PlanoDeContas/planoContas';
import Dashboard from './components/Dashboard/Dashboard';

function Main(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/plano' element={<PlanoContas />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </Router>
    )
}
export default Main;