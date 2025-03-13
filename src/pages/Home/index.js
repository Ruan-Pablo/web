// primeiro componente - estrutura básica
import React from 'react';
// igugal se fizesse const React = require('react')
import Filme from '../Components/Filmes';


const Home = () => {
    // LÓGICA DO COMPONENTE
    const listaFilmes = [
        {nome: 'filme 1', ano: 2020, categoria: 'categoria 1'},
        {nome: 'filme 2', ano: 2021, categoria: 'categoria 2'},
        {nome: 'filme 3', ano: 2022, categoria: 'categoria 3'},
        {nome: 'filme 4', ano: 2023, categoria: 'categoria 4'},
        {nome: 'filme 5', ano: 2024, categoria: 'categoria 5'}
    ]
    // RETORNAR O HTML DO COMPONENTE
    return (
        <div className='container'>
            <br/>
            <h1>Lista Filmes</h1>
            <br/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Caategoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <Filme /> */}
                    {/* {} - permite eu escrever codigo js */
                        listaFilmes.map((filme) => (
                        <Filme dados={filme} />))
                    }
                    
                </tbody>
            </table>

        </div>
    );
}

export default Home;