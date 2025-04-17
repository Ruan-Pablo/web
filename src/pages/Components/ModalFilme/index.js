import React, {useEffect, useState} from "react";
import Episodio from "../Episodeo";
import api from '../../../services/api'


const ModalFilme = () => {

    const [filme, setFilme] = useState({})
    const [episodios, setEpisodios] = useState([]) // array de objetos

    const selectFilmeListener = () => {
        window.addEventListener("selectFilme", (data) => {
            setFilme(data.detail)
        })
    }

    const getEpisodios = async (temporada_id) => {
        try{
            const response = await api.get(`episodio/temporada/${temporada_id}`)
            const res = response.data
            
            if (res.error){
                alert(res.message)
                return false
            }
            console.log(res.episodios)
            setEpisodios(res.episodios)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        selectFilmeListener()
    }, [])
    useEffect(() => {
        if(filme.tipo == 'serie'){
            getEpisodios(filme.temporadas[0]?._id)
        }
    }, [filme])

    return (
        <div class="modal fade" id="modal-filme" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-hero">
                    <img src={filme.capa} alt=""/>
                    <div class="col-12 modal-hero-infos">
                        <button class="btn btn-lg bg-light">
                        <i class="ri-play-mini-fill"></i>
                        Assistir
                        </button>

                        <a href="#" class="btn-custom-round btn btn-lg btn-light rounded-circle">
                        <i class="ri-play-large-fill"></i>
                        </a>
                        <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                        <i class="ri-thumb-up-fill text-white"></i>
                        </a>
                        <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                        <i class="ri-thumb-down-fill text-white"></i>
                        </a>
                    </div>
                    </div>
                    <div class="modal-info">
                    <div class="container">
                        <div class="row">
                        <div class="col-7">
                            <p class="filme-descricao">  
                            {filme.descricao}
                            </p>
                        </div>
                        <div class="col-5">
                            <p class="filme-elenco">
                            Elenco: <text>{filme.elenco.join(', ')}</text>

                            </p>
                        </div>
                        </div>
                        {(filme.tipo !== "filme") &&(
                        <>
                        <div class="row">
                            <div class="col-7">
                                <h3 class="text-white">Episodios</h3>
                            </div>
                            <div class="col-5 text-right">
                                <select name="" id="" className="form-control" onChange={(e) => {
                                    getEpisodios(e.target.value);
                                        } }>
                                    {filme.temporadas?.map((temporada) => (
                                                <option value={temporada._id}>{temporada.titulo}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <ul id="lista-episodios">
                                        {episodios.map((episodio) => (
                                                <Episodio episodio={episodio} />
                                            ))}
                                    </ul>
                                </div>
                            
                            </>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFilme;