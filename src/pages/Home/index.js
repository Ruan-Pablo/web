import React from "react";

// import logo from '../../assets/logo.png'

import ModalFilme from "../Components/ModalFilme";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Secao from '../Components/Secao'

const Home = () => {
    return (
        <>
        
        <ModalFilme/>
        

        <div class="container-fluid">
            <Header/>
        </div>
        
        <Hero/>

        <div class="main-content">
            <Secao/>
        </div>

        </>
    )
}

export default Home;