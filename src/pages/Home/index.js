// primeiro componente - estrutura básica
import React, { useState, useEffect } from 'react';
// igugal se fizesse const React = require('react')
import Filme from '../Components/Filmes';

// UseEEffect - ficaaa escutando mudaça dos States

const Home = () => {
    // LÓGICA DO COMPONENTE
    
    // extrai um array 
    // [Variavel estado, função que atualiza ] = useState(estado inical)
    const [ listaFilmes, setListaFilmes] = useState([]) // nesse caso o estado inicial é uma lista vazia
    const [filme, setFilme] = useState({
        nome: 'Exemplo inicial',
        categoria: 'Inical',
        ano: 0
    }) 
    // const listaFilmes = [] - antes era assim

    const cadastrar = () => {
        setListaFilmes([...listaFilmes, filme])
    }

    // useEffect(função, arraw de states que serão escutadas)
    useEffect(() => {
        alert('Filme cadastrado')
    }, [listaFilmes])

    // sempre que for carregado - sem state
    useEffect(() => {
        console.log('COMPONENTE CARREGADO')
    }, [])

    // RETORNAR O HTML DO COMPONENTE
    return (
        <div className='container'>
            <br/>
            <h1 className='display-1'>Lista de Filmes</h1>
            <br/>
            <div className='p-4 mb-4 bg-light rounded-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-4'>
                            <label>Nome</label>
                            <input 
                                type='text' 
                                className='form-control' placeholder='Nome do filme'
                                onChange={(e) => {
                                    setFilme({
                                        ...filme, // pega tudo qque ja tem dentro
                                        nome:e.target.value
                                    })
                                }}/>
                        </div>
                        <div className='col-4'>
                            <label>Categoria</label>
                            <select 
                                className='form-control'
                                onChange={(e)=>{
                                    setFilme({
                                        ...filme,
                                        categoria: e.target.value
                                    })
                                }}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label>Ano</label>
                            <input 
                                    type='number' className='form-control'
                                    onChange={(e)=>{
                                        setFilme({
                                            ...filme,
                                            ano: e.target.value
                                        })
                                    }}/>
                        </div>
                    </div>
                    <br/>
                    <div className='d-grid gap-2'>

                    <button className='btn btn-success d-block' onClick={cadastrar}>Cadastrar</button>
                    </div>
                </div>
            </div>
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