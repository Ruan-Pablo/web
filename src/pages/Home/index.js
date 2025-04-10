import React, { useEffect, useState } from "react";

// import logo from '../../assets/logo.png'

import ModalFilme from "../Components/ModalFilme";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Secao from '../Components/Secao'
import api from "../../services/api";


const Home = () => {

    // states hero e sessões
    const   [principal, setPrincipal] = useState({}) // HERO
    const [secoes, setSecoes] = useState([]) // varios


    // metodo para pegar a requisição de recuperar os dados
    const getHome = async () => {
        try {
            const response = await api.get('/home')
            const res = response.data

            if (res.error){
                alert(res.message)
                return false
            }
        //    exec
        setPrincipal(res.principal)
        setSecoes(res.secoes)
        console.log(res.secoes)
        } catch (err) {
            alert(err.message)
        }
    }
    useEffect(()=>{
        getHome()
    }, [])

    return (
        <>
        
        <ModalFilme/>
        

        <div class="container-fluid">
            <Header/>
        </div>
        
        <Hero filme ={principal}/>

        <div class="main-content">
            {secoes.map(seccao => (
                <Secao secao={seccao}/>
            ))} 
        </div>

        </>
    )
}

export default Home;