import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PlanoContas from './components/PlanoDeContas/planoContas';
import Dashboard from './components/Dashboard/Dashboard';

function Main(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/plano' element={<PlanoContas />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </Router>
    )
}
export default Main;