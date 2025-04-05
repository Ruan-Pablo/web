import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const RoutesApp = () => {

    const logado = localStorage.getItem('@user')
    
    // se nn estiver a rota user mostra a page login

    return(

        // perte trabalhar com rotas
        <BrowserRouter>
            {/* // mostra um por vez, ou um ou outro */}
            {/*DESCONTINUADO <Switch> */}
            <Routes>
                {/* // define a rota, exact - exatamente o que tem no path */}
                {!logado && <Route path='/' element={<Login/>} />}
                {logado && <Route path='/' exact element={<Home/>} />}
            </Routes>
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default RoutesApp