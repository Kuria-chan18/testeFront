import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/login';
import Login2 from './components/Login2/logintwo';
import Cadastro from './components/Cadastro/cadastro';
import PlanoContas from './components/PlanoDeContas/planoContas';
import Dashboard from './components/Dashboard/Dashboard';
import Empresas from './components/Empresas/empresas';

function Main(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/login2' element={<Login2 />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/plano' element={<PlanoContas />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/empresas' element={<Empresas />}/>
            </Routes>
        </Router>
    )
}
export default Main;