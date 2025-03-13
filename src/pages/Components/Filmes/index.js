import React from "react";


// desestruturação - ao inves de fazer assim
//        (props) - props.argumento_passado
// faz assim
//        {argumento_passado} - argumento_passado.atr

const Filme = ({dados}) => {
    
    const mostrarNome = () => {
        alert(dados.nome)
    }

    // console.log(props)
    return (
        <tr>
            <td>{dados.nome}</td>
            <td>{dados.categoria}</td>
            <td>{dados.ano}</td>
            <td className="text-right">
                <button className='btn btn-outline-info' onClick={mostrarNome}>Detalhes</button>{' '}
                <button className='btn btn-danger'>Excluir</button>
            </td>
        </tr>
    )
}

export default Filme;